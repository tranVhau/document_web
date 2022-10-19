<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DocumentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
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
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'descr' => 'string',
            'thumbnail' => 'string',
            'isPublic'=>'boolean'
        ]);

        $document = Document::create([
            'user_id'=>$request->user_id,
            'name' => $request->name,
            'descr' => $request->descr,
            'thumbnail' => $request->thumbnail,
            'isPublic'=>$request->isPublic,
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
        return response()->json([
            'status' => 'success',
            'document' => $document,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'descr' => 'string',
            'thumbnail' => 'string',
            'isPublic'=>'boolean'
        ]);

        $document = Document::find($id);
        $document->name = $request->name;
        $document->descr = $request->descr;
        $document->thumbnail = $request->thumbnail;
        $document->isPublic = $request->isPublic;
        $document->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Document updated successfully',
            'document' => $document,
        ]);
    }

    public function destroy($id)
    {
        $document = Document::find($id);
        $document->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Document deleted successfully',
            'document' => $document,
        ]);
    }
}
