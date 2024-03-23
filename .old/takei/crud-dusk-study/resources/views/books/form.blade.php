
@csrf
タイトル: <input type="text" name="title" value="{{ old('title', optional($book)->title) }}">
@error('title')
    <br>
    {{ $message }}
@enderror
<br>
著者: <input type="text" name="author" value="{{ old('author', optional($book)->author) }}">
@error('author')
    <br>
    {{ $message }}
@enderror
