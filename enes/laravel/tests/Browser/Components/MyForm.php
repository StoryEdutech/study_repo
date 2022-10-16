<?php

namespace Tests\Browser\Components;

use Laravel\Dusk\Browser;
use Laravel\Dusk\Component as BaseComponent;

class MyForm extends BaseComponent
{
    /**
     * Get the root selector for the component.
     *
     * @return string
     */
    public function selector()
    {
        return '.enquete.questions';
    }

    /**
     * Assert that the browser page contains the component.
     *
     * @param  Browser  $browser
     * @return void
     */
    public function assert(Browser $browser)
    {
        $browser->assertVisible($this->selector());
    }

    /**
     * Get the element shortcuts for the component.
     *
     * @return array
     */
    public function elements()
    {
           return [ "@form"=>"table" ];

    }
    public function withQuestion(Browser $browser,$number,$callback){
      return $browser->with("@form tr:nth-child($number) input",$callback);
    }

    public function write(Browser $browser,$text){
        return $browser->type($text);
    }
}
