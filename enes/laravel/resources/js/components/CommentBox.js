import React from 'react';
import ReactDOM from 'react-dom';
import XButton from './XButton.js';
import QuillWithMention from './QuillWithMention.js';
import kobetsuba_script from '../kobetsuba_src';
kobetsuba_script('react_inc/text_input.js');

function CommentBox(props) {
    const { useState } =React;
    const { user,content,tab,id,start_by_editing,reply_to,replies,can_use_actions } = props;
    const [content_now,setContent]= useState(content?content:"");
    const [editing,setEditing]= useState(start_by_editing?start_by_editing:false);
    const [isDeleted,setIsDeleted]= useState(false);
    const [showReply,setShowReply]= useState(false);
    const [id_now,setId]= useState(id?id:false);

    const send_comment = ()=>{
      setShowReply(false);
      var ep="/comment/"+(id_now?id_now+'/update':'add');
      var post={};
      post.reply_to=reply_to?reply_to:0;
      post.content=content_now;
      $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('input[name="_token"]').attr('value')
          }
      });
      $.post(ep,post,function(res){setEditing(false);if(res && res.id){setId(res.id);}});
    };
    const delete_comment= ()=>{
      setShowReply(false);
      var ep="/comment/"+id_now+"/delete";
      var post={};
      $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('input[name="_token"]').attr('value')
          }
      });
      $.post(ep,post,function(res){setIsDeleted(true);});
    }
    const clicked_edit = (event) => {
      setShowReply(false);
      setEditing(true);
    };

    return (
      <React.Fragment>
        <div className="container" style={{
          marginLeft:((tab?parseInt(tab):0) * 20).toString()+"px"
        }} data-id={id_now}>
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
                <div className="card">
                    <div className="card-header">{ user.name } ( UID:{  user.uid } )</div>
                    <div className="card-body">
                    <QuillWithMention prev_val={content_now} readOnly={!editing} input_name="content" onchange_f={setContent} />
                    {
                    editing
                    ?
                    <React.Fragment>
                    {/*
                      <TextInput use_textarea={true} prev_val={content_now} input_name="content" onchange_f={(event)=>{setContent(event.target.value);}}/>
                    */}
                    <XButton onClick={(event)=>{send_comment();}}>
                      投稿
                    </XButton>
                    </React.Fragment>
                    :
                        <div className="flex flex-row">
                        {
                          can_use_actions.indexOf('update')>-1 && id_now
                            ?<XButton onClick={clicked_edit}>
                              編集
                            </XButton>
                            :null
                          }
                          {
                            can_use_actions.indexOf('delete')>-1?
                            <XButton onClick={delete_comment}>
                              削除
                            </XButton>
                            :null
                          }
                          {
                            can_use_actions.indexOf('reply')>-1?
                            <XButton onClick={()=>{setShowReply(true);}}>
                              返信
                            </XButton>
                            :null
                        }
                        </div>
                    }
                </div>
            </div>
        </div>
        </div>
        </div>

        {
        showReply?
          <CommentBox
            start_by_editing={true}
            key={id_now.toString()}
            reply_to={id_now}
            user={window.user}
            tab={tab?(parseInt(tab)+1):1}
            can_use_actions={['reply','update','delete','create']}
          />
          :null
        }
        {replies && replies.length?
          replies.map((one)=>
            <CommentBox
              {...one}
              key={one.id.toString()}
              tab={tab?(parseInt(tab)+1):1}
            />
          )
        :null}
      </React.Fragment>
    );
}




export default CommentBox;


// if (document.querySelectorAll('.comment_box_mtc')) {
// document.querySelectorAll('.comment_box_mtc').forEach((one)=>{
//   let props=JSON.parse(one.dataset.comment);
//   props.user=JSON.parse(one.dataset.user);
//   props.can_edit=one.dataset.can_edit;
//   props.tab=one.dataset.tab;
//   ReactDOM.render(<CommentBox {...props} />, one);
// })
// }
