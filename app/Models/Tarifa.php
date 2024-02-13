<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use App\Models\Producto;

class Tarifa extends Model
{
    use HasFactory;
    use SoftDeletes;


    protected $fillable = ['codigo', 'precio', 'fecha_inicio', 'fecha_fin'];

    public function productos()
    {
        return $this->belongsToMany(Producto::class, 'producto_tarifa');
    }
}
