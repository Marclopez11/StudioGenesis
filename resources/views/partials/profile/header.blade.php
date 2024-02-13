<div class="row">
  <div class="col-12">
    <div class="card mb-4">
      <div class="user-profile-header-banner">
        <img src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/pages/profile-banner.png" alt="Banner image" class="rounded-top">
      </div>
      <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
        <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
          <img src="{{$user->profile_photo_url}}" alt="user image" class="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img">
        </div>
        <div class="flex-grow-1 mt-3 mt-sm-5">
          <div class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
            <div class="user-profile-info">
              <h4>{{ ucfirst($user->name) }}</h4>
              <ul class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                <li class="list-inline-item fw-medium">
                  <i class='bx bx-pen'></i> StudioGenesis
                </li>
                <li class="list-inline-item fw-medium">
                  <i class='bx bx-map'></i> {{$user->groups[0]->nom}}
                </li>
                <li class="list-inline-item fw-medium">
                  <i class='bx bx-calendar-alt'></i> {{ $user->created_at->format('d-m-Y') }}
                </li>
              </ul>
            </div>
            <a href="javascript:void(0)" class="btn btn-success text-nowrap">
              <i class='bx bx-user-check me-1'></i>Connectat
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
