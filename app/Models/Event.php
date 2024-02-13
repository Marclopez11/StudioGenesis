<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Producto;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','title','producto_id','total','start_date','end_date','amount'];

    public function producto(): BelongsTo
    {
        // Ahora puedes usar 'Producto' directamente sin el espacio de nombres completo
        return $this->belongsTo(Producto::class, 'producto_id');
    }
}
