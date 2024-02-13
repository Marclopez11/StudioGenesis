<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Categoria;

class CategoriaSeeder extends Seeder
{
    public function run()
    {
        // Datos específicos para categorías y subcategorías.
        $categorias = [
            [
                'codigo' => '0A1',
                'nombre' => 'Electrónica',
                'descripcion' => 'Artículos electrónicos para el hogar y uso personal.',
                'subcategorias' => [
                    ['codigo' => '0A1-01','nombre' => 'Computadoras', 'descripcion' => 'Todo tipo de computadoras.'],
                    ['codigo' => '0A1-02','nombre' => 'Smartphones', 'descripcion' => 'Teléfonos inteligentes de última generación.'],
                ],
            ],
        ];

        foreach ($categorias as $categoria) {
            // Crear categoría padre.
            $categoriaPadre = Categoria::factory()->create([
                'codigo' => $categoria['codigo'],
                'nombre' => $categoria['nombre'],
                'descripcion' => $categoria['descripcion'],
            ]);

            // Crear subcategorías asociadas a la categoría padre.
            foreach ($categoria['subcategorias'] as $subcategoria) {
                Categoria::factory()->create([
                    'codigo' => $subcategoria['codigo'],
                    'nombre' => $subcategoria['nombre'],
                    'descripcion' => $subcategoria['descripcion'],
                    'categoria_padre_id' => $categoriaPadre->id,
                ]);
            }
        }
    }
}
