<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Producto extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'codigo_producto', 'nombre', 'descripcion', 'categoria_id',
    ];


    public function categorias()
    {
        return $this->belongsToMany(Categoria::class, 'categoria_producto');
    }

    public function tarifas()
    {
        return $this->belongsToMany(Tarifa::class, 'producto_tarifa');
    }

    public function fotos()
    {
        return $this->hasMany(ProductPhoto::class);
    }
}
