<x-app-layout>
    @auth
        <h1 style="font-weight :600">こんにちは, {{ $user->name }} </h1>
        <h2>ユーザーid: {{ $user->id }}</h2>
        <div style="height: 30px" class="spacer"></div>
    @endauth

    <x-add-blog-form />
    <hr style="border: 2px solid black" />

    <h3>過去の投稿</h3>

    <div
        class="blog-list"
        style="width: 70%;
               margin-right:auto;
               margin-left: 60px;"
    >
        @if(count($posts) > 0)
            @foreach ($posts as $post)
                <div class="wrapper blog">
                    <x-blog
                        :post="$post"
                        :can_edit="$can_edit"
                    />
                </div>
            @endforeach
        @else
            <h2>まだあなたの投稿はありません</h2>
            <h2>上のフォームから投稿してみましょう</h2>
        @endif
    </div>

</x-app-layout>
