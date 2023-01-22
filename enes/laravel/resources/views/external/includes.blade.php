<script src="{{ env('kobetsuba_url') }}/js_includes/react.production.min.js"></script>
<script src="{{ env('kobetsuba_url') }}/js_includes/react-dom.production.min.js"></script>
<script src="{{ env('kobetsuba_url') }}/js_includes/jquery.min.js"></script>
<script>

window.nickname_and_child_info = {
  1:{ uid: 1, nickname: "インナーサクラ", grade:4 },
  2:{ uid: 2, nickname: "ラクラク", grade:6 }
};

window.url_base="{{ env('APP_URL')??'' }}";
</script>
<script>window.user={{ Illuminate\Support\Js::from(App\Models\ChildUser::find(session("child_id"))) }};</script>
<div id="app" data-props='{"for_uid":{{ request()->get("child_id",0) }}}'></div>
<script src="{{ asset(mix('js/manifest.js')) }}" defer></script>
<script src="{{ asset(mix('js/vendor.js')) }}" defer></script>
<script src="{{ asset(mix('js/app.js')) }}" defer></script>
<link rel="stylesheet" href="{{ asset('css/app.css') }}">
