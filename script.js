var timer = 60;
var score = 0;
function makebubble(){
    var temp = "";
for(var i = 1; i <= 85; i++){
    var num = Math.floor(Math.random()*10);
    temp += `<div class="bubble">${num}</div>`
}

document.querySelector("#pbtm").innerHTML = temp;
}


function incscore(){
    score += 1;
    document.querySelector("#sc").textContent = score;
}
function runTimer(){
    var intver = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector(".timeint").textContent = timer;
        }
        else{
            clearInterval(intver);
            document.querySelector("#pbtm").innerHTML = `<h1 > Game is Over!</h1>`;
        }
    },1000)
}
var a = 0;
function gethit(){
    a = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = a;
}
// runTimer();
makebubble();

runTimer();
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var hitnum = Number(dets.target.textContent);
    if(hitnum === a && timer > 0){
        incscore();
        makebubble();
        gethit();
    }
}
)

