<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class BookCreateTest extends DuskTestCase
{
    public function testCreateBookOK()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/books') // 一覧画面に遷移
                    ->clickLink('新規作成') // 一覧画面で新規作成リンクをクリック
                    ->type('title', 'タイトルテスト') // タイトルを入力する
                    ->type('author', '著者テスト')  // 著者を入力する
                    ->click('button[type="submit"]') // 送信ボタンをクリック
                    ->assertPathIs('/books') // 一覧画面に遷移を確認
                    ->assertSee('タイトルテスト') // 「タイトルテスト」というテキストが含まれていること
                    ->assertSee('著者テスト'); // 「著者テスト」というテキストが含まれていること
        });
    }

    public function testCreateBookValidationError()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/books') // 一覧画面に遷移
                ->clickLink('新規作成') // 一覧画面で新規作成リンクをクリック
                ->click('button') // 何も入力せずにクリック
                ->assertPathIs('/books/create')
                ->assertSee('タイトルは必須項目です。') // バリデーションエラーの文言が表示されていること
                ->assertSee('著者は必須項目です。');// バリデーションエラーの文言が表示されていること
        });
    }
}
