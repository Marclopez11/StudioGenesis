<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class DinamicComponent extends Component
{
    public $resultados;
    public $resultadosacceptacio;
    public $resultadosproposta;
    public $resultadosmotiu;
    public $resultadosterapeutics;
    public $resultadosmetges;


    public function __construct($resultados,$resultadosacceptacio,$resultadosproposta,$resultadosmotiu,$resultadosterapeutics,$resultadosmetges)
   {
       $this->resultados = $resultados;
       $this->resultadosacceptacio = $resultadosacceptacio;
       $this->resultadosproposta = $resultadosproposta;
       $this->resultadosmotiu = $resultadosmotiu;
       $this->resultadosterapeutics = $resultadosterapeutics;
       $this->resultadosmetges = $resultadosmetges;

   }
    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.dinamic-component');
    }
}
