import React from 'react';
import ReactDOM from 'react-dom';

function InfoCardArea(props){
  const {uid,posX,posY}=props;
  const user=window.nickname_and_child_info[uid];
  return (uid && user?
    <div style={{left:posX}} className="card InfoCardArea">
        <div className="card-body">
          { user.nickname }
          <br/>
          {user.grade}年生
        </div>
    </div>:null);
}

export default InfoCardArea;
