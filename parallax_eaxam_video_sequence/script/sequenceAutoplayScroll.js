var imgNum_scroll = 1;
var maxImgNum_ypos = 86;
var scrollYPos_scroll = 0;
var scroll_num = 0;
var img_scroll = new Image();
var canvas_scroll = document.getElementById('autoplay-screen-scroll');
var ctx_scroll = canvas_scroll.getContext('2d');

img_scroll.src = "images/sequence/crow0.png";

window.addEventListener('scroll', function(e) {
    scrollYPos_scroll = this.window.scrollY;
    if (scrollYPos_scroll > 2200) {
        scroll_num += 0.2;
        scroll_num_math = Math.floor(scroll_num % 86);
        console.log("scroll_num: " + scroll_num_math);
        player_scroll(scroll_num_math);
    }
    
});

function player_scroll(num) {
    img_scroll.src = "./images/sequence/crow" + num + ".png";
}

img_scroll.addEventListener('load', function(e) {
    ctx_scroll.clearRect(0, 0, ctx_scroll.canvas.width, ctx_scroll.canvas.height);
    ctx_scroll.drawImage(img_scroll, 0, 0);
});