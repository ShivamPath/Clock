
currentTime= function(){
let a= new Date();
let h=a.getHours();
let m=a.getMinutes();
let s=a.getSeconds();
let d=a.getDate();
let session="AM"

if (h>12){
    session="PM";
}

let time=h+":"+m+":"+s+" "+ session;
document.getElementById("clock").innerHTML=time;

let t=setTimeout(() => {
    currentTime()
    
}, 1000);
}

currentTime()

