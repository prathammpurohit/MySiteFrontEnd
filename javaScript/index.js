
let parent=document.querySelector("#AnswerNavBar");
let parentN=document.querySelector('#paraAns')
let child=document.createElement('p');
child.className="answers";
child.classList.add("paraNavBar");
let color=document.body.style.backgroundColor="white";
let paraNav=document.querySelectorAll(".paraNavBar");

let loader = document.getElementById('PreLoader');
    window.addEventListener("load", function () {
        loader.style.display = "none";
});


function playQ4A() {
    let playA= document.getElementById("audioPlayer");
    playA.scroll;
    if(playA.paused)
    playA.play();
    child.innerHTML="Playing";
    parentN.innerHTML="An audio player has been generated at the home page. Use it to navigate music."
    parent.appendChild(child);
}
function playQ4() {
    let playA= document.getElementById("audioPlayer");
    let MusicPlayer=document.querySelector('#MusicPlayer');
    MusicPlayer.style.display="block";
    playA.scroll;
    if(playA.paused)
    playA.play();
}
function pauseQ4A() {
    let playA= document.getElementById("audioPlayer");
    playA.scroll;
    if(!playA.paused)
    playA.pause();
    child.innerHTML="Paused";
    parentN.innerHTML="An audio player has been generated at the home page. Use it to navigate music."
    parent.appendChild(child);
}

function hideMusicPlayer(){
    let MusicPlayer=document.querySelector('#MusicPlayer');
    MusicPlayer.style.display="none";
    pauseQ4A();
    let audio=document.querySelector("#audioPlayer");
    console.log(audio);
    audio.currentTime=0;
    child.innerHTML="Terminated";
    parentN.innerHTML="Restart Audio Player by taping the same option";
    parent.appendChild(child);
}

function ansChild1(){
    if(document.body.style.backgroundColor =="white"){
    document.body.style.backgroundColor = "black";
    document.querySelector("#NavBar").style.backgroundColor="#0d0b0b";
    document.querySelector('.btn2').style.backgroundColor="#6da4d6";
    child.innerHTML="Changed to Dark Theme";
    }
    else{
    document.body.style.backgroundColor = "white";
    document.querySelector("#NavBar").style.backgroundColor="white";
    document.querySelector('.btn2').style.backgroundColor="rgb(225 152 225)";
    child.innerHTML="Changed to Light Theme";
    }
    parentN.innerHTML="Alright.";
    parent.appendChild(child);
}

function ansChild2(){
    child.innerHTML="Yes! He is open to work. ";
    parentN.innerHTML="Ofcourse!";
    parent.appendChild(child);
}

function ansChild3(){
    child.innerHTML=`'i' to activate me<br>'q' to exit<br>'t' to change theme
                     <br>'m' to play music<br>'p' to pause music<br>'s' to terminate music`;
    parentN.innerHTML="I will add actual Linux commands sooner :)<br>Press";
    parent.appendChild(child);
}

function ansChild4(){
    child.innerHTML="Playing";
    playQ4();
    parentN.innerHTML="An audio player has been generated at the home page. Use it to navigate music."
    parent.appendChild(child);
}

function ansChild5(){
    child.innerHTML="Thanks for reaching out ";
    parentN.innerHTML="Greetings to you!";
    parent.appendChild(child);
}

let nav=document.getElementById('NavBar');
nav.style.display="none";
function toggleNav(){
    if(nav.style.display=="none")
    nav.style.display="block";
    else
    nav.style.display="none";
    parent.removeChild(child);
    parentN.innerHTML="So,";
}

window.addEventListener('keydown', function (e) {
    
    if(e.key=="i"){
        let nav=document.getElementById('NavBar');
        if(nav.style.display=="none")
        nav.style.display="block";
    }

    if(e.key=="q"){
        let nav=document.getElementById('NavBar');
        if(nav.style.display=="block")
        nav.style.display="none";
    }

    if(e.key=="t"){
        ansChild1();
    }

    if(e.key=="m")
    playQ4();
    if(e.key=="p")
    pauseQ4A();
    if(e.key=="s")
    hideMusicPlayer();
}, false);;

