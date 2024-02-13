<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ProductoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/categorias', [CategoriaController::class, 'indexApi']);

Route::get('/categorias/{categoriaId}/productos', [ProductoController::class, 'productosPorCategoriaApi']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
