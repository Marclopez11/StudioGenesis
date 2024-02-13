<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tarifa;
use Validator;
use Redirect;
use Illuminate\Database\QueryException;

class TarifaController extends Controller
{
    // Mostrar todas las tarifas
    public function index()
    {
        $tarifas = Tarifa::all()->whereNull('deleted_at');

        $user = auth()->user();
        $role = $user->getRoleNames()->first() ?? 'user';

        $columns = [
            'Codigo de Categoria' => 'codigo',
            'Nombre' => 'precio',
            'Descripcion' => 'fecha_inicio',
            'Categoria Padre' => "fecha_fin"
        ];

        return view('forms.tarifa', [
            'tarifas' => $tarifas,
            'columns' => $columns,
            'role' => $role
        ]);
    }

    // Mostrar el formulario para crear una nueva tarifa y actualizar

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'codigo' => 'required|string',
            'precio' => 'required|numeric',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date|after_or_equal:fecha_inicio',
        ]);

        if ($validator->fails()) {
            return redirect('tarifa')
                ->withErrors($validator)
                ->withInput();
        }

        try {
            $tarifaId = $request->input('idTarifa');
            if (empty($tarifaId)) {
                $tarifa = new Tarifa;
            } else {
                $tarifa = Tarifa::find($tarifaId);
                if (!$tarifa) {
                    session()->flash('error', 'Tarifa no encontrada.');
                    return Redirect::to('/tarifa');
                }
            }

            $tarifa->codigo = $request->input('codigo');
            $tarifa->precio = $request->input('precio');
            $tarifa->fecha_inicio = $request->input('fecha_inicio');
            $tarifa->fecha_fin = $request->input('fecha_fin');
            $tarifa->save();

            $message = empty($tarifaId) ? 'Tarifa creada correctamente.' : 'Tarifa actualizada correctamente.';
            session()->flash('success', $message);
        } catch (QueryException $exception) {
            if ($exception->errorInfo[1] == 1062) {
                session()->flash('error', 'El código ya está en uso.');
                return Redirect::to('/tarifa');
            }
        }

        return Redirect::to('/tarifa');
    }

    // Eliminar una tarifa de la base de datos
    public function destroy($id)
    {
        $tarifa = Tarifa::find($id);
        // Verificar si la tarifa está siendo utilizada
        if ($tarifa->productos()->count() > 0) {
            // Informar al usuario que la tarifa está en uso y no puede ser eliminada
            session()->flash('error', 'La tarifa no puede ser eliminada porque está en uso.');
            return redirect('/tarifa');
        }
        // Si la tarifa no está en uso, proceder con la eliminación
        $tarifa->delete();
        session()->flash('success', 'Tarifa eliminada correctamente.');
        return redirect('/tarifa');
    }
}
