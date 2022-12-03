<?php

namespace App\Http\Controllers;


use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Cloudinary\Cloudinary;
use Cloudinary\Transformation\Resize;
use Cloudinary\Transformation\Background;
use App\Models\document_category;

class DocumentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index','show', 'getLimit', 'search','getByCate', 'popular', 'overview']]);
    }

    public function index()
    {
        
        $category = DB::table('document_categories')
                    ->join('categories', 'categories.id','=','document_categories.category_id')
                    ->select('document_categories.document_id', 'categories.name as category_name')
                    ->get();
        

        $documents = DB::table('documents')
                    ->join('users', 'users.id','=','documents.user_id')
                    ->select('documents.*'  ,'users.name as username', 'users.avt')
                    ->where('documents.isPublic','=',1)
                    ->get();

        // add the array space to store all document category

        forEach($documents as $element){
            $element->categories = array();
            $element->avgRate = Document::where('id', $element->id)->first()->averageRating();
        }

        
        forEach( $documents as $doc){
           forEach($category as $cate){
            if($cate->document_id == $doc->id){
                array_push($doc->categories,$cate->category_name);
            }
           }
        }

        
        return response()->json([
            'status' => 'success',
            'data' => $documents,
        ], 200 );
    }

    public function getLimit($limit)
    {
        
        $category = DB::table('document_categories')
                    ->join('categories', 'categories.id','=','document_categories.category_id')
                    ->select('document_categories.category_id','document_categories.document_id', 'categories.name as category_name')
                    ->get();
        

        $documents = DB::table('documents')
                    ->join('users', 'users.id','=','documents.user_id')
                    ->select('documents.*'  ,'users.name as username', 'users.avt')
                    ->where('documents.isPublic','=',1)
                    ->paginate($limit?$limit:0);
                    // ->get();

        // add the array space to store all document category

        forEach($documents as $element){
            $element->categories = array();
            $element->avgRate = Document::where('id', $element->id)->first()->averageRating();
        }

        
        forEach( $documents as $doc){
           forEach($category as $cate){
            if($cate->document_id == $doc->id){
                array_push($doc->categories,$cate);
            }
           }
        }

        
        return response()->json([
            'status' => 'success',
            'data' => $documents,
        ], 200 );
    }


    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'desc' => 'string',
            'src'=> "required|mimetypes:application/pdf|max:10000",
        ]);

      
        $documentClound = $request->file('src')->storeOnCloudinary('document_web/document');
        $thumbCloundDir = $documentClound->getFileName();
        $cld = new Cloudinary();
        
        $thumbConvert = $cld->image($thumbCloundDir.'.jpg')->resize(Resize::pad()->width(600)->height(400)->background(
            Background::auto())
            )->toUrl();

        $thumbnailClound = $thumbConvert->getScheme().'://'.$thumbConvert->getHost().'/'.$thumbConvert->getPath();


        $document = Document::create([
            'user_id'=>auth()->user()->id,
            'name' => $request->name,
            'desc' => $request->desc,
            'thumbnail' => $thumbnailClound,
            'isPublic'=>$request->isPublic,
            'src'=>$documentClound->getPath(),
        ]);

        $currDocID = $document->id;
        $cates = $request->categories;

       if($cates){
        foreach ($cates as $cate ) {

            $isExist = DB::table('document_categories')->where([
                ['category_id', '=', $cate],
                ['document_id', '=', $currDocID],
            ])->first();

            if($isExist == null){
                    document_category::create([
                    'category_id' => $cate,
                    'document_id' => $currDocID,
                ]);
            }
        }
       }

        return response()->json([
            'status' => 'success',
            'message' => 'Document created successfully',
            'document' => $document,
        ]);
    }

    public function show($id)
    {
        $document = Document::find($id);
        $rating = Document::where('id', $id)->first();

        $category = DB::table('document_categories')
            ->join('categories', 'categories.id','=','document_categories.category_id')
            ->select('document_categories.document_id', 'categories.name as category_name')
            ->where('document_categories.document_id','=',$id)
            ->get();
        

        $documents = DB::table('documents')
                    ->join('users', 'users.id','=','documents.user_id')
                    ->select('documents.*'  ,'users.name as username', 'users.avt')
                    ->where([['documents.id','=',$id],['documents.isPublic','=',1]])
                    ->get();

        // add the array space to store all document category
        forEach($documents as $element){
            $element->categories = array();
            $element->avgRate =$rating->averageRating();
            $element->sumOfRate = $rating->timesRated();
        }
        forEach( $documents as $doc){
            forEach($category as $cate){
             if($cate->document_id == $doc->id){
                 array_push($doc->categories,$cate->category_name);
             }
            }
         }
        


        if($document){
            return response()->json([
                'status' => 'success',
                'data' => $documents,
            ], 200 );
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'document not found',
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'string|max:255|nullable',
            'desc' => 'string|nullable',
            'src'=> "mimetypes:application/pdf|max:100000|nullable",
        ]);

        if(Document::find($id)){
            $document = Document::find($id);
            if($request->name != null){
                $document->name = $request->name;
            }
            if($request->desc!=null){
                $document->desc = $request->desc;
            }

            if($request->isPublic!=null){
                $document->isPublic = $request->isPublic;
            }
    
            if($request->src !=null){
                $documentClound = $request->file('src')->storeOnCloudinary('document_web/document');
                $thumbCloundDir = $documentClound->getFileName();
                $cld = new Cloudinary();
                
                $thumbConvert = $cld->image($thumbCloundDir.'.jpg')->resize(Resize::pad()->width(600)->height(400)->background(
                    Background::auto())
                    )->toUrl();
                $thumbnailClound = $thumbConvert->getScheme().'://'.$thumbConvert->getHost().'/'.$thumbConvert->getPath();
                
                
                $document->src = $documentClound->getPath();
                $document->thumbnail = $thumbnailClound;
            }

            if($request->categories!=null ){
                DB::table('document_categories')
                ->where([['document_id','=', $id]])->delete();

                foreach($request->categories as $requestCateId){
                    document_category::create([
                        'category_id' => $requestCateId,
                        'document_id' =>$id,
                    ]);
                }
               
            }

            $document->save();
    
            return response()->json([
                'status' => 'success',
                'message' => 'Document updated successfully',
                'data' => $document,
            ], 200 );
            }else{
            return response()->json([
                'status' => 'error',
                'message' => 'Document Not Found',
            ], 404 );
        }
    }

    public function destroy($id)
    {
        $document = Document::find($id);

        if($document != null){
            $document->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Document deleted successfully',
            ], 200);
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'Document Not Found',
            ], 404);
        }
       
    }

    public function pending()
    {
        $category = DB::table('document_categories')
                    ->join('categories', 'categories.id','=','document_categories.category_id')
                    ->select('document_categories.document_id', 'categories.name as category_name')
                    ->get();
        

        $documents = DB::table('documents')
                    ->join('users', 'users.id','=','documents.user_id')
                    ->select('documents.*'  ,'users.name as username', 'users.avt')
                    ->where('documents.isPublic','=',0)
                    ->get();

        // add the array space to store all document category

        forEach($documents as $element){
            $element->categories = array();
        }

        
        forEach( $documents as $doc){
           forEach($category as $cate){
            if($cate->document_id == $doc->id){
                array_push($doc->categories,$cate->category_name);
            }
           }
        }

        
        return response()->json([
            'status' => 'success',
            'data' => $documents,
        ], 200 );
    }

    public function showpending($id)
    {
        $document = Document::find($id);


        $category = DB::table('document_categories')
            ->join('categories', 'categories.id','=','document_categories.category_id')
            ->select('document_categories.document_id', 'categories.name as category_name')
            ->where('document_categories.document_id','=',$id)
            ->get();
        

        $documents = DB::table('documents')
                    ->join('users', 'users.id','=','documents.user_id')
                    ->select('documents.*'  ,'users.name as username', 'users.avt')
                    ->where([['documents.id','=',$id],['documents.isPublic','=',0]])
                    ->get();

        // add the array space to store all document category
        forEach($documents as $element){
            $element->categories = array();
        }
        forEach( $documents as $doc){
            forEach($category as $cate){
             if($cate->document_id == $doc->id){
                 array_push($doc->categories,$cate->category_name);
             }
            }
         }
        


        if($document){
            return response()->json([
                'status' => 'success',
                'data' => $documents,
            ], 200 );
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'document not found',
            ], 404);
        }
    }

    public function search($keyword){
        $newKeyWord = str_replace('%20', ' ', $keyword);
        $category = DB::table('document_categories')
        ->join('categories', 'categories.id','=','document_categories.category_id')
        ->select('document_categories.category_id','document_categories.document_id', 'categories.name as category_name')
        ->get();
        $result = DB::table('documents')
        ->join('users', 'users.id','=','documents.user_id')
        ->where([['documents.name', 'LIKE','%'.$newKeyWord.'%'],['documents.isPublic','=',1]])
        ->select('documents.*','users.name as username', 'users.avt')
        ->get();

        
        forEach($result as $element){
            $element->categories = array();
            $element->avgRate = Document::where('id', $element->id)->first()->averageRating();
        }

        
        forEach( $result as $doc){
           forEach($category as $cate){
            if($cate->document_id == $doc->id){
                array_push($doc->categories,$cate);
            }
           }
        }
        return response()->json([
            'status' => 'success',
            'data' => $result,
        ], 200 );
    }

    public function getByCate($id){
        $category = DB::table('document_categories')
                ->join('categories', 'categories.id','=','document_categories.category_id')
                ->select('document_categories.category_id','document_categories.document_id', 'categories.name as category_name')
                ->get();


        $documents = DB::table('documents')
                ->join('users', 'users.id','=','documents.user_id')
                ->select('documents.*'  ,'users.name as username', 'users.avt')
                ->where('documents.isPublic','=',1)
                ->get();

        // add the array space to store all document category

        forEach($documents as $element){
            $element->categories = array();
            $element->avgRate = Document::where('id', $element->id)->first()->averageRating();
        }


        forEach( $documents as $key=>$doc){
            forEach($category as $cate){
                if($cate->document_id == $doc->id){
                    array_push($doc->categories,$cate);
                }
            }
           
        }


        // dd($documents);
        $resDocument = [];
        foreach($documents as $doc){
            $needleField = 'category_id';
            if(in_array($id, array_column($doc->categories, $needleField))){
                // unset($documents[$key]);
                array_push($resDocument,$doc);
            }
        }
        

        // var_dump($documents);
        return response()->json([
        'status' => 'success',
        'data' => $resDocument 
        ], 200 );
    }

    public function popular($num){
         $category = DB::table('document_categories')
                    ->join('categories', 'categories.id','=','document_categories.category_id')
                    ->select('document_categories.document_id', 'categories.name as category_name')
                    ->get();
        

        $documents = DB::table('documents')
                    ->join('users', 'users.id','=','documents.user_id')
                    ->select('documents.*'  ,'users.name as username', 'users.avt')
                    ->where('documents.isPublic','=',1)
                    ->get();

        // add the array space to store all document category

        forEach($documents as $element){
            $element->categories = array();
            $element->avgRate = Document::where('id', $element->id)->first()->averageRating();
        }

        
        forEach( $documents as $doc){
           forEach($category as $cate){
            if($cate->document_id == $doc->id){
                array_push($doc->categories,$cate->category_name);
            }
           }
        }

        $resDocument = [];
        foreach($documents as $doc){
            array_push($resDocument,$doc);
            
        }

        // dd(is_array($resDocument));

        // usort($resDocument, function($a, $b)
        //      {
        //          if ($a["avgRate"] == $b["avgRate"])
        //              return (0);
        //          return (($a["avgRate"] < $b["avgRate"]) ? -1 : 1);
        //      });


        usort($resDocument, function($a, $b) {return strcmp($b->avgRate, $a->avgRate);});
        $pupularDocument = [];
        if(count($resDocument) > $num){
            $pupularDocument = array_slice($resDocument, 0, $num);
        }else{
            $pupularDocument=$resDocument;
        }

        return response()->json([
            'status' => 'success',
            'data' => $pupularDocument,
        ], 200 );
    }


    public function overview(){
        $data = [];
        $documents = DB::table('documents')
            ->where('documents.isPublic','=',1)
            ->get();
        $pending = DB::table('documents')
            ->where('documents.isPublic','=',0)
            ->count();
        $document = DB::table('documents')
            ->count();
        $user = DB::table('users')
            ->where('isAdmin', 0)
            ->count();

        $sumRate = 0;
        $numOfDocRated = 0;
        forEach($documents as $element){
            $element->categories = array();
            if(Document::where('id', $element->id)->first()->averageRating()){
                $sumRate += Document::where('id', $element->id)->first()->averageRating();
                $numOfDocRated ++;
            }
        };
        $obj = (object) array('all_document' => $document, 'all_pending'=>$pending, 'all_user'=>$user, 'avg_rate'=>$sumRate/$numOfDocRated );
       
       

        // array_push($data,{'all_document'=$document, '' });

        // dd($pending, $document, $user, $sumRate, $numOfDocRated);
        return response()->json([
            'status' => 'success',
            'data' => [$obj],
        ], 200 );
    }
}
