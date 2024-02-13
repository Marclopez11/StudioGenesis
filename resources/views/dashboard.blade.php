<x-app-layout>
    <div class="container-xxl flex-grow-1 container-p-y">


        <h4 class="py-3 mb-4">
            RESUMEN
        </h4>

        <x-contadores-component :categoriasConHijos="$categoriasConHijos" :conteoCategoriasPadre="$conteoCategoriasPadre" :productosDeTodos="$productosDeTodos" :productosPropios="$productosPropios">
        </x-contadores-component>


        <div class="card-header flex-column flex-md-row">
            <div class="dt-action-buttons text-end pt-3 pt-md-0">
                <button class="dt-button create-new btn btn-primary" tabindex="0" aria-controls="DataTables_Table_0"
                    type="button" onclick="redirectToCreateProject()">
                    <span><i class="bx bx-plus me-sm-1"></i> <span class="d-none d-sm-inline-block">Nous
                            productes</span></span>
                </button>
            </div>
        </div>
        <br />

        <h4 class="py-3 mb-4">
            PRODUCTES
        </h4>
        <div class="card">

            <br />
            <livewire:producto-table />
            <br />
        </div>
        <!--/ Card Border Shadow -->
    </div>

    <div class="card">




        <!-- Modal -->
        <div class="modal fade" id="modalDelete1" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="card-header d-flex align-items-center justify-content-between"
                        style="
                       margin-left: 5%;
                       ">
                        <h5 class="card-title m-0 me-2" id="borrar1">Estàs segur que desitges esborrar?
                        </h5>
                    </div>
                    <div class="modal-body" style="padding: 10px 50px 20px;">
                        <p>Tingues en compte que si ho esborres per error, caldrà crear-lo novament. Si tens
                            alguna urgència, si us plau, contacta amb el desenvolupador.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Tancar</button>
                        <form id="deleteForm" action="" method="POST">
                            <input type="hidden" id="deleteItemId" name="item_id">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-label-danger">Esborrar</button>
                        </form>
                    </div>
                </div>
            </div>




            <script>
                $(document).ready(function() {
                    @if (session('success'))
                        toastr.success("{{ session('success') }}");
                    @endif

                    @if (session('error'))
                        toastr.error("{{ session('error') }}");
                    @endif
                });

                function confirmDelete(itemId) {
                    var actionUrl = "{{ route('producte.delete', '') }}/" + itemId;
                    document.getElementById('deleteForm').action = actionUrl;

                    console.log(itemId);
                    var myModal = new bootstrap.Modal(document.getElementById('modalDelete1'), {
                        keyboard: false
                    });
                    myModal.show();
                }

                function redirectToCreateProject() {
                    window.location.href = "{{ route('producte-add') }}";
                }

                function redirectToEditProject(itemId) {
                    console.log(itemId);
                    window.location.href = "{{ route('producte-edit', '') }}/" + itemId;
                }
            </script>





</x-app-layout>
