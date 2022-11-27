<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Approved_log;
use App\Models\Document;
use Illuminate\Support\Facades\DB;
use App\Models\document_category;

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
            ->join('users as user','user.id','=','approved_logs.user_id')
            ->join('users as admin', 'admin.id','=','documents.user_id')
            ->select('approved_logs.id','documents.id as doc_id','documents.name', 'documents.thumbnail','documents.src', 'documents.desc', 'approved_logs.created_at','admin.avt as admin_avt', 'admin.name as admin_name', 'user.name as user')
            ->get();
            
        return response()->json([
            'status' => 'success',
            'data' => $approved_logs,
        ]);
    }

 
    public function store(Request $request){
        $request->validate([
            'document_id'=>'required|integer',
            'name' => 'string|max:255|nullable',
 		    'user_id'=>'required',
            'desc' => 'string|nullable',
        ]);

        DB::beginTransaction();
        try {
            // new history
            // $isExist = DB::table('document_categories')->where([
            //     ['category_id', '=', $request->category_id],
            //     ['document_id', '=', $request->document_id]
            // ])->first();

            Approved_log::create([
                'user_id' => $request->user_id,
                'document_id' => $request->document_id,
            ]);
            // update document
            if(Document::find($request->document_id)){
                $document = Document::find($request->document_id);
                if($request->name != null){
                    $document->name = $request->name;
                }
                if($request->desc!=null){
                    $document->desc = $request->desc;
                }
    

                $document->isPublic = 1;
                
        
                if($request->categories!=null ){
                    DB::table('document_categories')
                    ->where([['document_id','=', $request->document_id]])->delete();
    
                    foreach($request->categories as $requestCateId){
                        document_category::create([
                            'category_id' => $requestCateId,
                            'document_id' =>$request->document_id,
                        ]);
                    } 
                }
                $document->save();
            }
            DB::commit();
          
        } catch (\Exception $e) {
            DB::rollBack();
            throw new \Exception($e->getMessage());
        }

      
    }

        
    

    public function show($id)
    {
        $category = DB::table('document_categories')
        ->join('categories', 'categories.id','=','document_categories.category_id')
        ->select('document_categories.document_id', 'categories.name as category_name')
        ->get();

        $approved_log = DB::table('documents')
        ->join('approved_logs','approved_logs.document_id','=','documents.id')
        ->join('users as admin','admin.id','=','approved_logs.user_id')
        ->join('users as user', 'user.id','=','documents.user_id')
        ->select('approved_logs.id','documents.id as doc_id','documents.name', 'documents.thumbnail','documents.src', 'documents.desc', 'approved_logs.created_at','admin.avt as admin_avt', 'admin.name as admin_name', 'user.name as user', 'user.avt as user_avt')
        ->where('approved_logs.id','=', $id)
        ->get();


        forEach($approved_log as $element){
            $element->categories = array();
        }

        forEach( $approved_log as $log){
            forEach($category as $cate){
             if($cate->document_id == $log->doc_id){
                 array_push($log->categories,$cate->category_name);
             }
            }
         }


        if($approved_log){
            return response()->json([
                'status' => 'success',
                'data' => $approved_log,
            ]);
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'not found'
            ]);
        }
    }
}
