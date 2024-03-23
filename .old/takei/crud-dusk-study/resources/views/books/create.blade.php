<body>
        <h1>図書の登録</h1>

        <form id="book_form" method="post" action="{{ route('books.create', $book) }}">
            @include('books.form')
            <br>
            <button type="submit" id="register">登録する</button>
        </form>
</body>
