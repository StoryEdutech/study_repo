<x-app-layout>
@if( Session::has( 'delete_fb' ))
  {{ __(Session::get( 'delete_fb')) }}
@endif
@each('comment.show',$comment_collection->sortByDesc('created_at'),'comment')
@if($of_self)
<x-button onclick="$(this).hide();$('.add_wrap').show()">
  @lang('追加')
</x-button>
<div class="add_wrap" style="display:none">
@include('comment.show',['for_add'=>true])
</div>
@endif
</x-app-layout>
