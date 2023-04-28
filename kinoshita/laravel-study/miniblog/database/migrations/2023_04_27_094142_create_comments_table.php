<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     * 
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            // id() は unsignedBigInteger()->autoIncremnet() と同じ
            // id()だけで主キーとして認識してくれる
            $table->id();
            // 外部のテーブルの主キーを参照するときは
            // unsignedBigInteger()にする
            $table->unsignedBigInteger('post_id');
            $table->unsignedBigInteger('user_id');
            $table->text('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
};
