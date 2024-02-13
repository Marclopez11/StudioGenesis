<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
        <a href="index.html" class="">
            <span class="">
                <img width="60px" src="{{ asset('assets/images/login/logomin.png') }}" />
            </span>
            <span class="app-brand-text demo menu-text fw-bold ms-2"
                style="text-transform: none"></span><!-- StudioGenesis name bar -->
        </a>

        <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
        <!-- Apps & Pages -->
        <li class="menu-header small text-uppercase">
            <span class="menu-header-text" data-i18n="Apps & Pages">Productes</span>
        </li>

        <li class="menu-item">
            <a href="{{ route('dashboard') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-cart-add"></i>
                <div class="text-truncate" data-i18n="Productes">Productes
                </div>
            </a>
        </li>


        <li class="menu-header small text-uppercase">
            <span class="menu-header-text" data-i18n="Apps & Pages">Agenda</span>
        </li>

        <li class="menu-item">
            <a href="{{ route('agenda') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-calendar"></i>
                <div class="text-truncate" data-i18n="Agenda">Agenda
                </div>
            </a>
        </li>


        <!-- Apps & Pages -->
        <li class="menu-header small text-uppercase">
            <span class="menu-header-text" data-i18n="Selects & Informacion">Llistes</span>
        </li>



        <li class="menu-item">
            <a href="{{ route('categoria') }}" class="menu-link">
                <i class="menu-icon bx bx-category"></i>
                <div class="text-truncate" data-i18n="categoria">Categoría</div>
            </a>
        </li>

        <li class="menu-item">
            <a href="{{ route('tarifa') }}" class="menu-link">
                <i class="menu-icon bx bx-radio-circle"></i>
                <div class="text-truncate" data-i18n="categoria">Tarifas</div>
            </a>
        </li>

    </ul>
</aside>
