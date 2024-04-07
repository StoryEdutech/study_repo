<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Post;
use App\Policies\PostPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // Post::class => PostPolicy::class, // これでもいい
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {       
        $this->registerPolicies(); // 要るか不明

        Gate::define('isAdmin',function($user){
           return $user->role == 1;

        });

        Gate::guessPolicyNamesUsing(function (string $modelClass) {
            return Str::of($modelClass)->replace('App\Models', 'App\Policies').'Policy';
        });
    }
}
