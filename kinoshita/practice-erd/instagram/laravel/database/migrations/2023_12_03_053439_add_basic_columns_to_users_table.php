<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function(Blueprint $table) {
            $table->string('last_name');
            $table->string('first_name');
            $table->string('icon_url');
            $table->integer('role_id')->default(0); // 0: ユーザー, 1: 管理者
            $table->integer('is_private')->default(0); // 0: 鍵垢ではない, 1: 鍵垢
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function(Blueprint $table) {
            $table->dropColumn('last_name');
            $table->dropColumn('first_name');
            $table->dropColumn('icon_url');
            $table->dropColumn('is_private');
        });
    }
};
