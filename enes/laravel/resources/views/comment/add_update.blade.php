<x-button>
  <a href="/comments">
    @lang('一覧へ戻る')
  </a>
</x-button>
<br>
@if( Session::has( 'edit_fb' ))
  {{ __(Session::get( 'edit_fb')) }}
@endif

<form method="POST" action="/comments/{{ $comment->id??'' }}">
  <x-textarea name="content">{{ $comment->content??"" }}</x-textarea>
  <x-button>
    @lang('投稿')
  </x-button>
  @csrf
  @if ($comment->id??false)
    @method('PUT')
  @endif
</form>
