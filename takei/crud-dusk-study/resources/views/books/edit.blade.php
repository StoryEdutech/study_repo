
<h1>図書の編集</h1>

<form method="post" action="{{ route('books.update', $book) }}">
    @include('books.form')
    @method('put')
    <br>
    <button type="submit" id="register">更新する</button>
</form>
