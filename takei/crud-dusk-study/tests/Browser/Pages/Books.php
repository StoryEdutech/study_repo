<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;
use Laravel\Dusk\Page;

class Books extends Page
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/books';
    }

    /**
     * Assert that the browser is on the page.
     *
     * @param  Browser  $browser
     * @return void
     */
    public function assert(Browser $browser)
    {
        $browser->assertPathIs($this->url());
    }

    public function checkCreateBook(Browser $browser, $title, $author) {
        $browser
        ->assertPathIs('/books') // 一覧画面に遷移を確認
        ->assertSee($title)
        ->assertSee($author);
    }
    public function dontCheckCreateBook(Browser $browser, $title, $author) {
        $browser
        ->assertPathIs('/books') // 一覧画面に遷移を確認
        ->assertDontSee($title)
        ->assertDontSee($author);
    }


    public function checkDestroyCancel(Browser $browser) {
        $browser
        ->click('@deleteButton') // 削除ボタンをクリック
        ->assertDialogOpened('本当に削除しますか?')  // ダイアログの文言確認
        ->dismissDialog() // キャンセルボタンをクリック
        ->assertPathIs('/books'); // 一覧画面のパス確認
    }

    public function checkDestroyBook(Browser $browser) {
        $browser
        ->click('@deleteButton') // 削除ボタンをクリック
        ->assertDialogOpened('本当に削除しますか?') // ダイアログの文言確認
        ->acceptDialog() // 削除ボタンをクリック
        ->assertPathIs('/books'); // 一覧画面のパス確認
    }


    /**
     * Get the element shortcuts for the page.
     *
     * @return array
     */
    public function elements()
    {
        return [
            '@element' => '#selector',
        ];
    }
}
