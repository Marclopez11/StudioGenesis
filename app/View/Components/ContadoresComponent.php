<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class ContadoresComponent extends Component
{
    public $categoriasConHijos;
    public $conteoCategoriasPadre;
    public $productosDeTodos;
    public $productosPropios;

    public function __construct($categoriasConHijos, $conteoCategoriasPadre, $productosDeTodos,$productosPropios)
   {
       $this->categoriasConHijos = $categoriasConHijos;
       $this->conteoCategoriasPadre = $conteoCategoriasPadre;
       $this->productosDeTodos = $productosDeTodos;
       $this->productosPropios = $productosPropios;

   }


    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.contadores-component');
    }
}
