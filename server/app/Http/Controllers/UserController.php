<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index','show', 'update']]);
    }


    public function index(){
        $user = User::all();
        return response()->json(
            [
                'status '=> 'success',
                'user' => $user,
            ]
        );
    }

    public function show($id){
        $user = User::find($id);

        if($user){
            return response()->json([
                'status' => 'success',
                'user' => $user,
            ], 200 );
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'User not found',
            ], 404);
        }
    }

    public function store(Request $request){

        // current not inuse
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'avt'=>'mimes:jpeg,jpg,png,gif|required|max:10000|nullable'
        ]); 

        $avatarClound = $request->file('avt')->storeOnCloudinary('document_web/img/avatar');


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'avt'=>$avatarClound->getPath(),
            'isAdmin'=> 1,
            'password'=>Hash::make($request->password),
        ]);

        if($user){
            return response()->json([
                'status' => 'success',
                'message' => 'Document created successfully',
                'user' => $user,
            ]);
        }else{
            return response()->json([
                'status' => 'success',
                'message'=>'something went wrong'
            ]);
        }
    }

    public function update(Request $request, $id){
        $request->validate([
            'name' => 'string|max:255|nullable',
            'email' => 'string|email|max:255|unique:users|nullable',
            'password' => 'string|nullable',
            'avt'=>'mimes:jpeg,jpg,png,gif|max:10000|nullable'
        ]); 

       if(User::find($id)){
            $user = User::find($id);
            if($request->name !=null){
                $user->name = $request->name;
            }
            if($request->avt !=null){
                $avatarClound = $request->file('avt')->storeOnCloudinary('document_web/img/avatar');
                $user->avt = $avatarClound->getPath();
            }
            if($request->email !=null){
                $user->email = $request->email;
            }
            if($request->password !=null){
                 $user->password = Hash::make($request->password);
            }

            $user->save();

            return response()->json([
                'status' => 'success',
                'message' => 'user updated successfully',
                'user' => $user,
            ], 200 );
       }else{
        return response()->json([
            'status' => 'error',
            'message' => 'User Not Found',
        ], 404 );
    }
    }


    public function destroy($id){
        $user = User::find($id);
        if($user){
            $user->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'User Deleted Successfully',
                'user' => $user,
            ], 200);
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'User Not Found',
            ], 404);
        }
    }
}
