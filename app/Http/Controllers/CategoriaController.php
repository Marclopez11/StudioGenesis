<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Database\QueryException;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Obtener todas las categorías que no estén borradas
        $user = auth()->user();
        $role = $user->getRoleNames()->first() ?? 'user';


        $categorias = Categoria::with('padre')->whereNull('deleted_at')->get()->map(function ($categorias) {
            $categorias->nombrePadre = optional($categorias->padre)->nombre; // 'optional' maneja 'null' sin error
            return $categorias;
        });

        $categoriasPadre = Categoria::whereNull('categoria_padre_id')->whereNull('deleted_at')->get();

        //dd($categorias);
        // Definir las columnas que quieres mostrar en tu vista
        $columns = [
            'Codigo de Categoria' => 'codigo',
            'Nombre' => 'nombre',
            'Descripcion' => 'descripcion',
            'Categoria Padre' => "nombrePadre"
        ];

        return view('forms.categoria', [
            'categorias' => $categorias,
            'columns' => $columns,
            'role' => $role,
            'categoriasPadre' => $categoriasPadre
        ]);
    }

    /**
     * Show the form for creating a new resource and update.
     */

     public function create(Request $request)
     {
         $categoriaId = $request->input('idCategoria');
         $codigo = $request->input('codigoCategoria');
         $nombre = $request->input('nombreCategoria');


         $validator = Validator::make($request->all(), [
             'codigoCategoria' => 'required|string|max:255',
             'nombreCategoria' => 'required|string|max:255',
         ]);

         if ($validator->fails()) {
             return redirect('categoria')
                     ->withErrors($validator)
                     ->withInput();
         }

         $descripcion = $request->input('descripcionCategoria');
         $categoriaPadreId = $request->input('categoriaPadre');

         try {
             if (empty($categoriaId)) {
                 // Creación de nueva categoría
                 $categoria = new Categoria;
             } else {
                 // Actualización de categoría existente
                 $categoria = Categoria::find($categoriaId);
                 if (!$categoria) {
                     session()->flash('error', 'Categoría no encontrada.');
                     return Redirect::to('/categoria');
                 }
             }

             $categoria->nombre = $nombre;
             $categoria->codigo = $codigo;
             $categoria->descripcion = $descripcion;
             $categoria->categoria_padre_id = $categoriaPadreId;
             $categoria->save();

             //dd($categoria->save());

             $message = empty($categoriaId) ? 'Categoría creada correctamente.' : 'Categoría actualizada correctamente.';
             session()->flash('success', $message);
         } catch (QueryException $exception) {

             // Captura el error específico de duplicado
             if ($exception->errorInfo[1] == 1062) {
                 session()->flash('error', 'El código ya está en uso.');
                 return Redirect::to('/categoria');
                }
         }
         return Redirect::to('/categoria');
    }


    /**
     * Remove the specified resource from storage.
     */


    public function destroy($id)
    {
        $categoria = Categoria::find($id);

        if ($categoria) {
            // Si la categoría tiene hijos, primero debes decidir qué hacer con ellos.
            $tieneHijos = Categoria::where('categoria_padre_id', $categoria->id)->exists();
            if ($tieneHijos) {
                // Enviar mensaje de error de que la categoría tiene hijos y no se puede eliminar.
                session()->flash('error', 'Esta categoría tiene subcategorías y no se puede eliminar.');
            } else {
                // Eliminar la categoría si no tiene hijos.
                $categoria->delete();
                session()->flash('success', 'Categoría eliminada correctamente.');
            }
        } else {
            session()->flash('error', 'Categoría no encontrada.');
        }

        return Redirect::to('/categoria');
    }


    public function indexApi()
    {
        // Obtener todas las categorías que no estén borradas
        $categories = Categoria::whereNull('deleted_at')->get();
        return response()->json($categories);
    }

}
