@props([
    'post' => NULL,
    'can_edit' => false,
    'show_comment_btn' => false 
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
        <p style="display:inline">タイトル：{{ $post->title }}</p>
    </div>
    <div style="height: 15px" class="spacer"></div>
    <div>
        <p style="display:inline">本文： {{ $post->content }}</p>
    </div>

    @if ($can_edit ?? false)
        <div style="height: 15px" class="spacer"></div>

        <div style="display: inline;">
            <x-button
                type="button"
                js_class="edit_blog_btn"
                style="padding: 0;"
            >
                <a 
                    href="{{ route('posts.edit', $post->id) }}"
                    style="
                        display:block;
                        width: 100%;
                        height: 100%;
                        padding: 8px 16px;
                    "
                >編集</a>
            </x-button>
        </div>

        <form
            style="display: inline;"
            method="post"
            onsubmit="return handleSubmit()"
            action="{{ route('posts.destroy', $post->id) }}"
        >
            @csrf
            @method('delete')
            <x-button
                type="submit"
                js_class="delete_blog_btn" 
            >削除</x-button>
        </form>

        <script>
            function handleSubmit(){
                if(!confirm('この投稿を本当に削除しますか？')){
                    return false
                }
            }
        </script>

    @else
        <p>ユーザー名：{{ $post->user->name }}</p>
    @endif

    @if(env("APP_ENV") == "local")
        <div style="background-color: rgb(184, 255, 184); width: 200px;">
            <p>ユーザーid: {{ $post->user->id }}</p>
            <p>投稿id:{{ $post->id }}</p>
        </div>
    @endif

    @if($show_comment_btn ?? false)
        <x-button
            type="button"
            style="padding: 0;"
        >
            <a 
                href="{{ route('posts.show', $post->id) }}"
                style="
                    display:block;
                    width: 100%;
                    height: 100%;
                    padding: 8px 16px;
                "
            >コメントする</a>
        </x-button>
    @endif

</div>
