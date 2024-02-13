@php
    $color = $implementacio == 'some_condition' ? 'green' : 'red'; // Adjust the condition as needed
@endphp

<span style="color: {{ $color }};">{{ $implementacio }}</span>
