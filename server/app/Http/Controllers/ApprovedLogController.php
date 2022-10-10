<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Approved_log;

class ApprovedLogController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $approved_logs = Approved_log::all();
        return response()->json([
            'status' => 'success',
            'approved_logs' => $approved_logs,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            
        ]);

        $approved_log = Approved_log::create([
            'user_id' => $request->user_id,
            'document_id' => $request->document_id,
            'note'=>$request->note,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Approved_log created successfully',
            'approved_log' => $approved_log,
        ]);
    }

    public function show($id)
    {
        $approved_log = Approved_log::find($id);
        return response()->json([
            'status' => 'success',
            'approved_log' => $approved_log,
        ]);
    }

    // public function update(Request $request, $id)
    // {
    //     $request->validate([
            
    //     ]);

    //     $approved_log = Approved_log::find($id);
    //     $approved_log->title = $request->title;
    //     $approved_log->description = $request->description;
    //     $approved_log->save();

    //     return response()->json([
    //         'status' => 'success',
    //         'message' => 'Approved_log updated successfully',
    //         'approved_log' => $approved_log,
    //     ]);
    // }

    // public function destroy($id)
    // {
    //     $approved_log = Approved_log::find($id);
    //     $approved_log->delete();

    //     return response()->json([
    //         'status' => 'success',
    //         'message' => 'Approved_log deleted successfully',
    //         'approved_log' => $approved_log,
    //     ]);
    // }
}
