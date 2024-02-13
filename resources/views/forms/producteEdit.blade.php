<x-app-layout>
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-12">
                <h5 class="card-header"> DADES IDENTIFICATIVES
                </h5><br>
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                            <!-- Bootstrap carousel -->
                            <div class="col-md">
                                @if ($elem->fotos->isNotEmpty())
                                    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            @foreach ($elem->fotos as $index => $foto)
                                                <div class="carousel-item {{ $index == 0 ? 'active' : '' }}">
                                                    <img class="d-block w-100" src="{{ asset($foto->path) }}"
                                                        alt="Slide {{ $index + 1 }}"
                                                        style=" width: 200px;height: 500px; object-fit: cover;">
                                                    <div class="carousel-caption d-none d-md-block">

                                                        <h5></h5>
                                                        <p></p>

                                                        <form id="deleteForm" action="" method="POST">
                                                            <input type="hidden" id="deletePhotoPath" name="photo_path"
                                                                value="{{ $foto->path }}">
                                                            @csrf
                                                            @method('DELETE')

                                                            <button type="submit"
                                                                class="btn btn-label-danger">Esborrar</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExample" role="button"
                                            data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExample" role="button"
                                            data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </a>
                                    </div>
                                @endif


                            </div>





                            <div class="mb-3 col-lg-6 col-xl-6 col-12 mb-0">
                                <div class="input-group input-group-merge">
                                    <div class="col-12">
                                        <h5>fsbcmdhfcensfcejwnfvcs: {{ $elem->nombre }}</h5>
                                        <p>jfwksdjfckefmrkedbfc: {{ $elem->descripcion }}</p>
                                        <a href="{{ route('producte.export.pdf', $elem->id) }}" class="btn btn-primary">Exportar a PDF</a>
                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <form method="post" class="repeater" id="wizard-create-deal-form"
                action="{{ route('producte.edit', ['id' => $elem->id]) }}" enctype="multipart/form-data">

                @csrf
                <input type="text" hidden name="user_id" id="user_id" value="{{ $user_id }}"
                    class="form-control">
                <!-- Form Repeater -->
                <h5 class="card-header">PRODUCTES</h5><br>
                <div class="card">
                    <div class="card-body">
                        <input type="text" hidden name="cat-id" id="cat-id" value="0" class="form-control">
                        <div data-repeater-list="category-group">
                            <div data-repeater-item>
                                <div class="row">

                                    <!-- código producto -->

                                    <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                                        <label class="form-label">Código producto</label>
                                        <div class="input-group input-group-merge">
                                            <input type="text" name="codigo_producto" class="form-control"
                                                id="codigo_producto" value="{{ $elem->codigo_producto }}" />

                                        </div>
                                    </div>

                                    <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                                        <label class="form-label">Nombre producto</label>
                                        <div class="input-group input-group-merge">
                                            <input type="text" name="nombre" class="form-control" id="nombre"
                                                value="{{ $elem->nombre }}" />

                                        </div>
                                    </div>



                                    <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                                        <label class="form-label" for="form-repeater-1-6">Categories</label>
                                        <select class="form-select" name="categories" data-style="btn-default"
                                            data-live-search="true" multiple>

                                            @foreach ($categories as $cat)
                                                <option value="{{ $cat->id }}"
                                                    @if (in_array($cat->id, $elem->categorias->pluck('id')->toArray())) selected @endif>
                                                    {{ $cat->nombre }}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                                        <label class="form-label" for="form-repeater-1-7">Tarifes</label>
                                        <select class="form-select" name="tarifes" data-style="btn-default"
                                            data-live-search="true" multiple>

                                            @foreach ($tarifes as $tar)
                                                <option value="{{ $tar->id }}"
                                                    @if (in_array($tar->id, $elem->tarifas->pluck('id')->toArray())) selected @endif>
                                                    {{ $tar->codigo }}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>


                                    <div class="mb-3 col-lg-6 col-xl-10 col-12 mb-0">
                                        <label class="form-label" for="form-repeater-1-9">Descripción
                                            producto</label>
                                        <textarea name="descripcion" class="form-control" rows="2">{{ $elem->descripcion }}</textarea>

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


                                </div>
                            </div>
                        </div>
                        <div class="mb-0">
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
                    if (confirm('Are you sure you want to delete this element?')) {
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

                $('input[name="category-group[0][codigo_producto]"]').each(function() {
                    if ($(this).val().trim() === '') {
                        toastr.error(
                            "El código del producto es obligatorio para el primer elemento.");
                        isValid = false;
                        return false; // Salir del bucle
                    }
                });


                $('input[name="category-group[0][nombre]"]').each(function() {
                    if ($(this).val().trim() === '') {
                        toastr.error("El nombre del producto son obligatorios.");
                        isValid = false;
                        return false; // Salir del bucle
                    }
                });

                $('input[name="category-group[0][descripcion]"]').each(function() {
                    if ($(this).val().trim() === '') {
                        toastr.error("La descripcion del producto es obligatorio.");
                        isValid = false;
                        return false; // Salir del bucle
                    }
                });



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
