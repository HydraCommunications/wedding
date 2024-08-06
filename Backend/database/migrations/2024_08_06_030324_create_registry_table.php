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
        Schema::create('registry', function (Blueprint $table) {
            $table->bigIncrements('id')->primary();
            $table->string('item_name');
            $table->string('item_link');
            $table->string('item_image')->nullable();
            $table->boolean('taken');
            $table->dateTime('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registry');
    }
};
