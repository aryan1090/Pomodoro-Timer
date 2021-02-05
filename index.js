var mm=1;
var ss=0;
var ssm=1;
var bbm=1;
var flag=4;
var count=1;
setInterval(function(){
    if(flag==1){
        console.log("running in 1\n");
        if(ss==0 && mm==0){
            flag=2;
            mm=bbm-1;
            ss=60;
            var f = document.getElementById("status");
            f.innerHTML = "Break!"
        }
        ss--;
        if(ss==-1){
            mm--;
            ss=59;
        }
        var t = document.getElementById("time");
        if(ss<10){
            ss="0"+ss;
        }
        if(mm<10){
            t.innerHTML = "0"+mm+":"+ss;
        }
        else{
            t.innerHTML = mm+":"+ss;
        }
    }
    if(flag==2){
        console.log("running in 2");
        if(ss==0 && mm==0){
            flag=1;
            mm=ssm;
            ss=0;
            var f = document.getElementById("status");
            f.innerHTML = "Session "+(++count);
        }
        ss--;
        if(ss==-1){
            mm--;
            ss=59;
        }
        var t = document.getElementById("time");
        if(ss<10){
            ss="0"+ss;
        }
        if(mm<10){
            t.innerHTML = "0"+mm+":"+ss;
        }
        else{
            t.innerHTML = mm+":"+ss;
        }
    }

},1000);
function addSession(){
    var t = document.getElementById("sessionvalue");
    var mt = document.getElementById("time");

    ssm++;
    mm++;
    if(mm<10){
    mt.innerHTML="0"+mm+":00";
    }
    else{
        mt.innerHTML = mm+":00";
    }
    t.innerHTML = ssm+" min";
}
function subSession(){
    var t = document.getElementById("sessionvalue");
    var mt = document.getElementById("time");

    if(ssm!=1){
        ssm--;
        mm--;
    }
    if(mm<10){
    mt.innerHTML="0"+mm+":00";
    }
    else{
        mt.innerHTML = mm+":00";
    }
    t.innerHTML = ssm+" min";
}
function addBreak(){
    var t = document.getElementById("breakvalue");
    bbm++;
    t.innerHTML = bbm+" min";
}
function subBreak(){
    var t = document.getElementById("breakvalue");
    if(bbm!=1){
        bbm--;
    }
    t.innerHTML = bbm+" min";
}
function Pause(){
    console.log("Pause pressed");
    flag=flag+3;
    var start = document.getElementById("start");
    start.setAttribute("onclick","Start()");
    start.innerHTML = "Start";
    var reset = document.getElementById("reset");
    reset.removeAttribute("disabled");

}
function Start(){
    flag=flag-3;
    var btn1 = document.getElementsByTagName("button");
    btn1[0].setAttribute("disabled","true");
    btn1[1].setAttribute("disabled","true");
    btn1[2].setAttribute("disabled","true");
    btn1[3].setAttribute("disabled","true");
    var start = document.getElementById("start");
    start.setAttribute("onclick","Pause()");
    start.innerHTML = "Pause";
    var reset = document.getElementById("reset");
    reset.setAttribute("disabled","true");

}

function Reset(){
    console.log("reset clicked");
    mm=1;
    ss=0;
    ssm=1;
    bbm=1;
    flag=4;
    count=1;
    var s = document.getElementById("sessionvalue");
    var mt = document.getElementById("time");
    var b = document.getElementById("breakvalue");
    b.innerHTML = bbm+" min";
    if(mm<10){
    mt.innerHTML="0"+mm+":00";
    }
    else{
        mt.innerHTML = mm+":00";
    }
    s.innerHTML = ssm+" min";
    var btn1 = document.getElementsByTagName("button");
    btn1[0].removeAttribute("disabled");
    btn1[1].removeAttribute("disabled");
    btn1[2].removeAttribute("disabled");
    btn1[3].removeAttribute("disabled");
    var f = document.getElementById("status");
    f.innerHTML = "Session "+count;

}