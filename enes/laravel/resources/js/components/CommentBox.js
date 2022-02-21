import React from 'react';
import ReactDOM from 'react-dom';
import XButton from './XButton.js';
window.React = React;
import TextInput from 'text_input';
import $ from 'jquery';

function CommentBox(props) {
    const { useState } =React;
    const { user,content,tab,id,start_by_editing,can_edit,replying_to,csrf } = props;
    const [content_now,setContent]= useState(content?content:"");
    const [editing,setEditing]= useState(start_by_editing?start_by_editing:false);
    const [isDeleted,setIsDeleted]= useState(false);

    const send_comment = ()=>{
      var ep="/comment/"+(id?id+'/update':'add');
      var post={};
      post._token=csrf;
      post.reply_to=replying_to?replying_to:0;
      post.content=content_now;
      $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
      });
      $.post(ep,post,function(res){setEditing(false);});
    };
    const delete_comment= ()=>{
      var ep="/comment/"+id+"/delete";
      var post={};
      $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
      });
      $.post(ep,post,function(res){setIsDeleted(true);});
    }
    const clicked_edit = (event) => {
      setEditing(true);
    };

    console.log(can_edit && id);
    return (
        <div className="container" style={{
          marginLeft:((tab?parseInt(tab):0) * 20).toString()+"px"
        }}>
            <div className="row justify-content-center" style={isDeleted?{}:{display:"none"}}>
              <div className="col-md-8">
                <div className="card">
                <div className="card-body">
                  削除しました。
                </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center" style={isDeleted?{display:"none"}:{}}>
                <div className="col-md-8">
                    {
                    editing
                    ?
                    <React.Fragment>
                    <TextInput use_textarea={true} prev_val={content_now} input_name="content" onchange_f={(event)=>{setContent(event.target.value);}}/>
                    <XButton onClick={(event)=>{send_comment();}}>
                      投稿
                    </XButton>
                    </React.Fragment>
                    :
                    <div className="card">
                        <div className="card-header">{ user.name } ( UID:{  user.uid } )</div>
                        <div className="card-body">{content_now}</div>
                        {
                          can_edit && id
                          ?
                          <div className="flex flex-row">
                            <XButton onClick={clicked_edit}>
                              編集
                            </XButton>
                            <XButton onClick={delete_comment}>
                              削除
                            </XButton>
                          </div>
                          :null
                        }
                    </div>

                    }
                </div>
            </div>
        </div>
    );
}

export default CommentBox;


if (document.querySelectorAll('.comment_box_mtc')) {
document.querySelectorAll('.comment_box_mtc').forEach((one)=>{
  let props=JSON.parse(one.dataset.comment);
  props.user=JSON.parse(one.dataset.user);
  props.can_edit=one.dataset.can_edit;
  props.tab=one.dataset.tab;
  ReactDOM.render(<CommentBox {...props} />, one);
})
}
