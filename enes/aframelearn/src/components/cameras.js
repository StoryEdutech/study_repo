import React,{useState,useEffect} from 'react';
import {Entity, Scene} from 'aframe-react';

export function CameraWithHUD(props){
  const [displayHud,setDisplayHud] = useState(0);
  console.log(setDisplayHud);
  const onKeypress=(event)=>{
    console.log(displayHud);
    if(event.keyCode==32){
    }
    setDisplayHud(displayHud+1);

  }

  useEffect(()=>{
    window.onkeypress=onKeypress;
  },[]);

  return (
    <Entity primitive="a-camera">
      <Entity primitive="a-cursor"/>
      <Entity primitive="tracked-controls" value={{controller: 0}}/>
      {displayHud%2
      ?
      <Entity primitive="a-plane">
        <Entity text={{
          value:"ここにHudが来ます",color:"red"
        }} position={{x:0,y:0,z:-1}} />
      </Entity>
      :null}
    </Entity>
  );
}
