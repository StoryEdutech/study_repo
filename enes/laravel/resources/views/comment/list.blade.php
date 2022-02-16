<x-app-layout>
@if( Session::has( 'delete_fb' ))
  {{ __(Session::get( 'delete_fb')) }}
@endif
@each('comment.show',$comment_collection,'comment')
@if($of_self)
<x-button>
  <a href="/comment/create">
    @lang('追加')
  </a>
</x-button>
@endif
</x-app-layout>
