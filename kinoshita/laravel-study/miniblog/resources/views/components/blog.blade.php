@props([
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
    <p style="border-bottom: 2px solid black">タイトル：{{ $title }}</p>
    <div style="height: 15px" class="spacer"></div>
    <p>本文：{{ $content }}</p>

    @if ((request()->routeIs('blog.home')))
        <div style="height: 15px" class="spacer"></div>
        <x-button>編集</x-button>
        <x-button>削除</x-button>
    @else
        <p>ユーザー名：{{ $username }}</p>
    @endif

</div>
