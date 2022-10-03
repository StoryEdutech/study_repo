<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Tests\Browser\Pages\HomePage;

class LoginTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
     // public function testHomePage(){
     //   $this->browse(function (Browser $browser) {
     //     $browser->visit(new HomePage)->assertPathIs("/");
     //   });
     // }

    public function testLogin()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit($browser::getDomain().'/account/StandBy/login.php')
                    ->type('email','2fjmdn@tapi.re')
                    ->type('password','aaaaaaaa')
                    ->screenshot("aiue")
                    ->press('ログイン')
                    ->screenshot("aiue2")
                    ->waitFor(".enter-btn:not(.incomplate)")
                    ->screenshot("aiue3")
                    ->press('ログイン')
                    ->assertUrlIs($browser::getDomain().'/my_page/top.php')
                    ;

        });
    }
}
