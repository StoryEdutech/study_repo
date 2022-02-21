<div>
</div>
  <div stlye="" id="textarea"></div>
  <x-button onclick="send_comment()">
    @lang('投稿')
  </x-button>
  @csrf
</form>
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
