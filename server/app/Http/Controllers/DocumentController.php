<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $documents = Document::all();
        return response()->json([
            'status' => 'success',
            'documents' => $documents,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'desc' => 'string',
            'img' => 'string',
            'isPublic'=>'boolean'
        ]);

        $document = Document::create([
            'user_id'=>$request->user_id,
            'category_id'=>$request->category_id,
            'name' => $request->name,
            'desc' => $request->desc,
            'img' => $request->img,
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
            'desc' => 'string',
            'img' => 'string',
            'isPublic'=>'boolean'
        ]);

        $document = Document::find($id);
        $document->name = $request->name;
        $document->desc = $request->desc;
        $document->img = $request->img;
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
