<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index','show']]);
    }

    public function index()
    {
        $category = Category::all();
        return response()->json([
            'status' => 'success',
            'data' => $category,
        ], 200);
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100|unique:categories',
        ],[
            'name'=>'category has been taken'
        ]);

       // $isExist = DB::table('categories')->where('name','like', $request->name)->first();
        // dd($isExist);
        
        $category = Category::create([
            'name' => $request->name,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'category created successfully',
            'data' => $category,
        ],200);




    }

    public function show($id)
    {
        $category = Category::find($id);
        if($category){
            return response()->json([
                'status' => 'success',
                'category' => $category,
            ], 200);
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'category not found',
            ], 404);
        }
        
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:100|unique:categories',
        ],['name'=>'category has been taken']);

    
        $category = Category::find($id);
        if($category){
            $category->name = $request->name;
            $category->save();
            return response()->json([
                'status' => 'success',
                'message' => 'category updated successfully',
                'category' => $category,
            ], 200);
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'category not found',

            ], 404);
        }
    

       
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        if($category){
            $category->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'category deleted successfully',
                'data' => $category,
            ], 200);
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'category not found',
            ], 404);
        }
    }

}
