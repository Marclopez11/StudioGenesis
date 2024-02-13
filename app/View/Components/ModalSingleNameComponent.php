<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class ModalSingleNameComponent extends Component
{
    public $role;
    public $name;
    public $route;
    public $idelement;


    public function __construct($name, $role,$route,$idelement)
   {
       $this->role = $role;
       $this->name = $name;
       $this->route = $route;
       $this->idelement = $idelement;

   }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.modal-single-name-component');
    }
}
