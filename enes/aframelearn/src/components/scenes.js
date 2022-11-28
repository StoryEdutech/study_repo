import {Entity, Scene} from 'aframe-react';
import React,{useState} from 'react';
import logo from '../logo.svg';
import { CameraWithHUD } from './cameras.js';

export function VRScene (props){
  const [y,setY]= useState(0);
  const increaseY=()=>{
    console.log("clicked");
    setY(y+1);
  };
    return (
      <Scene>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity light={{type: 'point'}}/>
        <Entity geometry={{primitive: 'plane',grab:true,throw:true}} material={{transparent:true,src:logo}} events={{
          click: increaseY
        }}

         position={{x: 0, y: y, z: -3}}/>
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
        <Entity text={{color:'red',value: 'Hello, WebVR!',width:5}} position={{x: 0, y: 0, z: -3}}/>
      </Scene>
    );
}


export function VRScene2 (props){
  const [y,setY]= useState(0);
  const increaseY=()=>{
    console.log("clicked");
    setY(y+1);
  };
    return (
      <Scene>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity light={{type: 'point'}}/>
        <Entity geometry={{primitive: 'plane',grab:true,throw:true}} material={{transparent:true,src:logo}} events={{
          click: increaseY
        }}
          grab={true}
          throw={true}
         position={{x: 0, y: y, z: -3}}/>
        <CameraWithHUD/>
        <Entity text={{color:'red',value: 'Hello, WebVR!',width:5}} position={{x: 0, y: 0, z: -3}}/>
      </Scene>
    );
}
