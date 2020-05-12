console.log('lesson 09')
var oDiv=document.createElement('div');
var h=document.createElement('H1');
function showTime(){
    var d=new Date();
    var tm=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+":"+parseInt(d.getMilliseconds()/100);
    h.innerText=tm;
    console.log(tm)
}

setInterval(showTime,100)
oDiv.innerHTML=`
<hr>
<div contenteditable>

热更新

</div>
`;
document.body.appendChild(h)
document.body.appendChild(oDiv);



