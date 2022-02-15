<div style="border: solid 1px;
  margin-left: {{ ($comment->tab??0) * 20 }}px
">
  {{ $comment->content }}
  <div style="float:right">投稿者:{{ $comment->user->name }} ( UID:{{ $comment->user->uid }} )</div>
  <x-button>
    <a href="/comment/{{ $comment->id }}/reply_to">
      @lang('返信')
    </a>
  </x-button>
  @if( $comment->is_of_self() )
  <x-button>
    <a href="/comment/{{ $comment->id }}/edit">
      @lang('編集')
    </a>
  </x-button>
  <x-button>
    <a href="/comment/{{ $comment->id }}/delete">
      @lang('削除')
    </a>
  </x-button>
  @endif
  @each('comment.show',$comment->replies->transform(function($a,$i) use ($comment){$a->tab=$comment->tab+1;return $a;}),'comment')
</div>
