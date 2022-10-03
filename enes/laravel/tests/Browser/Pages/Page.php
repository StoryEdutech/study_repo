<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Page as BasePage;
use Laravel\Dusk\Browser;

abstract class Page extends BasePage
{
    /**
     * Get the global element shortcuts for the site.
     *
     * @return array
     */
    public static function siteElements()
    {
        return [
            '@element' => '#selector',
        ];
    }
    public function url(){
      return $this->url;
    }
    public function __construct($attributes_or_url=[]){
      $attributes=is_string($attributes_or_url)?["url"=>$attributes_or_url]:$attributes_or_url;
      foreach ($attributes as $key => $value) {
        $this->$key=$value;
      }
    }
}
