<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Producto;
use App\Models\Categoria;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;

class DashboardController extends Controller
{
    public function index()
    {

        $user_id = Auth::id(); // Obtiene el ID del usuario autenticado
        $productosPropios = Producto::where('user_id', $user_id)->whereNull('deleted_at')->count();
        $productosDeTodos = Producto::whereNull('deleted_at')->count();
        $conteoCategoriasPadre = Categoria::whereNull('categoria_padre_id')->count();
        $categoriasConHijos = Categoria::whereNotNull('categoria_padre_id')->count();

        $data = [
            'categoriasConHijos' => $categoriasConHijos,
            'conteoCategoriasPadre' => $conteoCategoriasPadre,
            'productosPropios' => $productosPropios,
            'productosDeTodos' => $productosDeTodos,
        ];

        return view('dashboard', $data);

    }
}
