var imgNum = 1;
var maxImgNum = 86;
var img = new Image();
var canvas = document.getElementById('autoplay-screen');
var ctx = canvas.getContext('2d');

playSequence();

img.src = "images/sequence/crow0.png";

function playSequence() {
    var timer = setInterval(function() {
        //console.log("Time Interval");
        
        if (imgNum > maxImgNum) {
            imgNum = 0;
        }
        
        player(imgNum);
        imgNum++;
    }, 30);
}

function player(num) {
    // console.log("image num: " + num);
    img.src = "./images/sequence/crow" + num + ".png";
}

img.addEventListener('load', function(e) {
    // console.log("img load");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
});