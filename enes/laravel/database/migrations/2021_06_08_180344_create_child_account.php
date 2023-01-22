<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChildAccount extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::defaultStringLength(191);
      
        Schema::create('child_account', function (Blueprint $table) {
            $table->id('uid');
            $table->unsignedBigInteger('account_id')->default(0);
            $table->integer('grade')->default(0);
            $table->integer('grad_year')->default(0);
            $table->string('name')->default('');
            $table->timestamps();
            $table->foreign('account_id')->references('account_id')->on('parent_account');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('child_account');
    }
}
