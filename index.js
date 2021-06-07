let x = document.getElementById('input-field');
let hours=document.getElementById('hours');
let minutes=document.querySelector('#minutes');
let seconds =document.querySelector('#seconds');
let totTime,handle;


function reset()
{
hours.innerText = '0';
minutes.innerText = '0';
seconds.innerText = '0';
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
