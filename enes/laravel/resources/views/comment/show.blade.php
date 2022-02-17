  <div class="flex flex-row">
  <div class="comment_box_mtc" style="width:100%" id="comment_box{{ $comment->id }}" data-comment='{!! $comment !!}' data-tab='{{ $comment->tab }}' data-user='{!! $comment->user !!}'></div>
  <div style="width:100%">
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
  <form method="post" action="/comment/{{ $comment->id }}/delete" class="inline-block">
    <x-button type="submit">
        @lang('削除')
    </x-button>
    @csrf
  </form>
  @endif
  </div>
  </div>
  @if( $for_reply??false )
    @include('comment.reply_box',['comment'=>$replying])
  @endif
  @each('comment.show',$comment->replies->transform(function($a,$i) use ($comment){$a->tab=$comment->tab+1;return $a;}),'comment')
