<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ChatGptApi;

class PromptController extends Controller
{
    public function answer(Request $request){
      $prompt=$request->get("question");
      return response()->json(["reply"=>static::ask_gpt($prompt)]);
    }
    public static function ask_gpt($prompt,$options=[]){
      $chatgpt=new ChatGptApi;
      return $chatgpt->answer($prompt,$options);
    }

    public function withContext(Request $request){
      $request->mergeIfMissing(["context"=>"Enes is the enginer who programmed this"]);
      $req=$request->all();

      return response()->json(["reply"=>static::ask_gpt(
            "Answer the question based on the context below,
             and if the question can't be answered based on the context,
             say \"I don't know\"
             Context: {$req["context"]}
             ---

             Question: {$req["question"]}
             Answer:",
            ["temperature"=>0]
          )]);
    }
}
