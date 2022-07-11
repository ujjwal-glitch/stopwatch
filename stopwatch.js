var sec=document.getElementById("sec");
var min=document.getElementById("min");
var hour=document.getElementById("hour");
var supsec=document.getElementById("supsec");

var seconds=0;
var sup=0;
var minutes=0;
var hours=0;
var t,x,hr,m,s;

/* starts the stopwatch*/

function start()
{
    sup++;
    if(sup/60==1)
    {
        seconds++;
        sup=0;
    if(seconds/60===1)
    {
        seconds=0;
        minutes++;
        if(minutes/60===1)
        {
            hours++;
            minutes=0;
        }
    }
    }
    if(sup>10 || seconds>10 || minutes>10 || hours>10)
    {
    hour.textContent=hours;
    min.textContent=minutes;
    sec.textContent=seconds;
    supsec.textContent=sup;
    }
    if(sup<10)
    {
        supsec.textContent="0"+sup;
    }
    if(seconds<10)
    {
        sec.textContent="0"+seconds;
    }
    if(minutes<10)
    {
        min.textContent="0"+minutes;
    }
    if(hours<10)
    {
        hour.textContent="0"+hours;
    }

    /* checks the settime with stopwatch time and alarms  */

    if(parseInt(hr)===hours && parseInt(m)===minutes && parseInt(s)===seconds)
    {
        alert("Time Finishes "+x);
        clearInterval(t);
        reset();
    }
    
}

function startstopwatch()
{
t=window.setInterval(start,16);
}

// stops the watch

function stop()
{
    clearInterval(t);
}

function setTime()
{
    x=prompt("Enter Alarm time","00:00:00");
    hr=x.substring(0,2);
    m=x.substring(3,5)
    s=x.substring(6,8);
}

// reset the watch

function reset()
{
    seconds=0;
    sup=0;
    minutes=0;
    hours=0;

    hour.textContent="00";
    min.textContent="00";
    sec.textContent="00";
    supsec.textContent="00";

    x="";
    hr="";
    m="";
    s="";

    clearInterval(t);
}