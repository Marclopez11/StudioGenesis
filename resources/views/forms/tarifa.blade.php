<x-app-layout>

    <x-data-list :route="'tarifa'" :name="'Tarifa'" :items="$tarifas" :columns="$columns"
        :role="$role"></x-data-list>



    <!-- Vertically Centered Modal -->
    <div class="col-lg-4 col-md-6">
        <div class="mt-3">
            <!-- Modal -->
            <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
                <form id="wizard-create-deal-form" action="{{ route('tarifa.save') }}" enctype="multipart/form-data"
                    method="POST">
                    @csrf
                    <input type="text" hidden id="idTarifa" name="idTarifa" value="">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalCenterTitle">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col mb-3">
                                        <label for="productoId" class="form-label">Producto ID</label>
                                        <input type="text" id="productoId" name="codigo" class="form-control" placeholder="Codigo Producto">
                                    </div>

                                    <div class="col mb-3">
                                        <label for="precio" class="form-label">Precio</label>
                                        <input type="number" id="precio" name="precio" class="form-control" placeholder="Precio" min="0" step="0.01">

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col mb-3">
                                        <label for="fechaInicio" class="form-label">Fecha Inicio</label>
                                        <input type="date" id="fechaInicio" name="fecha_inicio" class="form-control">
                                    </div>

                                    <div class="col mb-3">
                                        <label for="fechaFin" class="form-label">Fecha Fin</label>
                                        <input type="date" id="fechaFin" name="fecha_fin" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-label-secondary"
                                    data-bs-dismiss="modal">Tancar</button>
                                <button type="submit" class="btn btn-primary">Guardar canvis</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script>
       function openModal(action, id, productoId, precio, fechaInicio, fechaFin) {
        if (action === 'create') {
            $('#modalCenterTitle').text('Crear nueva Tarifa');
            $('#idTarifa').val('');
            $('#productoId').val('');
            $('#precio').val('');
            $('#fechaInicio').val('');
            $('#fechaFin').val('');
        } else if (action === 'edit') {
            $('#modalCenterTitle').text('Editar Tarifa');
            $('#idTarifa').val(id);
            $('#productoId').val(productoId);
            $('#precio').val(precio);
            $('#fechaInicio').val(fechaInicio);
            $('#fechaFin').val(fechaFin);
        }
    }



        $(document).ready(function() {
    $('#wizard-create-deal-form').submit(function(e) {
        var productoId = $('#productoId').val().trim();
        var precio = $('#precio').val().trim();
        var fechaInicio = $('#fechaInicio').val().trim();
        var fechaFin = $('#fechaFin').val().trim();
        var isValid = true;

        // Validaciones básicas para ejemplo, ajustar según necesidad
        if (!productoId) {
            toastr.error('El campo Producto ID es obligatorio.');
            isValid = false;
        }

        if (!precio) {
            toastr.error('El campo Precio es obligatorio.');
            isValid = false;
        }

        // Validación de fechas
        if (fechaInicio && fechaFin) {
            var inicio = new Date(fechaInicio);
            var fin = new Date(fechaFin);

            if (inicio > fin) {
                toastr.error('La fecha de inicio no puede ser mayor que la fecha de fin.');
                isValid = false;
            }
        } else {
            // Si alguna de las fechas está vacía, se considera inválida la validación
            toastr.error('Las fechas de inicio y fin son obligatorias.');
            isValid = false;
        }
        if (!isValid) {
            e.preventDefault(); // Prevenir la acción por defecto si la validación falla
        }
    });
});



        $(document).ready(function() {
        @if(session('success'))
            toastr.success("{{ session('success') }}");
        @endif

        @if(session('error'))
            toastr.error("{{ session('error') }}");
        @endif
    });
    </script>

</x-app-layout>
