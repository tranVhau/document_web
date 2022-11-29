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
        $this->middleware('auth:api', ['except' => ['index','show', 'getLimit']]);
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
                    ->select('document_categories.document_id', 'categories.name as category_name')
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


    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'desc' => 'string',
            'categories'=>'required',
            // 'thumbnail' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
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
            'user_id'=>$request->user_id,
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
}
