<?php

namespace Tests\Browser\Components;

use Laravel\Dusk\Browser;
use Laravel\Dusk\Component as BaseComponent;

class BookCreateAndUpdateForm extends BaseComponent
{
    /**
     * Get the root selector for the component.
     *
     * @return string
     */
    public function selector()
    {
        return '#book_form';
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


    public function checkValidationError(Browser $browser) {
        $browser
        ->assertSee('タイトルは必須項目です。') // バリデーションエラーの文言が表示されていること
        ->assertSee('著者は必須項目です。');// バリデーションエラーの文言が表示されていること
    }

    public function typeForm(Browser $browser, $title, $author) {
            $browser
            ->type("@タイトル入力",$title)
            ->type("@著者入力",$author);
            // ->within('@タイトル入力', function ($browser) use ($title) {
            //     $browser->assertValue("@タイトル入力",$title);
            // })
            // ->within('@著者入力', function ($browser) use ($author) {
            //     $browser->assertValue("@著者入力",$author);
            // });
    }

    /**
     * Get the element shortcuts for the component.
     *
     * @return array
     */
    public function elements()
    {
        return [
            "@タイトル入力"=>'input[name="title"]',
            "@著者入力"=>'input[name="author"]',
            "@送信ボタン"=>'button[type="submit"]'
        ];
    }
}
