<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testLogin()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('https://chugakujyuken.kobetsuba.jp/account/StandBy/login.php')
                    ->type('email','2fjmdn@tapi.re')
                    ->type('password','aaaaaaaa')
                    ->press('ログイン')
                    ->pause(1000)
                    ->press('ログイン')
                    ->assertUrlIs('https://chugakujyuken.kobetsuba.jp/my_page/top.php')
                    ;
        });
    }
}
