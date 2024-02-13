<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Event;
use App\Models\Producto;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Carbon\Carbon;

class AgendaController extends Controller
{
    public function index()
    {
        // Obtener el usuario autenticado
        $user = auth()->user();

        // Si solo necesitas el primer rol, puedes hacer:
        $role = $user->getRoleNames()->first() ?? 'user';
        $productos = Producto::whereNull('deleted_at')->get();

        $userId = $user->id;
        $all_events = Event::where('user_id', $userId)->get();

        $totalAmount = 0;
        $events = [];

        foreach ($all_events as $event) {

            $events[] = [
                'id' => $event->id,
                'allDay' => !0,
                'title' => $event->title ."  ".$event->total."€",
                'start' => $event->start_date,
                'end' => $event->end_date,
                'resourceId' => $event->producto_id,

                'extendedProps' => [
                    //'calendar' => $event->producto->nombre,
                    'description' => $event->amount,
                    'resourceId' => $event->producto_id,

                ],
            ];

            $totalAmount += $event->total;

        }

        // Pasar los datos a la vista
        return view('forms.agenda', [
            'role' => $role,
            'productos' => $productos,
            'events' => $events,
            'totalAmount' => $totalAmount,
        ]);
    }


    public function store(Request $request)
    {
        $user = auth()->user();

        $validatedData = $request->validate([
            'eventTitle' => 'required|string|max:255',
            'eventDescription' => 'nullable|string',
            'eventStartDate' => 'required|date',
            'eventEndDate' => 'nullable|date',
            'producte' => 'required|integer',
        ]);


        // Buscar el producto por ID y cargar sus tarifas asociadas
        $producto = Producto::with('tarifas')->find($validatedData['producte']);

        // Si necesitas acceder a las tarifas directamente
        $tarifas = $producto ? $producto->tarifas : collect();

        // Asumiendo que $validatedData contiene las fechas de inicio y fin del evento
        $eventStart = Carbon::createFromFormat('Y-m-d', $validatedData['eventStartDate']);
        $eventEnd = $validatedData['eventEndDate'] ? Carbon::createFromFormat('Y-m-d', $validatedData['eventEndDate']) : null;

        // Filtrar las tarifas para encontrar una que esté en el rango de fechas del evento
        $tarifaEnRango = $tarifas->filter(function ($tarifa) use ($eventStart, $eventEnd) {
            $inicioTarifa = Carbon::createFromFormat('Y-m-d', $tarifa->fecha_inicio);
            $finTarifa = Carbon::createFromFormat('Y-m-d', $tarifa->fecha_fin);

            if ($eventEnd) {
                return $inicioTarifa->lessThanOrEqualTo($eventEnd) && $finTarifa->greaterThanOrEqualTo($eventStart);
            }

            return $inicioTarifa->lessThanOrEqualTo($eventStart) && $finTarifa->greaterThanOrEqualTo($eventStart);
        })->first(); // Usa first() para obtener la primera tarifa que cumpla con la condición, si hay varias.

        if ($tarifaEnRango) {

            $total = $tarifaEnRango->precio; // Precio de la tarifa encontrada
        } else {
            $total = 0; // O manejar la ausencia de una tarifa en rango como prefieras
        }

        // Crear el evento con el precio (amount) asignado
        $event = new Event([
            'user_id' => $user->id,
            'title' => $validatedData['eventTitle'],
            'producto_id' => $validatedData['producte'],
            'start_date' => $validatedData['eventStartDate'],
            'end_date' => $validatedData['eventEndDate'],
            'total' => $total * $validatedData['eventDescription'],
            'amount' => $validatedData['eventDescription'],
        ]);

        $event->save(); // Guardar el evento
        return redirect()->back();

    }
}
