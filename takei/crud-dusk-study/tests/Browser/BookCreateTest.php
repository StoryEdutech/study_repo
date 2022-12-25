<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Tests\Browser\Pages\Books;
use Tests\Browser\Components\BookCreateAndUpdateForm;


class BookCreateTest extends DuskTestCase
{
    public function testCreateBookOK()
    {
        $this->browse(function (Browser $browser) {
                $browser
                    ->visit(new Books) // 一覧画面に遷移
                    ->clickLink('新規作成')
                    ->within(new BookCreateAndUpdateForm,function($browser){
                        $browser->typeForm('タイトルテスト','著者テスト')
                        ->click('@送信ボタン'); // 送信ボタンをクリック
                    })
                    ->checkCreateBook('タイトルテスト','著者テスト');
        });
    }

    public function testEditBook()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit(new Books)
                ->clickLink('詳細')
                ->within(new BookCreateAndUpdateForm,function($browser){
                    $browser->typeForm('タイトルテスト','著者テスト')
                    ->click('@送信ボタン'); // 送信ボタンをクリック
                });
        });
    }

    public function testUpdateBook()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit(new Books)
                ->clickLink('詳細')
                ->within(new BookCreateAndUpdateForm,function($browser){
                    $browser->typeForm('タイトルテスト２','著者テスト２')
                    ->click('button');
                })
                ->checkCreateBook('タイトルテスト２','著者テスト２');
        });
    }

    public function testCreateBookValidationError()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit(new Books) // 一覧画面に遷移
                ->clickLink('新規作成') // 一覧画面で新規作成リンクをクリック
                ->click('button') // 何も入力せずにクリック
                ->assertPathIs('/books/create')
                ->within(new BookCreateAndUpdateForm,function($browser){
                    $browser->checkValidationError();
                });
        });
    }

    public function testDestroyCancel()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit(new Books) // 一覧画面を表示
                ->checkDestroyCancel()
                ->checkCreateBook('タイトルテスト２','著者テスト２');
        });
    }

    public function testDestroyBook()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit(new Books) // 一覧画面を表示
                ->checkDestroyBook()
                ->dontCheckCreateBook('タイトルテスト２','著者テスト２');
        });
    }
}
