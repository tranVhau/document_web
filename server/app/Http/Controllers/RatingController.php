<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use App\Models\Rating;
use Illuminate\Support\Facades\DB;

class RatingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $ratings = Rating::all();
        return response()->json([
            'status' => 'success',
            'ratings' => $ratings,
        ]);
    }

    public function store(Request $request)
    {
        // $request->validate([
        //     'point'=>'required|integer'
        // ]);

        // $rating = Rating::create([
        //     'user_id' => $request->user_id,
        //     'document_id' => $request->document_id,
        //     'point'=>$request->point
        // ]);

        // return response()->json([
        //     'status' => 'success',
        //     'message' => 'Rating created successfully',
        //     'rating' => $rating,
        // ]);

        $post = Document::where('id', $request->id)->first();
        // $post = Document::first();
        $post->rateOnce($request->point);
        // dd(Document::first()->ratings);
        // dd($post->averageRating);
        // dd($post->timesRated());
        // dd(Document::first());



        return response()->json([
            'status' => 'success'
        ]);
    }

    public function show($id)
    {
        $rating = Rating::find($id);
        return response()->json([
            'status' => 'success',
            'rating' => $rating,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'point'=>'required|integer'
        ]);

        $rating = Rating::find($id);
        $rating->user_id = $request->user_id;
        $rating->document_id = $request->document_id;
        $rating->point=$request->point;
        $rating->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Rating updated successfully',
            'rating' => $rating,
        ]);
    }

    public function destroy($id)
    {
        $rating = Rating::find($id);
        $rating->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Rating deleted successfully',
            'rating' => $rating,
        ]);
    }
}
