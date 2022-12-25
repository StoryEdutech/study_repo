<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class BeforeBookCreateTest extends DuskTestCase
{
    public function testCreateBookOK()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/books/create') // 新規作成画面に遷移
                    ->type('title', 'タイトルテスト') // タイトルを入力する
                    ->type('author', '著者テスト')  // 著者を入力する
                    ->click('button') // 送信ボタンをクリック
                    ->assertPathIs('/books') // 一覧画面に遷移を確認
                    ->assertSee('タイトルテスト') // 「タイトルテスト」というテキストが含まれていること
                    ->assertSee('著者テスト'); // 「著者テスト」というテキストが含まれていること
        });
    }

    public function testEditBook()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/books')
                ->clickLink('詳細')
                ->assertValue('input[name="title"]', 'タイトルテスト')
                ->assertValue('input[name="author"]', '著者テスト');
        });
    }

    public function testUpdateBook()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/books')
                ->clickLink('詳細')
                ->type('title', 'タイトルテスト2')
                ->type('author', '著者テスト2')
                ->click('button')
                ->assertPathIs('/books')
                ->assertSee('タイトルテスト2')
                ->assertSee('著者テスト2');
        });
    }

    public function testCreateBookValidationError()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/books/create')
                ->click('button')
                ->assertPathIs('/books/create')
                ->assertSee('タイトルは必ず指定してください。')
                ->assertSee('著者は必ず指定してください。');
        });
    }

    public function testDestroyCancel()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/books')
                ->click('button')
                ->assertDialogOpened('本当に削除しますか?')
                ->dismissDialog()
                ->assertPathIs('/books')
                ->assertSee('タイトルテスト2')
                ->assertSee('著者テスト2');
        });
    }

    public function testDestroyBook()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/books')
                ->click('button')
                ->assertDialogOpened('本当に削除しますか?')
                ->acceptDialog()
                ->assertPathIs('/books')
                ->assertDontSee('タイトルテスト2')
                ->assertDontSee('著者テスト2');
        });
    }

}
