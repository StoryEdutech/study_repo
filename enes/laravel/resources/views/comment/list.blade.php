@if( Session::has( 'delete_fb' ))
  {{ __(Session::get( 'delete_fb')) }}
@endif
@each('comment.show',$comments,'comment')
<x-button>
  <a href="/comments/create">
    @lang('追加')
  </a>
</x-button>
