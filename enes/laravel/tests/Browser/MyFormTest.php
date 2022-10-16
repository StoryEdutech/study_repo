<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Tests\Browser\Components\MyForm;

class MyFormTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/test_page')
              ->within(new MyForm,function($form){
                $form->withQuestion(1,function($question){
                  return $question->write("hello world");
                });
                // BadMethodCallException: Call to undefined method [write].

              });
        });
    }
}
