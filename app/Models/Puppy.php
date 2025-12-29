<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Puppy extends Model
{
    protected $fillable = ['user_id', 'name', 'trait', 'image_url'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
