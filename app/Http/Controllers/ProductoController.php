<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\ProductPhoto;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\Categoria;
use App\Models\Tarifa;
use App\Models\Producto;
use Carbon\Carbon;
use Illuminate\Database\QueryException;
use PDF;


use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;

class ProductoController extends Controller
{

    //borrar solo 1 foto
    public function deletePhotoByPath(Request $request, $id)
    {
        // Busca la foto por la ruta

        $path = $request->input("photo_path");
        $foto = ProductPhoto::where('path', $path)->first();
        // Comprueba si se encontró la foto
        if ($foto) {
            // Inicia una transacción de base de datos para asegurar la integridad de los datos
            DB::beginTransaction();
            try {
                // Elimina la foto de la base de datos
                Storage::disk('custom_public')->delete($foto->path);
                $foto->delete();

                // Si todo va bien, confirma los cambios en la base de datos
                DB::commit();

                session()->flash('success', 'La foto ha sido eliminada correctamente.');
            } catch (\Exception $e) {
                // Si algo sale mal, revierte los cambios
                DB::rollBack();
                session()->flash('error', 'Ha ocurrido un error al intentar eliminar la foto.');
            }
        } else {
            // Si no se encuentra la foto, muestra un mensaje de error
            session()->flash('error', 'No se pudo encontrar la foto para eliminar.');
        }

        // Redirige al usuario a la página anterior
        return redirect()->back();
    }


    public function onDelete($id)
    {
        // Encuentra el producto por ID
        $producto = Producto::with(['fotos'])->findOrFail($id);

        // Inicia una transacción de base de datos para asegurar la integridad de los datos
        DB::beginTransaction();
        try {
            // Eliminar relaciones
            $producto->categorias()->detach();
            $producto->tarifas()->detach();

            foreach ($producto->fotos as $foto) {
                Storage::disk('custom_public')->delete($foto->path);
                $foto->delete();
            }

            $producto->delete();

            // Si todo va bien, confirma los cambios en la base de datos
            DB::commit();

            session()->flash('success', 'Producte eliminat correctament.');
        } catch (\Exception $e) {
            // Si algo sale mal, revierte los cambios
            DB::rollBack();
            session()->flash('error', 'Ha ocurrido un error al intentar eliminar el producto.');
        }

        // Redirige al usuario a la página anterior
        return redirect()->back();
    }

    public function index()
    {
        $user = auth()->user();
        $categoriasPadre = Categoria::whereNull('categoria_padre_id')->get();

        $tarifes = Tarifa::whereNull('deleted_at')
            ->get();

        return view('forms.registreAdd', [
            'user_id' => $user->id,
            'categories' => $categoriasPadre,
            'tarifes' => $tarifes,
        ]);
    }

    public function save(Request $request)
    {
        $user = auth()->user();
        $productID = $request->route('id'); // Obtener el ID del producto desde la ruta, si está presente

        try {
            $idElementsTotal = (int) $request->input('cat-id', 0);

            for ($number = 0; $number <= $idElementsTotal; $number++) {
                // Si existe productID, estamos editando un producto existente
                if (!empty($productID)) {
                    $producte = Producto::find($productID);
                    if (!$producte) {
                        session()->flash('error', 'Producto no encontrado.');
                        return redirect()->back();
                    }
                } else {
                    // Si no, creamos un nuevo producto
                    $producte = new Producto();
                    $producte->user_id = $user->id ?? null;
                }

                $categoryGroup = $request->input("category-group.$number", []);
                $producte->codigo_producto = $categoryGroup['codigo_producto'] ?? $producte->codigo_producto;
                $producte->nombre = $categoryGroup['nombre'] ?? $producte->nombre;
                $producte->descripcion = $categoryGroup['descripcion'] ?? $producte->descripcion;

                $producte->save(); // Guardar el producto

                // Sincronizar categorías y tarifas, si existen
                $categoriasIds = $categoryGroup['categories'] ?? [];
                $tarifasIds = $categoryGroup['tarifes'] ?? [];

                $producte->categorias()->sync($categoriasIds);
                $producte->tarifas()->sync($tarifasIds);

                // Procesar y guardar fotos del producto
                if ($request->hasFile("category-group.$number.files")) {
                    foreach ($request->file("category-group.$number.files") as $file) {
                        $validator = Validator::make(['file' => $file], [
                            'file' => 'image|mimes:jpeg,png,gif|max:2048', // Ajusta las restricciones según sea necesario
                        ]);

                        if (!$validator->fails() && $file->isValid()) {
                            // Aquí asumimos que usas el disco 'public'. Ajusta según sea necesario.
                            $path = $file->store('product_photos', 'custom_public');

                            // Crea una nueva instancia de ProductPhoto para cada archivo
                            $producte->fotos()->create([
                                'path' => $path,
                            ]);
                        }
                    }
                }
            }

            session()->flash('success', 'Producto guardado correctamente.');
            return redirect()->to('dashboard');
        } catch (QueryException $exception) {
            if ($exception->errorInfo[1] == 1062) {
                session()->flash('error', 'El código ya está en uso.');
                return Redirect::to('/dashboard');
            }
            // Considerar manejar otros tipos de excepciones aquí
        }
    }

    public function editView($id)
    {
        $user = auth()->user();

        $producto = Producto::where('id', $id)
            ->where('user_id', $user->id)
            ->whereNull('deleted_at')
            ->get();

        if ($producto->isEmpty()) {
            session()->flash('error', 'El registro no existe o no pertenece a este usuario');
            return redirect()->route('dashboard');
        } else {
            $producto = producto::where('id', $id)
                ->where('user_id', $user->id)
                ->whereNull('deleted_at')
                ->first();

            $categoriasPadre = Categoria::whereNull('categoria_padre_id')->get();

            $tarifes = Tarifa::whereNull('deleted_at')
                ->get();
        }

        return view('forms.producteEdit', [
            'id' => $id, 'elem' => $producto, 'user_id' => $user->id, 'categories' => $categoriasPadre, 'tarifes' => $tarifes
        ]);
    }



    public function exportProductPDF($productId)
    {
        $elem = Producto::find($productId);

        if (!$elem) {
            return back()->with('error', 'Producto no encontrado.');
        }

        $pdf = PDF::loadView('product_pdf', compact('elem'));
        return $pdf->download('producto-' . $elem->nombre . '.pdf'); // Descargar el PDF
    }


    public function productosPorCategoriaApi($categoriaId)
    {
        $categoria = Categoria::with('productos')->find($categoriaId);

        if (!$categoria) {
            return response()->json(['mensaje' => 'Categoría no encontrada'], 404);
        }

        return response()->json($categoria->productos);
    }
}
