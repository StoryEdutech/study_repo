import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox.js';
import XButton from './XButton.js';

function CommentList(props){
  const { useState,useEffect } =React;
  const { for_uid } =props;
  const [comments,setComments]= useState([]);
  const [done_loading,setDoneLoading]= useState(false);
  const [page,setPage]= useState(1);
  const [lastPage,setLastPage]= useState(1);
  const [new_id,setNewId]= useState(1);
  const [loadingMore,setLoadingMore]= useState(false);


  useEffect(()=>{
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.post('/comment/user/'+(for_uid?for_uid:0),{},(res)=>{
      setComments(res.comment_collection.data?res.comment_collection.data:[]);
      setLastPage(res.comment_collection.last_page);
      setDoneLoading(true);
    });
  },[]);

  const loadMore = () => {
    setLoadingMore(true);
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    var new_page=page+1;
    $.post('/comment/user/'+(for_uid?for_uid:0)+'?page='+new_page,{},(res)=>{
      setComments(comments.concat(res.comment_collection.data?res.comment_collection.data:[]));
      setPage(new_page);
      setLoadingMore(false);
    });
  }


  const addNew = ()=>{
    var new_comments=[...comments];
    new_comments.unshift({
      content:"",
      user:window.user,
      new_id:new_id,
      start_by_editing:true
    });
    setComments(new_comments);
    setNewId(new_id+1);
  }

  return (
    <div>
      {
      [window.user.uid,0].indexOf(for_uid?parseInt(for_uid):0)>-1?
      <XButton onClick={()=>{addNew();}}>
        追加
      </XButton>
      :null
      }

      {comments && comments.length?comments.map((data_one)=>
          <CommentBox
            {...data_one}
            key={(data_one.id?data_one.id:data_one.new_id).toString()}
           />
      ):
        done_loading?
        <div>まだコメントがありません</div>
        :
        <div>読み込み中</div>

    }
      {
        page==lastPage
        ?null
        :<XButton style={{width:"100%"}} onClick={()=>{loadMore();}}>
          {loadingMore?<i className="fas fa-sync fa-spin"></i>:"もっと読み込む"}
        </XButton>
      }
    </div>
  )
}

if (document.getElementById('app')) {
  let el=document.getElementById('app')
  let props=JSON.parse(el.dataset.props);
  ReactDOM.render(<CommentList {...props} />, el);
}
