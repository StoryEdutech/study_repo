<meta name="csrf-token" content="{{ csrf_token() }}">
  <div class="flex flex-row">
  <div class="comment_box_mtc" style="width:100%"
    id="comment_box{{ $comment->id }}"
    data-comment='{!! $comment !!}'
    data-tab='{{ $comment->tab }}'
    data-user='{!! $comment->user !!}'
    @if($comment->is_of_self())
      data-can_edit="true"
    @endif
    data-replying_to="{{ $comment->reply_to??0 }}"
    ></div>
  <div style="width:100%">
  <x-button>
    <a href="/comment/{{ $comment->id }}/reply_to">
      @lang('返信')
    </a>
  </x-button>
  </div>
  </div>
  @if( $for_reply??false )
    @include('comment.reply_box',['comment'=>$replying])
  @endif
  @each('comment.show',$comment->replies->transform(function($a,$i) use ($comment){$a->tab=$comment->tab+1;return $a;}),'comment')
