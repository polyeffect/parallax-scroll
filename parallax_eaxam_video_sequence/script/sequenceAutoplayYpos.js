var imgNum_ypos = 1;
var maxImgNum_ypos = 86;
var scrollYPos = 0;
var img_ypos = new Image();
var canvas_ypos = document.getElementById('autoplay-screen-ypos');
var ctx_ypos = canvas_ypos.getContext('2d');
var isPlay = false;
var timer_ypos;

img_ypos.src = "images/sequence/crow0.png";

window.addEventListener('scroll', function(e) {
    scrollYPos = this.window.scrollY;
    if (scrollYPos > 1300 && isPlay == false) {
        isPlay = true;
        playSequence_ypos();
    } else if (scrollYPos < 1300 && isPlay == true) {
        isPlay = false;
        clearInterval(timer_ypos);
    }
});

function playSequence_ypos() {
    timer_ypos = setInterval(function() {
        if (imgNum_ypos > maxImgNum_ypos) {
            imgNum_ypos = 0;
        }
        
        player_ypos(imgNum_ypos);
        imgNum_ypos++;
    }, 30);
}

function player_ypos(num) {
    img_ypos.src = "./images/sequence/crow" + num + ".png";
}

img_ypos.addEventListener('load', function(e) {
    ctx_ypos.clearRect(0, 0, ctx_ypos.canvas.width, ctx_ypos.canvas.height);
    ctx_ypos.drawImage(img_ypos, 0, 0);
});