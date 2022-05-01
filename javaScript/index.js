let loader = document.getElementById('PreLoader');
    window.addEventListener("load", function () {
        loader.style.display = "none";
});
function hide(){
    let unspan=document.querySelector('.unspan');
    unspan.style.display="none";
}

function toggleNav(){
    let nav=document.getElementById('NavBar');
    if(nav.style.display=="none")
    nav.style.display="block";
    else
    nav.style.display="none";
}
function onQ1(){
    let a1=document.getElementById('Q1');
    a1.style.display="block";
}
function offQ1(){
    let a1=document.getElementById('Q1');
    if(a1.style.display=="block")
    a1.style.display="none";
}
function onQ2(){
    let a2=document.getElementById('Q2');
    a2.style.display="block";
}
function offQ2(){
    let a2=document.getElementById('Q2');
    if(a2.style.display=="block")
    a2.style.display="none";
}
function onQ3(){
    let a3=document.getElementById('Q3');
    a3.style.display="block";
}
function offQ3(){
    let a3=document.getElementById('Q3');
    if(a3.style.display=="block")
    a3.style.display="none";
}
function playQ4() {
    let playA= document.getElementById("audioPlayer");
    playA.scroll;
    if(playA.paused)
    playA.play();
}
function pauseQ4() {
    let playA= document.getElementById("audioPlayer");
    playA.scroll;
    if(!playA.paused)
    playA.pause();
}
