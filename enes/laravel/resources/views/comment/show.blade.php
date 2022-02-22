<script src="{{ env('kobetsuba_url') }}/js_includes/react_inc/text_input.js"></script>
<script>window.user=JSON.parse('{!! auth()->user()->current_child() !!}');</script>
<meta name="csrf-token" content="{{ csrf_token() }}">
  <div class="comment_box_mtc" style="width:100%"
    id="comment_box{{ $comment->id ?? 0 }}"
    data-comment='{!! ($for_add??false) ? "{\"start_by_editing\":true}" : $comment ?? "{}" !!}'
    data-tab='{{ $comment->tab ?? 0 }}'
    data-user='{!! ($for_add??false) ? auth()->user()->current_child() : $comment->user !!}'
    @if(($for_add??false)?true:$comment->is_of_self())
      data-can_edit="true"
    @endif
    data-replying_to="{{ $comment->reply_to??0 }}"
    ></div>
@if(!($for_add??false))
  @each('comment.show',$comment->replies->sortByDesc('created_at')->transform(function($a,$i) use ($comment){$a->tab=$comment->tab+1;return $a;}),'comment')
@endif
