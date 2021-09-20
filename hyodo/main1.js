'use strict'

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth()+1;

const firstDate= new Date(year,month-1,1);
const firstDay=firstDate.getDay();//1日の曜日
const lastDate = new Date(year,month,0);
const lastDayCount = lastDate.getDate();

let dayCount = 1;
let createHtml='';

createHtml='<h1>今月のカレンダー</h1>';
createHtml +='<table>'+'<tr>';

const weeks =['日','月','火','水','木','金','土'];
for(let i=0;i<weeks.length;i++){
  createHtml += '<td>'+weeks[i]+'</td>';
}

createHtml+='</tr>';

for (let n=0;n<6;n++){
  createHtml += '<tr>';
    for (let d=0;d<7;d++){
      if (n==0 && d<firstDay){
        createHtml+='<td></td>';
      }else if(dayCount>lastDayCount){
        createHtml+='<td></td>';
      }else{
        createHtml+='<td>' + dayCount + '</td>';
        dayCount++;
      }
    }
  createHtml += '</tr>';
  if(dayCount>lastDayCount){
      break;
   }
}
createHtml += '</table>';

createHtml+='</tr>';

/*

for (let n=0;n<6;n++){
  row ='';
    for (let d=0;d<7;d++){
      if (n==0 && d<firstDay){
        row+='<td></td>';
      }else if(dayCount>lastDayCount){
        row+='<td></td>';
      }else{
        row+='<td>' + dayCount + '</td>';
        dayCount++;
      }
    }
  
  createHtml += '<tr>'+row+'</tr>';
  if(dayCount>lastDayCount){
      break;
   }
}
createHtml += '</table>';
*/

document.querySelector('#calendar').innerHTML = createHtml;




var result = document.getElementById("result");
function edit(elem) {
  result.value = result.value + elem.value;
}
function calc() {
  result.value = new Function("return " + result.value)();
}
