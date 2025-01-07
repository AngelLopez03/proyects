<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function createUser(CreateUserRequest $request): JsonResponse
    {
        try {
            
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
    
            return response()->json([
                'status' => true,
                'message' => 'User create successfully',
                'token' => $user->createToken('auth_token')->plainTextToken,
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function loginUser(LoginRequest $request): JsonResponse
    {
        if(!Auth::attempt($request->only(['email', 'password'])))
        {
            return response()->json([
                'status' => 'false',
                'message' => 'Invalid credentials'
            ], 401);
        }

        $user = User::where('email', $request->email)->first();

        return response()->json([
            'status' => true,
            'message' => 'User logged in successfully',
            'token' => $user->createToken("auth_token")->plainTextToken
        ], 200);
    }
}
