<x-app-layout>
  <script>window.user=JSON.parse('{!! auth()->user()->current_child() !!}');</script>
<div id="app" data-props="{{ json_encode(['for_uid'=>$for_uid]) }}"></div>
</x-app-layout>
