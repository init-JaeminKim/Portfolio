var canvas = document.getElementById('amongUs');
var ctx_amongUS = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation_amongUS);

var canvas_voted = document.getElementById('voted');
var ctx_voted = canvas_voted.getContext('2d');

var rare_amongUS = [];
var middle_amongUS = [];
var front_amongUS = [];

var imposterX_amongUS = -300;
var imposterY_amongUS = canvas_voted.height / 2;
var image_amongUS = document.getElementById('imposter')


function generateStar_amongUS() {


    for (var i = 0; i < 10; i++) {
        var x = Math.floor(Math.random() * -200);
        var y = Math.floor(Math.random() * 200);

        rare_amongUS.push([x, y]);

    }

    for (var i = 0; i < 9; i++) {
        var x = Math.floor(Math.random() * -200);
        var y = Math.floor(Math.random() * 200);

        middle_amongUS.push([x, y]);
    }

    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * -200);
        var y = Math.floor(Math.random() * 200);

        front_amongUS.push([x, y]);
    }

}

function canvasAnimation_amongUS() {


    drawRare_amongUS();
    drawMiddle_amongUS();
    drawFront_amongUS();

    canvasInterval = requestAnimationFrame(canvasAnimation_amongUS);


}

function drawRare_amongUS() {
    var r_amongUS;
    clearCanvas_amongUS();
    ctx_amongUS.fillStyle = "rgba(255,255,255, 0.5)";
    ctx_amongUS.beginPath();
    for (var i = 0; i < rare_amongUS.length; i++) {
        r_amongUS = (Math.random() * 0.8) + 0.6;
        ctx_amongUS.moveTo(rare_amongUS[i][0], rare_amongUS[i][1]);
        ctx_amongUS.arc(rare_amongUS[i][0] += 0.5, rare_amongUS[i][1], 2, 0, Math.PI * 2, true);
    }
    ctx_amongUS.fill();

}

function drawMiddle_amongUS() {
    var r_amongUS;
    ctx_amongUS.fillStyle = "rgba(255,255,255, 0.7)";
    ctx_amongUS.beginPath();
    for (var i = 0; i < middle_amongUS.length; i++) {
        r_amongUS = (Math.random() * 1) + 0.8;
        ctx_amongUS.moveTo(middle_amongUS[i][0], middle_amongUS[i][1]);
        ctx_amongUS.arc(middle_amongUS[i][0] += 0.7, middle_amongUS[i][1], 2.5, 0, Math.PI * 2, true);
    }
    ctx_amongUS.fill();

}

function drawFront_amongUS() {
    var r_amongUS;
    ctx_amongUS.fillStyle = "rgba(255,255,255, 1)";
    ctx_amongUS.beginPath();
    for (var i = 0; i < front_amongUS.length; i++) {
        r_amongUS = (Math.random() * 3) + 1;
        ctx_amongUS.moveTo(front_amongUS[i][0], front_amongUS[i][1]);
        ctx_amongUS.arc(front_amongUS[i][0] += 1, front_amongUS[i][1], 3, 0, Math.PI * 2, true);
    }
    ctx_amongUS.fill();

    ctx_amongUS.font = "35px Arial";
    ctx_amongUS.fillText("Jaemin is a developer", 330, 100);


    ctx_amongUS.drawImage(image_amongUS, imposterX_amongUS, imposterY_amongUS / 2, 70, 70)

    if (imposterX_amongUS > canvas.width) {
        imposterX_amongUS = -70;
    }

    imposterX_amongUS += 0.85;
    imposterY_amongUS = canvas.height / 2 + 30 * Math.cos(imposterX_amongUS / 30);



}

function clearCanvas_amongUS() {
    ctx_amongUS.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
    generateStar_amongUS()
}, 4000);

drawRare_amongUS();