<x-app-layout>

    <div class="wrapper blog">
        <x-blog
            :post="$post"
        />
    </div>

    <hr />

    <div class="add-comment-form-wrapper">
        <form
            method="post"
            action="{{ route('comment.store') }}"
        >
            @csrf
            <div>
                <textarea
                    placeholder="コメント"
                    id="comment-content" rows="4" name="content"
                    class="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                ></textarea>
            </div>
            <input type="hidden" value="{{ $post->id }}" name="post_id" />
            <x-button type="submit">コメントを投稿する</x-button>
        </form>
    </div>

    <div class="comments-list">
        <h2>コメント一覧</h2>


        @foreach ($comments as $comment)
            <div
                class="comment-wrapper"
                style="background-color: rgb(218, 241, 248); margin: 20px auto; width: 90%; "
            >
                <p style="border-bottom: 1px solid gray;">{{ $comment->user->name }}</p>
                <p>{{ $comment->content }}</p>

                @if(env("APP_ENV") == "local")
                    <div style="background-color: rgb(184, 255, 184); width: 200px;">
                        <p>コメントid:{{ $comment->id }}</p>
                        <p>コメントに紐づく投稿id: {{ $post->id }}</p>
                        <p>コメントしたユーザー{{ $comment->user->name }}</p>
                    </div>
                @endif

            </div>
        @endforeach
    </div>

</x-app-layout>