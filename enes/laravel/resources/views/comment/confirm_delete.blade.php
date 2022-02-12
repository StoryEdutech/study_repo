@if ($already_deleted??FALSE)
  {{ __('見つかりませんでした（すでに消してます？)') }}
@else
<form method="POST" action="/comments/{{ $comment->id??'' }}">
  @lang('こちらのコメントを削除します。よろしいですか')
  <div style="padding:10px; background:#bbb"> {{ $comment->content??"" }}</div>
  <x-button>
    <a href="/comments">
      @lang('戻る')
    </a>
  </x-button>
  <x-button>
    @lang('削除')
  </x-button>

  @csrf
  @method('DELETE')
</form>
@endif
