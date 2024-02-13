<?php

namespace App\Livewire;

use App\Models\Producto;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Builder;
use PowerComponents\LivewirePowerGrid\Button;
use PowerComponents\LivewirePowerGrid\Column;
use PowerComponents\LivewirePowerGrid\Exportable;
use PowerComponents\LivewirePowerGrid\Facades\Filter;
use PowerComponents\LivewirePowerGrid\Footer;
use PowerComponents\LivewirePowerGrid\Header;
use PowerComponents\LivewirePowerGrid\PowerGrid;
use PowerComponents\LivewirePowerGrid\PowerGridColumns;
use PowerComponents\LivewirePowerGrid\PowerGridComponent;
use PowerComponents\LivewirePowerGrid\Traits\WithExport;
use Illuminate\Support\Facades\Auth;
use PowerComponents\LivewirePowerGrid\Cache;

final class ProductoTable extends PowerGridComponent
{
    use WithExport;
    public string $primaryKey = 'productos.id';

    public function setUp(): array
    {
        $this->showCheckBox();

        return [
            Exportable::make('export')
                ->striped()
                ->type(Exportable::TYPE_XLS, Exportable::TYPE_CSV), // Aquí se agrega la opción PDF
            Header::make()
                ->showSearchInput()
                ->showToggleColumns(),
            Footer::make()
                ->showPerPage()
                ->showRecordCount(),
        ];
    }

    public function datasource(): Builder
    {
        $user = Auth::user(); // Obtiene el usuario autenticado actual


        $query = Producto::whereNull('deleted_at');


        return $query;
    }


    public function relationSearch(): array
    {
        return [];
    }

    public function addColumns(): PowerGridColumns
    {
        return PowerGrid::columns()

            ->addColumn('user_id')
            ->addColumn('created_at_formatted', fn (Producto $model) => Carbon::parse($model->created_at)->format('d/m/Y H:i:s'));
    }

    public function columns(): array
    {
        return [

            Column::add()
                ->title('codigo_producto')
                ->field('codigo_producto', 'codigo_producto')
                ->bodyAttribute('text-center')
                ->sortable()
                ->searchable(),

            Column::make('Nombre', 'nombre')
                ->bodyAttribute('text-center')
                ->sortable()
                ->searchable(),

            Column::make('Descripcion', 'descripcion')
                ->bodyAttribute('text-center')
                ->sortable()
                ->searchable(),

            Column::action('Action')
        ];
    }

    public function filters(): array
    {
        return [
            /* Filter::select('nombre_farmac_inicial', 'farmac_id')
            ->dataSource(Farmac::query()->whereNull('deleted_at')->get())
            ->optionValue('id')
            ->optionLabel('name'),*/];
    }

    #[\Livewire\Attributes\On('edit')]
    public function edit($rowId): void
    {
        $this->redirect()->route('edit-registre', ['id' => 1]);
    }


    #[\Livewire\Attributes\On('delete')]
    public function delete($rowId): void
    {
        $registre = Producto::findOrFail($rowId);
        //$registre->delete();
        session()->flash('success', 'Producte eliminat correctament.');
        $this->redirect(request()->header('Referer'));
    }

    public function actions(\App\Models\Producto $row): array
    {
        return [
            Button::add('edit')
                ->slot('<i onclick="redirectToEditProject(\'' . $row->id . '\')" class="bx bxs-edit"></i>')
                ->class('btn btn-sm btn-icon item-edit'),
            Button::add('delete')
                ->slot('<a data-bs-toggle="modal"  onclick="confirmDelete(' . $row->id . ')" class="btn btn-sm btn-icon dropdown-toggle hide-arrow"><i class="bx bx-trash" style="color:#ff0000"></i></a>')
                ->class('btn btn-sm btn-icon dropdown-toggle hide-arrow')
        ];
    }

    /*
    public function actionRules($row): array
    {
       return [
            // Hide button edit for ID 1
            Rule::button('edit')
                ->when(fn($row) => $row->id === 1)
                ->hide(),
        ];
    }
    */
}
