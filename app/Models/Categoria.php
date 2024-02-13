<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;


    protected $fillable = ['codigo','nombre', 'descripcion', 'categoria_padre_id'];



    public function productos()
    {
        return $this->belongsToMany(Producto::class, 'categoria_producto');
    }

    /**
     * Relación "padre" para permitir categorías anidadas.
     */
    public function padre()
    {
        return $this->belongsTo(Categoria::class, 'categoria_padre_id');
    }

    /**
     * Relación "hijos" para obtener las subcategorías.
     */
    public function hijos()
    {
        return $this->hasMany(Categoria::class, 'categoria_padre_id');
    }
}
