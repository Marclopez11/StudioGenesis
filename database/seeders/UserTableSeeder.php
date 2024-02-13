<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use App\Models\Group;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'name' => 'Test',
            'email' => 'test@test.com',
            'password' => Hash::make('12345678'), // Encriptando la contraseña
        ]);


          // Asignar rol
          $role = Role::findByName('admin');
          $user->assignRole($role);

          // Asignar al grupo
          $groupId = Group::find(1); // Asegúrate de que este grupo exista en tu base de datos

          if ($groupId) {
              $user->groups()->attach($groupId);
              $user->save(); // Guarda el cambio
          } else {
              // Manejar el caso de que el grupo no se encuentre
              echo "Grupo no encontrado.\n";
          }
    }
}
