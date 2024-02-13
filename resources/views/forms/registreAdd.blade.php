<x-app-layout>
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
            <form method="post" class="repeater" id="wizard-create-deal-form" action="{{ route('producte.save') }}"
                enctype="multipart/form-data" method="POST">
                @csrf
                <input type="text" hidden name="user_id" id="user_id" value="{{ $user_id }}"
                    class="form-control">
                <!-- Form Repeater -->
                <h5 class="card-header">PRODUCTES</h5><br>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <input type="text" hidden name="cat-id" id="cat-id" value="0"
                                class="form-control">
                            <div data-repeater-list="category-group">
                                <div data-repeater-item>
                                    <div class="row">

                                        <!-- código producto -->

                                        <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                                            <label class="form-label">Código producto</label>
                                            <div class="input-group input-group-merge">
                                                <input type="text" name="codigo_producto" class="form-control"
                                                    id="codigo_producto" />
                                            </div>
                                        </div>

                                        <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                                            <label class="form-label">Nombre producto</label>
                                            <div class="input-group input-group-merge">
                                                <input type="text" name="nombre" class="form-control"
                                                    id="nombre" />
                                            </div>
                                        </div>

                                        <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                                            <label class="form-label" for="form-repeater-1-6">Categories</label>
                                            <select class="form-select" name="categories" data-style="btn-default"
                                                data-live-search="true" multiple>




                                                @foreach ($categories as $cat)
                                                    <option data-tokens="ketchup mustard" value="{{ $cat->id }}">
                                                        {{ $cat->nombre }}</option>
                                                @endforeach
                                            </select>
                                        </div>

                                        <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                                            <label class="form-label" for="form-repeater-1-7">Tarifes</label>
                                            <select class="form-select" name="tarifes" data-style="btn-default"
                                                data-live-search="true" multiple>

                                                @foreach ($tarifes as $tar)
                                                    <option data-tokens="ketchup mustard" value="{{ $tar->id }}">
                                                        {{ $tar->codigo }}</option>
                                                @endforeach
                                            </select>
                                        </div>


                                        <div class="mb-3 col-lg-6 col-xl-10 col-12 mb-0">
                                            <label class="form-label" for="form-repeater-1-9">Descripción
                                                producto</label>
                                            <textarea name="descripcion" class="form-control" rows="2"></textarea>

                                        </div>



                                        <div class="mb-3 col-lg-6 col-xl-12 col-12 mb-0">
                                            <label class="form-label" for="form-repeater-1-10">Foto/fotos del
                                                producto</label>
                                            <label for="fileUpload" class="form-label">Selecciona los archivos</label>
                                            <input class="form-control" type="file" id="fileUpload" name="files"
                                                multiple="" accept="image/jpeg, image/png, image/gif">

                                            <div id="fileHelp" class="form-text">Mantén presionado Ctrl para
                                                seleccionar múltiples archivos.</div>
                                        </div>





                                        <div class="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                                            <input style="margin-top:15%;" data-repeater-delete class="btn btn-danger"
                                                type="button" value="Esborrar" />
                                        </div>
                                    </div>
                                    <hr style="height: 4px; background-color: black; border: none;">
                                </div>
                            </div>
                            <div class="mb-0">
                                <input data-repeater-create class="btn btn-primary" type="button" value="Afegir" />
                                <button type="submit" id="publish-btn" class="btn btn-success">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Form Repeater -->
            </form>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            'use strict';

            window.id = 0;

            $('.repeater').repeater({
                defaultValues: {
                    'id': window.id,
                },
                show: function() {
                    $(this).slideDown();

                    // Increment the window.id when a new element is added
                    window.id++;
                    $('#cat-id').val(window.id);

                    // Inicializar Select2 en el nuevo elemento
                    $(this).find('select').select2({
                        // ...
                    });

                    // Check the value of window.id and show/hide the button accordingly
                    updateSubmitButtonVisibility();
                },
                hide: function(deleteElement) {
                    if (confirm('Esteu segur que voleu suprimir aquest element?')) {
                        window.id--;
                        $('#cat-id').val(window.id);
                        $(this).slideUp(deleteElement);

                        // Check the value of window.id and show/hide the button accordingly
                        updateSubmitButtonVisibility();

                        console.log($('.repeater').repeaterVal());
                    }
                },
                ready: function(setIndexes) {
                    // Your initialization logic here, if needed
                }
            });

            function updateSubmitButtonVisibility() {
                if (window.id === -1) {
                    $('#publish-btn').hide();
                } else {
                    $('#publish-btn').show();
                }
            }
        });

        $(document).ready(function() {
            $('#wizard-create-deal-form').submit(function(e) {
                // Variable para mantener el estado de la validación
                var isValid = true;




                $('input[name^="category-group["][name*="][codigo_producto]"]').each(function() {
                    if ($(this).val().trim() === '') {
                        toastr.error("Todos los códigos de producto son obligatorios.");
                        isValid = false;
                        return false; // Salir del bucle
                    }
                });

                $('input[name^="category-group["][name*="][nombre]"]').each(function() {
                    if ($(this).val().trim() === '') {
                        toastr.error("Todos los Nombres de producto son obligatorios.");
                        isValid = false;
                        return false; // Salir del bucle
                    }
                });
                $('textarea[name^="category-group["][name*="][descripcion]"]').each(function() {
                    if ($(this).val().trim() === '') {
                        toastr.error("Todas las descripciones de los productos son obligatorios.");
                        isValid = false;
                        return false; // Salir del bucle
                    }
                });



                // Si algún código de producto está vacío, impedir el envío del formulario
                if (!isValid) {
                    e.preventDefault();
                }
            });
        });


        $(document).ready(function() {
            $('select').select2({});
        });

        $(document).ready(function() {
            @if (session('success'))
                toastr.success("{{ session('success') }}");
            @endif

            @if (session('error'))
                toastr.error("{{ session('error') }}");
            @endif
        });
    </script>


</x-app-layout>
