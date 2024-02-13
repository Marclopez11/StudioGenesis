<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class DataList extends Component
{
    public $columns;
    public $items;
    public $role;
    public $name;
    public $route;


    public function __construct($name,$items, $columns, $role,$route)
   {
       $this->items = $items;
       $this->columns = $columns;
       $this->role = $role;
       $this->name = $name;
       $this->route = $route;

   }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.data-list');
    }
}
