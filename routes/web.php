<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\TarifaController;
use App\Http\Controllers\AgendaController;




Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    //Agenda
    Route::get('/agenda', [AgendaController::class, 'index'])->name('agenda');
    Route::post('/agenda/create', [AgendaController::class, 'store'])->name('agenda.save');

    //Categoria
    Route::get('/categoria', [CategoriaController::class, 'index'])->name('categoria');
    Route::post('/categoria/create', [CategoriaController::class, 'create'])->name('categoria.save');
    Route::delete('/categoria/delete/{id}', [CategoriaController::class, 'destroy'])->name('categoria.delete');


    //Tarifa
    Route::get('/tarifa', [TarifaController::class, 'index'])->name('tarifa');
    Route::post('/tarifa/create', [TarifaController::class, 'create'])->name('tarifa.save');
    Route::delete('/tarifa/delete/{id}', [TarifaController::class, 'destroy'])->name('tarifa.delete');

    //producte Crear
    Route::get('/producte-add', [ProductoController::class, 'index'])->name('producte-add');
    Route::post('/producte-add', [ProductoController::class, 'save'])->name('producte.save');

    //producte editar
    Route::get('/edit-producte/{id}', [ProductoController::class, 'editView'])->name('producte-edit');
    Route::post('/edit-producte/edit/{id}', [ProductoController::class, 'save'])->name('producte.edit');
    Route::delete('/edit-producte/{path}', [ProductoController::class, 'deletePhotoByPath'])->name('photo.delete');
    Route::delete('/producte/delete/{id}', [ProductoController::class, 'onDelete'])->name('producte.delete');

    //profile
    Route::get('/perfil', [UserController::class, 'index'])->name('profile');


    //exportar-pdf
    Route::get('/producte/{id}/exportar-pdf', [ProductoController::class, 'exportProductPDF'])->name('producte.export.pdf');

});


//superadmin
Route::middleware(['check.role.three'])->group(function () {
});
