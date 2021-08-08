let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;
function start(){
 timer = true;
 StopWatch();
}


function stop () {
    timer=false;
}


function reset () {
    timer=false;
     hr = 0;
     min = 0;
     sec = 00;
     count = 0;
     document.getElementById("con").innerHTML="00";
     document.getElementById("sec").innerHTML="00";
     document.getElementById("min").innerHTML="00";
     document.getElementById("hr").innerHTML="00";
}
function StopWatch () {
    if(timer == true){
        count = count + 1;
        document.getElementById("con").innerHTML=count;
        if(count == 100){
            sec=sec+1;
            let ssec=sec;
            if(ssec < 10){
                ssec="0"+ssec;  
            }
            document.getElementById("sec").innerHTML=ssec;
            count=0;
            if(sec == 60){
                min=min+1;
                let mmin=min;
                if(mmin < 10){
                    mmin="0"+mmin;  
                }
                document.getElementById("min").innerHTML=mmin;
                sec=0;
                if(min == 60){
                    hr=hr+1;
                    let hhr=hr;
                    if(hhr < 10){
                        hhr="0"+hhr;  
                    }
                    document.getElementById("hr").innerHTML=hhr;
                     min=0;
                    
                }
            }

        }
        setTimeout("StopWatch()",.100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    }
}
