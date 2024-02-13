<div class="col-lg-4 col-md-6">
    <div class="mt-3">
        <!-- Modal -->
        <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
            <form id="wizard-create-deal-form" action="{{ route($route . '.save') }}" enctype="multipart/form-data"
                method="POST">
                @csrf
                <input type="text" hidden id="{{$idelement}}" name="{{$idelement}}" value="">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalCenterTitle"></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col mb-6">
                                    <label for="nameWithTitle" class="form-label">Nom</label>
                                    <input type="text" id="nameWithTitle" name="nom" class="form-control"
                                        placeholder="Nom">
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
    function openModal(action, id, nameInput) {

        var name = "{{ $name }}";
        var idelement = "{{ $idelement }}";

        // Actualiza el título del modal
        if (action === 'create') {
            $('#modalCenterTitle').text('Crear nou '+name);
            
            $('#'+idelement).val('');
            $('#nameWithTitle').val('');

            console.log(idelement);

        } else if (action === 'edit') {
            console.log(id);

            $('#modalCenterTitle').text('Edita '+name);
            $('#'+idelement).val(id);
            $('#nameWithTitle').val(nameInput);
        }
    }
</script>

<script>
    $(document).ready(function() {
        $('#wizard-create-deal-form').submit(function(e) {
            var nom = $('#nameWithTitle').val().trim();
            var isValid = true;

            if (nom === '') {
                toastr.error('El camp Name és obligatori.');
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    });

    $(document).ready(function() {
        @if(session('success'))
            toastr.success("{{ session('success') }}");
        @endif
    });
</script>

