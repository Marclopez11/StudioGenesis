<!DOCTYPE html>
<html>
<head>
    <title>Detalles del Producto</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
        }
        .product-image {
            width: 100%;
            max-width: 300px;
            height: auto;
        }
    </style>
</head>
<body>
    <div>
        @if($elem->fotos->first() && $elem->fotos->first()->path)
        <img src="{{ $elem->fotos->first()->path }}" alt="Imagen" width="200">
    @endif
            <h5>Nombre: {{ $elem->nombre }}</h5>
        <p>Descripción: {{ $elem->descripcion }}</p>
    </div>
</body>
</html>
