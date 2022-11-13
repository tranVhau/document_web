<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Approved_log;
use App\Models\Document;
use Illuminate\Support\Facades\DB;

class ApprovedLogController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        // $approved_logs = Approved_log::all();

        $approved_logs = DB::table('documents')
            ->join('approved_logs','approved_logs.document_id','=','documents.id')
            ->join('users','users.id','=','approved_logs.user_id')
            ->select('documents.id','documents.name', 'documents.thumbnail','documents.src', 'documents.desc', 'approved_logs.created_at','users.avt', 'users.name as admin_name')
            ->get();
            
        return response()->json([
            'status' => 'success',
            'approved_logs' => $approved_logs,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'document_id'=>'required|unique:approved_logs',
            'user_id'=>'required',
        ],[
            'document_id'=>'already exist'
        ]);

        $approved_log = Approved_log::create([
            'user_id' => $request->user_id,
            'document_id' => $request->document_id,
        ]);

        //switch to public (document)
        $document = Document::find($request->document_id);
        $document->isPublic = 1;
        $document->save();


        if($approved_log){
            return response()->json([
                'status' => 'success',
                'message' => 'Approved_log created successfully',
                'approved_log' => $approved_log,
            ]);
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'error',
            ]);
        }

        
    }

    public function show($id)
    {
        $approved_log = Approved_log::find($id);
        if($approved_log){
            return response()->json([
                'status' => 'success',
                'approved_log' => $approved_log,
            ]);
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'not found'
            ]);
        }
    }
}
