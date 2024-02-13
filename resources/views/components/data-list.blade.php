<div class="container-xxl flex-grow-1 container-p-y">
    <div class="d-flex justify-content-between align-items-center">
        <h4 class="py-3 mb-4">
            <span class="text-muted fw-light">Llista /</span> {{$name}}
        </h4>


        @if ($role == 'admin')
        <button class="dt-button create-new btn btn-primary" tabindex="0" type="button" data-bs-toggle="modal"
                data-bs-target="#modalCenter" onclick="openModal('create')">
                <span><i class="bx bx-plus me-sm-1"></i> <span class="d-none d-sm-inline-block">Crear nova
                        {{$name}}</span></span>
            </button>
        @endif
    </div>
    <div class="card">
        <div class="card-datatable table-responsive">
            <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">

                <table class="datatables-basic table border-top dataTable no-footer dtr-column"
                    id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" style="width: 1308px;">
                    <thead>
                        <tr>
                            @foreach ($columns as $index => $column)
                            <th class="sorting" tabindex="{{ $loop->index }}" aria-controls="DataTables_Table_{{ $loop->index }}" rowspan="1"
                                colspan="1" style="width: 293px;"
                                aria-label="{{$column}}: activate to sort column ascending">{{ ucfirst($column) }} </th>
                            @endforeach



                            @if ($role == 'admin')
                                <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 80px;"
                                    aria-label="Actions">Accions</th>
                            @endif
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($items as $item)
                            <tr class="even">
                                @foreach ($columns as $displayName => $propertyName)
                                <td>
                                    <div class="d-flex justify-content-start align-items-center user-name">
                                        <div class="d-flex flex-column">
                                            <span class="emp_name text-truncate">
                                                {{ $item->$propertyName }}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                            @endforeach

                                @if ($role == 'admin')
                                    <td>
                                        <div class="d-inline-block">
                                            <a data-bs-toggle="modal" data-bs-target="#modalDelete{{ $item->id }}"
                                                class="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                                                data-bs-toggle="dropdown"><i class='bx bx-trash'
                                                    style='color:#ff0000'></i></a>
                                        </div>
                                        <a data-bs-toggle="modal" data-bs-target="#modalCenter"
                                            class="btn btn-sm btn-icon item-edit"
                                            onclick="openModal('edit',{{ $item->id }},
                                            @foreach ($columns as $displayName => $propertyName)
                                            '{{ $item->$propertyName }}',
                                            @endforeach)">
                                            <i class="bx bxs-edit"></i></a>
                                    </td>
                                @endif
                                <!-- Confirm Delation-->
                                <!-- Vertically Centered Modal -->
                                <div class="col-lg-4 col-md-6">
                                    <div class="mt-3">
                                        <!-- Modal -->
                                        <div class="modal fade" id="modalDelete{{ $item->id }}" tabindex="-1"
                                            aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="card-header d-flex align-items-center justify-content-between"
                                                        style="
                                           margin-left: 5%;
                                           ">
                                                        <h5 class="card-title m-0 me-2"
                                                            id="borrar{{ $item->id }}">
                                                            Estàs segur que desitges esborrar?</h5>
                                                    </div>
                                                    <div class="modal-body" style="padding: 10px 50px 20px;">
                                                        <p>Tingues en compte que si ho esborres per error, caldrà
                                                            crear-lo novament. Si tens alguna urgència, si us plau,
                                                            contacta amb el desenvolupador.</p>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-label-secondary"
                                                            data-bs-dismiss="modal">Tancar</button>
                                                            <form action="{{ route($route.'.delete', $item->id) }}" method="POST">
                                                                @csrf
                                                                @method('DELETE')
                                                                <button type="submit" class="btn btn-label-danger">Esborrar</button>
                                                            </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!--/ Card Border Shadow -->
</div>


<script>
    $(document).ready(function() {
        $('#DataTables_Table_0').DataTable({
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.13.7/i18n/ca.json"
            }
        });
    });
</script>
