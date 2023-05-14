@props([
    'id' => null,
    'username' => '読み込めませんでした',
    'title' => '読み込めませんでした',
    'content' => '読み込めませんでした'
])

<div
    class="blog-core" 
    style="
        background-color: lightgray;
        border-radius: 5px;
        margin: 20px 0;
        padding: 20px;
    "
>
    <div style="border-bottom: 2px solid black">
        <p style="display:inline">タイトル：{{ $title }}</p>
    </div>
    <div style="height: 15px" class="spacer"></div>
    <div>
        <p style="display:inline">本文： {{ $content }}</p>
    </div>

    @if ((request()->routeIs('blog.index')))
        <div style="height: 15px" class="spacer"></div>
        <x-button
            type="button"
            js_class="edit_blog_btn"
            style="padding: 0;"
        >
            <a 
                href="{{ route('blog.edit', $id) }}"
                style="
                    display:block;
                    width: 100%;
                    height: 100%;
                    padding: 8px 16px;
                "
            >編集</a>
        </x-button>

        {{-- 今はajax form action="post"にする--}}
        <x-button
            type="button"
            js_class="delete_blog_btn" 
            value="{{ $id }}"
            style="display: inline-block"
        >削除</x-button>
        <p>id:{{ $id }}</p>

    @else
        <p>ユーザー名：{{ $username }}</p>
    @endif

</div>
