<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RegistryCard extends Model
{
    protected $table = 'registry_cards';
    protected $primaryKey = 'id';
    protected $fillable = [
        'title',
        'link',
        'image',
        'is_reserved',
        'item_type',
    ];

    protected $casts = [
        'is_reserved' => 'boolean',
    ];
}
