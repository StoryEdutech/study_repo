<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div
        class="blog-list dashboard"
    >
        @foreach ($all_posts as $post)
            <div
                class="wrapper blog"
                style="
                    width: 70%;
                    margin-right:auto;
                    margin-left: 40px;
                "        
            >
                <x-blog
                    :post="$post"
                />
            </div>
        @endforeach
    </div>
</x-app-layout>
