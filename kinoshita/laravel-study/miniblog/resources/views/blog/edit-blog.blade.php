<x-app-layout>
    <div
    class="blog-core" 
    style="
        background-color: lightgray;
        border-radius: 5px;
        margin: 20px 0;
        padding: 20px;
    "
    >
        <form
            method="POST"
            action="{{ route('blog.update', $req_post['id']) }}"
        >
            @csrf
            @method('put')
            <div style="border-bottom: 2px solid black">
                <p style="display:inline">タイトル：</p>
                <input
                    style="
                        width: 80%;
                        background-color:lightgray;
                    "
                    value="{{ $req_post['title'] }}"
                    name="blog-title"
                />
            </div>
            <div style="height: 15px" class="spacer"></div>
            <div>
                <p style="display:block">本文： </p>
                <textarea
                    type="text"
                    name="blog-content"
                    style="
                        display:block;
                        width: 80%;
                        margin-rgiht: auto;
                        text-align: left;
                        background-color:lightgray;                        
                    "
                    rows="4"
                >{{ $req_post['content'] }}</textarea>
            </div>
            <div style="height: 15px" class="spacer"></div>
            <x-button
                type="submit"
            >
                保存
            </x-button>
        </form>
    </div>
</x-app-layout>