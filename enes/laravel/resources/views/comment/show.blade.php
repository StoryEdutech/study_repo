<div style="border: solid 1px">
  {{ $comment->content }}
  <x-button>
    <a href="/comments/{{ $comment->id }}/edit">
      @lang('編集')
    </a>
  </x-button>
  <x-button>
    <a href="/comments/{{ $comment->id }}/delete">
      @lang('削除')
    </a>
  </x-button>
  </form>
</div>
