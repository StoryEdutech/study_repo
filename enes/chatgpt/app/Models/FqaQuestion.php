<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FqaQuestion extends Model
{
    use HasFactory;
    protected $connection="common_db";
    protected $table="fqa_question";
    public function getQAAttribute(){
      return "
Q: {$this->question}

A: {$this->answer}

";
    }
    public static function parse_all(){
      return static::all()->map(function($qa_one){return $qa_one->QA;})->implode("\n\n");
    }
}
