<x-app-layout>
    <div class="container-xxl flex-grow-1 container-p-y">


        <h4 class="py-3 mb-4">
            Perfil d'usuari
        </h4>


        <!-- Header -->
        @include('partials.profile.header')

        <!--/ Header -->
        <div class="row">
            <div class="col-md-12">
                <ul class="nav nav-pills flex-column flex-sm-row mb-4">
                    <li class="nav-item"><a class="nav-link active" href="{{ route('profile') }}"><i
                                class='bx bx-user me-1'></i> Perfil</a></li>
                    <!-- <li class="nav-item"><a class="nav-link" href="{ 'admin/settings'|page }}"><i class='bx bx-cog me-2'></i>Settings</a></li>
             <li class="nav-item"><a class="nav-link" href="pages-profile-projects.html"><i class='bx bx-grid-alt me-1'></i> Projects</a></li>
              <li class="nav-item"><a class="nav-link" href="pages-profile-connections.html"><i class='bx bx-link-alt me-1'></i> Connections</a></li>-->
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-5">
                <div class="card mb-4">
                    <div class="card-body">
                        <small class="text-muted text-uppercase">SOBRE MI</small>
                        <ul class="list-unstyled mb-4 mt-3">
                            <li class="d-flex align-items-center mb-3"><i class="bx bx-user"></i><span
                                    class="fw-medium mx-2">Nom i Cognoms:</span> <span>{{ ucfirst($user->name) }}</span>
                            </li>
                            <li class="d-flex align-items-center mb-3"><i class="bx bx-check"></i><span
                                    class="fw-medium mx-2">Estat:</span> <span>Activat</span></li>
                            <li class="d-flex align-items-center mb-3"><i class="bx bx-star"></i><span
                                    class="fw-medium mx-2">Role:</span> <span>{{ ucfirst($role) }}</span></li>

                        </ul>
                        <small class="text-muted text-uppercase">Contacte</small>
                        <ul class="list-unstyled mb-4 mt-3">
                            <li class="d-flex align-items-center mb-3"><i class="bx bx-envelope"></i><span
                                    class="fw-medium mx-2">Email:</span> <span>{{ $user->email }}</span></li>
                        </ul>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                        <small class="text-muted text-uppercase">Usuaris a la plataforma</small>
                        <ul class="list-unstyled mt-3 mb-0">
                            <li class="d-flex align-items-center mb-3"><i class='bx bx-customize'></i><span
                                    class="fw-medium mx-2">Usuaris:</span> <span>{{ $userCount }}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-8 col-lg-7 col-md-7">
                <div class="row g-4">
                    <div class="card">
                        <div class="card-datatable table-responsive">
                            <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div class="card-header flex-column flex-md-row">
                                    <div class="head-label text-center">
                                        <h5 class="card-title mb-0">Usuaris a la plataforma</h5>
                                    </div>
                                    <div class="dt-action-buttons text-end pt-3 pt-md-0">
                                        <button class="dt-button create-new btn btn-primary" tabindex="0"
                                            aria-controls="DataTables_Table_0" type="button"
                                            onclick="redirectToCreateProject()">
                                            <span><i class="bx bx-plus me-sm-1"></i> <span
                                                    class="d-none d-sm-inline-block">Nou usuari</span></span>
                                        </button>
                                    </div>
                                </div>

                                <table class="datatables-basic table border-top dataTable no-footer dtr-column"
                                    id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info"
                                    style="width: 1308px;">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0"
                                                rowspan="1" colspan="1" style="width: 293px;"
                                                aria-label="Name: activate to sort column ascending">Name</th>
                                            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0"
                                                rowspan="1" colspan="1" style="width: 283px;"
                                                aria-label="Email: activate to sort column ascending">Email</th>
                                            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0"
                                                rowspan="1" colspan="1" style="width: 99px;"
                                                aria-label="Date: activate to sort column ascending">Date</th>
                                            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0"
                                                rowspan="1" colspan="1" style="width: 132px;"
                                                aria-label="Status: activate to sort column ascending">Estado</th>
                                            <!--if ($role == 'admin')
                                                <th class="sorting_disabled" rowspan="1" colspan="1"
                                                    style="width: 80px;" aria-label="Actions">Actions</th>
                                            endif-->

                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($users as $user)
                                            <tr class="even">
                                                <td>
                                                    <div
                                                        class="d-flex justify-content-start align-items-center user-name">
                                                        <div class="avatar-wrapper">
                                                            <div class="avatar me-2"><img
                                                                    src="{{ $user->profile_photo_url }}"
                                                                    alt="Avatar" class="rounded-circle"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div
                                                        class="d-flex justify-content-start align-items-center user-name">
                                                        <div class="d-flex flex-column"><span
                                                                class="emp_name text-truncate">{{ ucfirst($user->name) }}</span><small
                                                                class="emp_post text-truncate text-muted">{{ ucfirst($user->roles->first()->name) }}</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{{ $user->email }}</td>
                                                <td>{{ $user->created_at->format('d-m-Y') }}</td>
                                                <td>
                                                    <span class="badge bg-label-success">Activo</span>
                                                </td>

                                                <!--if ($role == 'admin')
                                                    <td>
                                                        <div class="d-inline-block">
                                                            <a href="javascript:;"
                                                                class="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                                                                data-bs-toggle="dropdown"><i
                                                                    class="bx bx-dots-vertical-rounded"></i></a>
                                                            <ul class="dropdown-menu dropdown-menu-end m-0">
                                                                <button
                                                                    class="dropdown-item text-success delete-record"
                                                                    data-request="onDelete" data-request-flash
                                                                    data-request-data="userId: { user->id }}">Activar</button>
                                                                <button class="dropdown-item text-danger delete-record"
                                                                    data-request="onDelete" data-request-flash
                                                                    data-request-data="userId: { user->id }}">Desactivar</button>

                                                            </ul>
                                                        </div>
                                                        <a href="/admin/create-proyect/{$user->id}}" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></a>
                                                    </td>
                                                endif-->
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

</x-app-layout>
