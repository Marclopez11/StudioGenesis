<x-app-layout>

    <x-data-list :route="'categoria'" :name="'Categorías'" :items="$categorias" :columns="$columns"
        :role="$role"></x-data-list>

        <div class="col-lg-4 col-md-6">
            <div class="mt-3">
                <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
                    <form id="category-form" action="{{ route('categoria.save') }}" enctype="multipart/form-data" method="POST">
                        @csrf
                        <input type="text" hidden id="idCategoria" name="idCategoria">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalCenterTitle">Gestión de Categoría</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label for="codigoCategoria" class="form-label">Código Categoría</label>
                                        <input type="text" id="codigoCategoria" name="codigoCategoria" class="form-control">
                                    </div>

                                    <div class="mb-3">
                                        <label for="nombreCategoria" class="form-label">Nombre Categoría</label>
                                        <input type="text" id="nombreCategoria" name="nombreCategoria" class="form-control">
                                    </div>

                                    <div class="mb-3">
                                        <label for="descripcionCategoria" class="form-label">Descripción Categoría</label>
                                        <textarea id="descripcionCategoria" name="descripcionCategoria" class="form-control"></textarea>
                                    </div>

                                    <div class="mb-3">
                                        <label for="categoriaPadre" class="form-label">Categoría Padre</label>
                                        <select id="categoriaPadre" name="categoriaPadre" class="form-select">
                                            <option value="">Ninguna</option>
                                            @foreach ($categoriasPadre as $categoriaPadre)
                                                <option value="{{ $categoriaPadre->id }}">{{ $categoriaPadre->nombre }}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-label-secondary"
                                        data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>




    <script>
       function openModal(action, elementId,codigoCategoria, nombreCategoria, descripcionCategoria, categoriaPadreId)
        {
        if (action === 'create') {
            $('#modalCenterTitle').text('Crear nueva Categoría');
            $('#idCategoria').val('');
            $('#nombreCategoria').val('');
            $('#codigoCategoria').val('');
            $('#descripcionCategoria').val('');
            $('#categoriaPadre').val('');
        } else if (action === 'edit') {
            $('#modalCenterTitle').text('Editar Categoría');
            $('#idCategoria').val(elementId);
            $('#codigoCategoria').val(codigoCategoria);
            $('#nombreCategoria').val(nombreCategoria);
            $('#descripcionCategoria').val(descripcionCategoria);

            $('#categoriaPadre').val(categoriaPadreId);

            var textoBuscado = categoriaPadreId; // nombre de la categoría padre
            $('#categoriaPadre option').filter(function() {
                return $(this).text() === textoBuscado;
            }).prop('selected', true);

        }
    }

$(document).ready(function() {
    $('#category-form').submit(function(e) {
        var codigoCategoria = $('#codigoCategoria').val().trim();
        var nombreCategoria = $('#nombreCategoria').val().trim();
        var descripcionCategoria = $('#descripcionCategoria').val().trim();
        // No necesitas validar categoriaPadre ya que es opcional y puede ser nulo
        var isValid = true;

        if (codigoCategoria === '') {
            toastr.error('El campo Codigo es obligatorio.');
            isValid = false;
        }

        if (nombreCategoria === '') {
            toastr.error('El campo Nombre es obligatorio.');
            isValid = false;
        }


        if (!isValid) {
            e.preventDefault(); // Previene la sumisión del formulario si no es válido
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
