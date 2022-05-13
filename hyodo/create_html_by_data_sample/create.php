<?php

function parse_html($temp,$data_one){
  $parsed_html=$temp;
  foreach ($data_one as $key => $value) {
    $parsed_html=str_replace('$'.$key,$value,$parsed_html);
  }
  return $parsed_html;
}

$handle=fopen(__DIR__."/sample.html",'w');


if(!$handle){
  var_dump('ファイルがない');
}

$data=[
  [
    'q'=>'question1ですよ',
    'a'=>'answer1ですよ'
  ],
  [
    'q'=>'question2ですよ',
    'a'=>'answer2ですよ'
  ],
  [
    'q'=>'question3ですよ',
    'a'=>'answer3ですよ'
  ],
  [
    'q'=>'question4ですよ',
    'a'=>'answer4ですよ'
  ],

];
$html= "";

$temp=file_get_contents(__DIR__."/temp.html");

foreach ($data as $data_one){
  $html.=parse_html($temp,$data_one);
}
fwrite($handle,$html);
fclose($handle);
