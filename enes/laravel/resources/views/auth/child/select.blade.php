@foreach ($childs as $child)
  <a href="{{ route('child.select',['id'=>$child->uid]) }}"><div>{{ $child->name }}</div></a>
@endforeach
