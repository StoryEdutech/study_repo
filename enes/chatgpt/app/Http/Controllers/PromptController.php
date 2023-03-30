<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ChatGptApi;
use App\Models\FqaQuestion;
use Illuminate\Support\Str;

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
      $req=$request->all();
      $context=$req["context"];
      if(strtolower($context)==="fqa"){
        $context=FqaQuestion::parse_all();
      }
      $chunks=mb_str_split($context,4000);
      foreach ($chunks as $one_context) {
        $response=static::ask_gpt(
              "Answer the question in Japanese based on the context below,
               and if the question can't be answered based on the context,
               answer only with \"回答できません\"
               Context: {$one_context}
               ---

               Question: {$req["question"]}
               Answer:",
              ["temperature"=>0]
            );
          var_dump($response);
          if(!Str::of($response)->contains("回答できません")){
            break;
          }
      }
      return response()->json(["reply"=>$response]);
    }
}
