<form
    class="form-core"
    style="margin-left: 60px"
    method="post"
    action="{{ route('posts.store') }}"
    onSubmit="return checkSubmit(event)"
    id="add_blog_form"
>
    @csrf 

    @if ($errors->any())
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
            <ul>
                @foreach ($errors->all() as $error)
                    <li class="block sm:inline">{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <div class="title-input" style="width: 50%;">
        <label for="add_blog_input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">タイトル</label>
        <input 
            type="text" id="add_blog_input" name="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required
        >
    </div>
    <div class="content-textarea" style="width: 50%;">
        <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">本文</label>
        <textarea 
            id="content" rows="4" name="content"
            class="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
        ></textarea>
    </div>

    <div style="height: 15px" class="spacer"></div>

    <x-button type="submit" id="add_blog_btn">
        投稿
    </x-button>

    <div style="height: 15px" class="spacer"></div>


    <script>
        function checkSubmit(e){
            if(window.confirm('送信してよろしいですか？')){
                return true;
            } else {
                return false;
            }
        }
    </script>

</form>
