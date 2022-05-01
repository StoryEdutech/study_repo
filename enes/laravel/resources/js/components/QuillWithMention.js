import React, { useState,useEffect,useRef } from "react";
import ReactDOM from 'react-dom';
import ReactQuill, {Quill} from 'react-quill';
import InfoCardArea from './InfoCardArea.js';
import 'react-quill/dist/quill.snow.css';
import 'quill-mention';
import 'quill-mention/dist/quill.mention.min.css';

const parse_user_to_mention_object= (one)=>{
    return {
      id:one.uid,
      value:one.nickname,
      denotationChar:"@",
      ...one
    }
};

let quill_mention_setting={
  modules: {
  mention: {
    allowedChars: /^[^@]*$/,
    mentionDenotationChars: ["@","＠"],
    dataAttributes: ['id', 'value', 'denotationChar', 'link', 'target','disabled'].concat(Object.keys(Object.values(window.nickname_and_child_info)[0])),
    source: function(searchTerm, renderList, mentionChar) {
      let values=Object.values(window.nickname_and_child_info).map((one)=>parse_user_to_mention_object(one));


      if (searchTerm.length === 0) {
        renderList(values, searchTerm);
      } else {
        const matches = [];
        for (let i = 0; i < values.length; i++)
          if (
            ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
          )
            matches.push(values[i]);
        renderList(matches, searchTerm);
      }
    }
  }
}
};



function QuillWithMention(props) {
  const {prev_val,onchange_f,input_name}=props;
  const editorRef = useRef(null);
  const [value, setValue] = useState('');
  const [hovering_info,setHoveringInfo]=useState(false);
  const [hoverTimeout,setHoverTimeout]=useState(false);

  const onHoverMention=(val)=>{
    clearTimeout(hoverTimeout);
    setHoveringInfo(val?val:{});
    setHoverTimeout(setTimeout(()=>{setHoveringInfo({})},5000));
  };

  var settings={... quill_mention_setting};
  settings.modules.toolbar=false;
  var mention_uid_regexp=/(#@[0-9]+#)/;
  var to_mention_uid=(obj)=>"#@"+obj.uid+"#";

  const deserialize=(value)=>{
    var ops=value.split(mention_uid_regexp).filter(i=>i.trim()!="").map((i)=>{
      return {
        insert: i.match(mention_uid_regexp)
          ?{mention:parse_user_to_mention_object(window.nickname_and_child_info[parseInt(i.replace(/[@#]/g,''))])}
          :i
      };
    });
    // var e=document.createElement('div');
    // e.innerHTML=value;
    // e.childNodes.forEach((o)=>{
    //   if(o.nodeName=="JSON"){
    //     ops.push({insert:JSON.parse(o.innerHTML)});
    //   }else{
    //     ops.push({insert:o.outerHTML?o.outerHTML:o.textContent});
    //   }
    // });
    ops.push({ insert: '\n' })
    return ops;
    // editorRef.current.editor.setContents({ops:ops},'api');
  }
  const serialize=(delta)=>{
    return delta.ops.map((i)=>
      typeof i.insert == 'object'?to_mention_uid(i.insert.mention):i.insert
    ).join('');
  }


  useEffect(()=>{
    var delta=editorRef.current.editor.getContents();
    var val_to_set=serialize(delta);
    if(onchange_f){
      onchange_f(val_to_set);
    }
    // $(ReactDOM.findDOMNode(editorRef.current)).find('.mention').click((event) => {event.stopPropagation(); onHoverMention($(event.target).closest('.mention').data('uid'));});
    // $(document).click((event) => {onHoverMention(false)});
  },[value]);

  useEffect(()=>{
    $(window).on('mention-hovered',(event)=>{
      var el=$(event.originalEvent.event.target);
      if(el.closest('.quill').is(ReactDOM.findDOMNode(editorRef.current))){
        var mention=$(el).closest('.mention');
        onHoverMention({uid:mention.data('uid'),posX:mention.position().left});
      }else{
        onHoverMention(false);
      }
    });

    setValue(deserialize(prev_val));
  },[]);


  return (
    <div style={{position:"relative"}}>
      <InfoCardArea {...hovering_info} />
      <ReactQuill ref={editorRef} {...props} theme="snow" value={value} {...settings} onChange={setValue}/>
    </div>
  );
}

export default QuillWithMention;
