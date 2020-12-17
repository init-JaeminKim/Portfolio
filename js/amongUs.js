var canvas = document.getElementById('amongUs');
var ctx_amongUs = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation_amongUs);
var circleX_amongUs = 0;
var circleY_amongUs = canvas.height / 2;
var amplitude_amongUs = 30;
var frequency_amongUs = 15;

var mBall_X = 0;
var mBall_Y = 0;

var rare_amongUs = [];
var middle_amongUs = [];
var front_amongUs = [];


function generateStar_amongUs() {


    for (var i = 0; i < 10; i++) {
        var x = Math.floor(Math.random() * -200);
        var y = Math.floor(Math.random() * 200);

        rare_amongUs.push([x, y]);

    }

    for (var i = 0; i < 9; i++) {
        var x = Math.floor(Math.random() * -200);
        var y = Math.floor(Math.random() * 200);

        middle_amongUs.push([x, y]);
    }

    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * -200);
        var y = Math.floor(Math.random() * 200);

        front_amongUs.push([x, y]);
    }

}

function canvasAnimation_amongUs() {

    drawRare_amongUs();
    drawMiddle_amongUs();
    drawFront_amongUs();

    canvasInterval = requestAnimationFrame(canvasAnimation_amongUs);


}

function drawRare_amongUs() {
    var r_amongUs;
    clearCanvas_amongUs();
    ctx_amongUs.fillStyle = "rgba(255,255,255, 0.5)";
    ctx_amongUs.beginPath();
    for (var i = 0; i < rare_amongUs.length; i++) {
        r_amongUs = (Math.random() * 0.8) + 0.6;
        ctx_amongUs.moveTo(rare_amongUs[i][0], rare_amongUs[i][1]);
        ctx_amongUs.arc(rare_amongUs[i][0] += 0.5, rare_amongUs[i][1], 2, 0, Math.PI * 2, true);
    }
    ctx_amongUs.fill();

}

function drawMiddle_amongUs() {
    var r_amongUs;
    ctx_amongUs.fillStyle = "rgba(255,255,255, 0.7)";
    ctx_amongUs.beginPath();
    for (var i = 0; i < middle_amongUs.length; i++) {
        r_amongUs = (Math.random() * 1) + 0.8;
        ctx_amongUs.moveTo(middle_amongUs[i][0], middle_amongUs[i][1]);
        ctx_amongUs.arc(middle_amongUs[i][0] += 0.7, middle_amongUs[i][1], 2.5, 0, Math.PI * 2, true);
    }
    ctx_amongUs.fill();

}

function drawFront_amongUs() {
    var r_amongUs;
    ctx_amongUs.fillStyle = "rgba(255,255,255, 1)";
    ctx_amongUs.beginPath();
    for (var i = 0; i < front_amongUs.length; i++) {
        r_amongUs = (Math.random() * 3) + 1;
        ctx_amongUs.moveTo(front_amongUs[i][0], front_amongUs[i][1]);
        ctx_amongUs.arc(front_amongUs[i][0] += 1, front_amongUs[i][1], 3, 0, Math.PI * 2, true);
    }
    ctx_amongUs.fill();

    ctx_amongUs.font = "35px Arial";
    ctx_amongUs.fillText("Jaemin is a developer", 330, 100);
}

function clearCanvas_amongUs() {
    ctx_amongUs.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
    generateStar_amongUs()
}, 4000);
drawRare_amongUs();