<x-button>
  <a href="/comment">
    @lang('一覧へ戻る')
  </a>
</x-button>
<br>
@if( Session::has( 'edit_fb' ))
  {{ __(Session::get( 'edit_fb')) }}
@endif
@if( $replying_to??false )
  @include('comment.show',['comment'=>$replying_to])
@endif

<form method="POST" action="/comment/{{ $comment->id??'' }}">
  <x-textarea name="content">{{ $comment->content??"" }}</x-textarea>
  <x-button>
    @lang('投稿')
  </x-button>
  @csrf
  @if( $replying_to??false )
    <input type="hidden" name="reply_to" value="{{ $replying_to->id }}">
  @endif
  @if ($comment->id??false)
    @method('PUT')
  @endif
</form>
