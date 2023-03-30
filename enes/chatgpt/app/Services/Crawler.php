<?php

namespace App\Services;

use Spatie\Crawler\Crawler as BaseCrawler;
use Illuminate\Support\Str;

class Crawler extends BaseCrawler{
    public static $domain='https://chugakujyuken.kobetsuba.jp';
    public static function crawl($url="",$isFull=false){
      $fullUrl=preg_replace('/([^:])\/[\/]+/','$1/',(
        $isFull?"":static::$domain."/"
        ).$url);
      static::create()
        ->setCrawlObserver(new CrawlObserver)
        ->executeJavaScript()
        ->startCrawling($fullUrl);
    }

}
