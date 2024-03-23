import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

function Contact(props){
  return (
    <div>
        あああああああああああいaaい<p>aaaaaa</p>
    </div>
  );
}


export default Contact;

// if (document.getElementById('Contact')) {
  let el=document.getElementById('Contact');
  console.log('処理');
  let props=JSON.parse(el.dataset.props?el.dataset.props:'{}');
  ReactDOM.render(<Contact />, el);
// }
