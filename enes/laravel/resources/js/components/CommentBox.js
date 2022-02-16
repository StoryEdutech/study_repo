import React from 'react';
import ReactDOM from 'react-dom';

function CommentBox(props) {
    const { user,content,tab } = props;
    return (
        <div className="container" style={{
          marginLeft:((tab?parseInt(tab):0) * 20).toString()+"px"
        }}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">{ user.name } ( UID:{  user.uid } )</div>
                        <div className="card-body">{content}</div>
                    </div>
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
  props.tab=one.dataset.tab;
  ReactDOM.render(<CommentBox {...props} />, one);
})
}
