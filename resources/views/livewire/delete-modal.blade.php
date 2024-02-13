<div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <!-- Contenido del modal aquí -->
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Cabecera, cuerpo y pie del modal -->
            <div class="modal-header">
                <h5 class="modal-title">Eliminar Registro</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ¿Estás seguro que deseas eliminar el registro con ID: {{ $selectedId }}?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-danger" wire:click="delete">Eliminar</button>
            </div>
        </div>
    </div>
</div>

<script>
    window.addEventListener('show-delete-modal', event => {
        $('#deleteModal').modal('show');
    });
</script>
