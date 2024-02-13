<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User; 
use Illuminate\Support\Facades\Validator; 
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    public function index(){
        // Obtener el usuario autenticado
        $user = auth()->user();

        $role = $user->getRoleNames()->first() ?? 'user';
        $group = $user->groups()->first();


        if ($role == 'user' || $role == 'admin') {
            $group = $user->groups()->first(); // Obtener el primer grupo del usuario
            if ($group) {
                $users = $group->users; // Usuarios en el mismo grupo
            } else {
                $users = collect(); // Colección vacía si no hay grupo
            }
        } else {
            $users = User::all(); // Obtener todos los usuarios si el rol no es 'user' o 'admin'
        }
    
       
        $userCount = $users->count();

        // Pasar los datos a la vista
        return view('perfil', [
            'users' => $users,
            'user' =>  $user,
            'userCount' => $userCount,
            'role' => $role,
        ]);
    }
}
