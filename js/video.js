video= document.querySelector("#player1");

// Page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
    video.autoplay=false;
    video.loop=false;
});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
    video.play();
    vol=document.querySelector("#slider").value;
    document.querySelector("#volume").innerHTML=vol+"%";
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate-=0.1;
    console.log("Slower video, speed: "+video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate+=0.1;
    console.log("Faster video, speed: "+video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
    if(video.currentTime+10<video.duration){
        video.currentTime+=10;
    }else{
        video.currentTime=0;
    }
    console.log("Skip 15 seconds, location: "+video.currentTime);
});

// Mute
document.querySelector("#mute").addEventListener("click", function() {
    if(video.muted){
        video.muted=false;
        document.querySelector("#mute").innerHTML="Mute";
        console.log("Unmute");
    }else{
        video.muted=true;
        document.querySelector("#mute").innerHTML="Unmute";
        console.log("Mute");
    }
});

// Volume Slider
document.querySelector("#slider").addEventListener("change", function() {
    vol=document.querySelector("#slider").value;
    document.querySelector("#volume").innerHTML=vol+"%";
    video.volume=vol/100;
    console.log("Volume: "+vol+"%");
});

// Styled
document.querySelector("#vintage").addEventListener("click", function() {
    video.className="oldSchool";
    console.log("Old School style");
});

// Original
document.querySelector("#orig").addEventListener("click", function() {
    video.className="";
    console.log("Original style");
});
