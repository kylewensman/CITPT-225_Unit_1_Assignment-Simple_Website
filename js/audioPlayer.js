// Credit to YouTube.com/MicroTechTutorials
// https://youtu.be/vtZCMTtP-0Y
audioPlayer(); 
function audioPlayer(){
    //https://stackoverflow.com/questions/20286541/html-embed-autoplay-false-but-still-plays-automatically
    var vid = document.getElementById("audioPlayer"); //stackoverflow
    vid.autoplay = false; //stackoverflow
    vid.load(); //stackoverflow
    $(".playlist").click(function(e){
       e.preventDefault(); 
       $("#audioPlayer")[0].src = this;
       $("#audioPlayer")[0].play();
    });
}