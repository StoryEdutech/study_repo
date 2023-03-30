<?php

namespace App\Services;

use Orhanerday\OpenAi\OpenAi;

class ChatGptApi extends OpenAi{
  public function __construct($overridden_api_key=false){
    parent::__construct($overridden_api_key?:env("OPENAI_API_KEY"));
  }
}
