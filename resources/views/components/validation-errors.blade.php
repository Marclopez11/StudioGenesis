@if ($errors->any())
    <div {{ $attributes->merge(['class' => 'alert alert-danger mt-5']) }}>
        <div class="font-medium text-red-600">{{ __('Ups! Alguna cosa ha anat malament.') }}</div>

        <ul class="mt-3 list-disc list-inside text-sm text-red-600">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
