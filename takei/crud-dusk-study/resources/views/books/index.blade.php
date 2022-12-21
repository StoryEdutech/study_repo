
<h1>図書一覧</h1> <a href="{{ route('books.create') }}">新規作成</a>
 <table>
     <tr>
         <th>ID</th>
         <th>タイトル</th>
         <th>著者</th>
         <th colspan="2"></th>
     </tr>
     @foreach ($books as $book)
         <tr>
             <td>{{ $book->id }}</td>
             <td>{{ $book->title }}</td>
             <td>{{ $book->author }}</td>
             <td><a href="{{ route('books.edit', $book) }}">詳細</a></td>
         </tr>
     @endforeach
 </table>
