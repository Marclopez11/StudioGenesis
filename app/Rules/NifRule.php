<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class NifRule implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!preg_match('/^[XYZ]?[0-9]{5,8}[A-Z]$/', $value)) {
            $fail('El :attribute no es un NIF válido.');
        }
    }
}

