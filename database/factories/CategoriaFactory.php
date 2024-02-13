<?php

namespace Database\Factories;

use App\Models\Categoria;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoriaFactory extends Factory
{
    protected $model = Categoria::class;

    public function definition()
    {
        // Usaremos Faker solo como fallback, pero la idea es pasar valores específicos al usar la factory.
        return [
            'nombre' => $this->faker->word,
            'descripcion' => $this->faker->sentence,
            // No asignamos 'categoria_padre_id' aquí ya que se manejará dinámicamente.
        ];
    }
}
