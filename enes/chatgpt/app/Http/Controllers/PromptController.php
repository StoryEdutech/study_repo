<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ChatGptApi;

class PromptController extends Controller
{
    public function answer(Request $request){
      $prompt=$request->get("question");
      $chatgpt=new ChatGptApi;
      $response=$chatgpt->chat([
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
     ]);
     $response_decoded=json_decode($response);

     return response()->json(["reply"=>$response_decoded->choices[0]->message->content]);
    }
}
