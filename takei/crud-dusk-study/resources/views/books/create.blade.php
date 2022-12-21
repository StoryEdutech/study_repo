
        <h1>図書の登録</h1>

        <form method="post" action="{{ route('books.create', $book) }}">
            @include('books.form')
            {{-- @method('put') --}}
            <br>
            <button type="submit" id="register">登録する</button>
        </form>
