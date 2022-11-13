<?php

namespace App\Http\Controllers;

use App\Models\document_category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class category_DocumentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(){
        $cate_doc = document_category::all();
        return response()->json([
            'status' => 'success',
            'cate_doc' => $cate_doc,
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'document_id'=>'required|integer',
            'category_id'=>'required|integer'
        ]);

        $isExist = DB::table('document_categories')->where([
            ['category_id', '=', $request->category_id],
            ['document_id', '=', $request->document_id]
        ])->first();



        if($isExist == null){

            $cate_doc = document_category::create([
                'category_id' => $request->category_id,
                'document_id' => $request->document_id,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'cate_doc created successfully',
                'cate_doc' => $cate_doc,
            ]);
        }else{
            return response()->json([
                'status' => 'success',
                'message' => 'cate_doc has been taken',
                
            ]);
        }


    }

    public function destroy(Request $request){
        $request->validate([
            'document_id'=>'required|integer',
            'category_id'=>'required|integer'
        ]);

        $cate_doc = DB::table('document_categories')->where([
            ['category_id', '=', $request->category_id],
            ['document_id', '=', $request->document_id]
        ])->first();

        if($cate_doc != null){
            $cate_doc = DB::table('document_categories')->where([
                ['category_id', '=', $request->category_id],
                ['document_id', '=', $request->document_id]
            ])->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'cate_doc deleted successfully',
            ]);
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'cate_doc not found',
            ]);
        }
    }
}
