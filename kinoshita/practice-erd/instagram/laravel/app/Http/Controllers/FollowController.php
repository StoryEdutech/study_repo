<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FollowController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, User $user)
    {
        $follow = Follower::where([
            'user_id' => Auth::user()->id,
            'follower_id' => $user->id
        ])->get();

        throw_if(
            $follow,
            'すでにフォローしています'
        );

        Follower::create([
            'user_id' => Auth::user()->id,
            'follower_id' => $user->id
        ]);

        return response(null, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, User $user)
    {
        $follow = Follower::where([
            'user_id' => Auth::user()->id,
            'follower_id' => $user->id
        ])->get();

        throw_if(
            !$follow,
            'もうすでにフォローを外しています'
        );

        $follow->delete();

        return response(null, 200);
    }
}
