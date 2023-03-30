<?php

namespace App\Services;

use Orhanerday\OpenAi\OpenAi;

class ChatGptApi extends OpenAi{
  public function __construct($overridden_api_key=false){
    parent::__construct($overridden_api_key?:env("OPENAI_API_KEY"));
  }
  public function answer($prompt,$options=[]){
    $prompt=str_replace("\n","",$prompt);
    $response=$this->chat(collect([
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
     'max_tokens' => 500,
     'frequency_penalty' => 0,
     'presence_penalty' => 0,
    ])->replace($options)->toArray());
    $response_decoded=json_decode($response);
    return $response_decoded->choices[0]->message->content;
  }
}
