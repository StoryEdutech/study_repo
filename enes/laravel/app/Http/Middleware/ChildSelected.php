<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ChildSelected
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
      if (!$request->session()->exists('child_id')) {
            $request->session()->put('url.before_child_select',url()->current());
            // user value cannot be found in session
            return redirect('/child_select');
        }
        return $next($request);
    }
}
