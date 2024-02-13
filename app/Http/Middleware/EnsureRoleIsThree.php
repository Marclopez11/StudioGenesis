<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class EnsureRoleIsThree
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
   
    public function handle($request, Closure $next)
    {
        if (!Auth::check() || !Auth::user()->hasRole('superadmin')) {
            return redirect('dashboard');
        }
        return $next($request);
    }

}
