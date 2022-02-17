<div>
</div>
  <div stlye="" id="textarea"></div>
  <x-button onclick="send_comment()">
    @lang('投稿')
  </x-button>
  @csrf
</form>
<script src="{{ env('kobetsuba_url') }}/js_includes/react.production.min.js"></script>
<script src="{{ env('kobetsuba_url') }}/js_includes/react-dom.production.min.js"></script>
<script src="{{ env('kobetsuba_url') }}/js_includes/react_inc/basic_input.js"></script>
<script src="{{ env('kobetsuba_url') }}/js_includes/jquery.min.js"></script>
<script>
var prev=`{{ $comment->content??"" }}`;

ReactDOM.render(React.createElement(BasicTextArea,{
  prev:prev,
  input_name:"content"
}),document.getElementById('textarea'));

function send_comment(){
var ep="/comment/{{ $comment->id??'add' }}";
var post={};
post._token='{{ csrf_token() }}';
@if( $replying_to??false )
  post.reply_to="{{ $replying_to->id }}";
@endif
  post.content=$('#textarea textarea').val();
  $.post(ep,post,function(res){window.location.reload();});
}

</script>
