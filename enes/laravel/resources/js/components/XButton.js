import React from 'react';

function XButton(props){
  const {children,...other}=props;
  return (<button
    {...other}
    className="items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest ring-gray-300"
  >
    {children}
  </button>);
}

export default XButton;
