<?php

namespace App\Http\Controllers;


use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Cloudinary\Cloudinary;
use Cloudinary\Transformation\Resize;

class DocumentController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }

    public function index()
    {
        $category = DB::table('document_categories')
                    ->join('categories', 'categories.id','=','document_categories.category_id')
                    ->select('document_categories.document_id', 'categories.name as category_name')
                    ->get();
        

        $documents = DB::table('documents')
                    ->join('users', 'users.id','=','documents.user_id')
                    ->select('documents.*'  ,'users.name as username', 'users.avt')
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
            'documents' => $documents,
        ], 200 );
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'descr' => 'string',
            'thumbnail' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'isPublic'=>'boolean',
            'src'=> "required|mimetypes:application/pdf|max:10000",
        ]);

      
        $documentClound = $request->file('src')->storeOnCloudinary('document_web/document');
        $thumbCloundDir = $documentClound->getFileName();
        $cld = new Cloudinary();
        
        $thumbConvert = $cld->image($thumbCloundDir.'.jpg')->resize(Resize::fill()->width(400)->height(600))->toUrl();

        $thumbnailClound = $thumbConvert->getScheme().'://'.$thumbConvert->getHost().'/'.$thumbConvert->getPath();


        $document = Document::create([
            'user_id'=>$request->user_id,
            'name' => $request->name,
            'desc' => $request->descr,
            'thumbnail' => $thumbnailClound,
            'isPublic'=>$request->isPublic,
            'src'=>$documentClound->getPath(),
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Document created successfully',
            'document' => $document,
        ]);
    }

    public function show($id)
    {
        $document = Document::find($id);

        if($document){
            return response()->json([
                'status' => 'success',
                'document' => $document,
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
            'name' => 'string|max:255',
            'descr' => 'string',
            'src'=> "required|mimetypes:application/pdf|max:10000",
        ]);

        if(Document::find($id)){
            $document = Document::find($id);
            if($request->name != null){
                $document->name = $request->name;
            }
            if($request->descr!=null){
                $document->descr = $request->descr;
            }
    
            if($request->src !=null){
                $documentClound = $request->file('src')->storeOnCloudinary('document_web/document');
                $thumbCloundDir = $documentClound->getFileName();
                $cld = new Cloudinary();
                
                $thumbConvert = $cld->image($thumbCloundDir.'.jpg')->resize(Resize::fill()->width(400)->height(600))->toUrl();
                $thumbnailClound = $thumbConvert->getScheme().'://'.$thumbConvert->getHost().'/'.$thumbConvert->getPath();
                
                
                $document->src = $documentClound->getPath();
                $document->thumbnail = $thumbnailClound;
            }
            $document->save();
    
            return response()->json([
                'status' => 'success',
                'message' => 'Document updated successfully',
                'document' => $document,
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
}
