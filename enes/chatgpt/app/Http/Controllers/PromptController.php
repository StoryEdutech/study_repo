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
      $response=$chatgpt->chat(collect([
       'model' => 'gpt-3.5-turbo',
       'messages' => [
           [
               "role" => "system",
               "content" => "You are a helpful assistant."
           ],
           [
               "role" => "user",
               "content" => $prompt
           ],
       ],
       'temperature' => 1.0,
       'max_tokens' => 4000,
       'frequency_penalty' => 0,
       'presence_penalty' => 0,
     ])->replace($options)->toArray());
     $response_decoded=json_decode($response);
     return $response_decoded->choices[0]->message->content;
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
