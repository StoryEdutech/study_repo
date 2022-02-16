<x-app-layout>
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
  @include('comment.show',['comment'=>$replying_to,"for_reply"=>true,'replying'=>$comment ?? ''])
@else
  @include('comment.reply_box',['comment'=>$comment?? ''])
@endif

</x-app-layout>
