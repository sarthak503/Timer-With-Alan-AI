let x = document.getElementById('input-field');
let hours=document.getElementById('hours');
let minutes=document.querySelector('#minutes');
let seconds =document.querySelector('#seconds');
let totTime,handle;
let er;
function isnan()
{
    var x
    x=document.getElementById("input-field").value;
    
    if(x==''){
        er="Input Invalid";
                     
    }
    else{
        er=""
        startTimer();
    }
    document.getElementById("demo").innerHTML = er;
      
}
function changetxt()
{
    er="";
}

function reset()
{
er="";
document.getElementById("demo").innerHTML = er;
hours.innerText = '00';
minutes.innerText = '00';
seconds.innerText = '00';
x.value = "";
clearInterval(handle)
document.getElementById('start').disabled=false;
}
function startTimer()
{

totTime = parseInt(x.value);

handle = setInterval(timer,1000);
document.getElementById('start').disabled=true;

}
function beep() {
    var snd = new Audio(o=(A=new AudioContext()).createOscillator());
    o.connect(A.destination);o.start(0);setTimeout('o.stop(0)',500);  
    snd.play();
}
function timer()
{
formatTime(totTime);
if(totTime<=0){
reset();
beep();
}
else{
totTime--;
}
}
function formatTime(second)
{
    const hh = parseInt(second/3600);
    second = second%3600;
    const mm = parseInt(second/60);
    second = second % 60;
    hours.innerText = hh;
    minutes.innerText = mm;
    seconds.innerText = second;
}
