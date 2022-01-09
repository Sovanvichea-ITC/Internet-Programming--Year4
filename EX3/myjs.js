var video = document.createElement('video');
var canvas = document.getElementById('viewport');
var canvas2 = document.getElementById('viewport2');
var ctx = canvas.getContext('2d');
var ctx2 = canvas2.getContext('2d');

document.getElementById("btn-text").onclick = function() { myfunction() };
var number = 0;

video.autoplay = true;


function myfunction() {

    if (number == 1) {
        document.getElementById("btn-text").innerHTML = "Start";
        number = 0;

    } else if (number == 0) {

        document.getElementById("btn-text").innerHTML = "Pause";
        number = 1;
        (function loop() {
            if (number == 1) {
                console.log("called");


                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                ctx2.drawImage(video, 0, 0, 220, 250, 0, 0, 200, 250);
                ctx2.drawImage(video, 220, 0, 220, 250, 203, 0, 200, 250);
                ctx2.drawImage(video, 440, 0, 220, 250, 405, 0, 200, 250);

                ctx2.drawImage(video, 0, 250, 220, 250, 0, 253, 200, 250);
                ctx2.drawImage(video, 220, 250, 220, 250, 203, 252, 200, 250);
                ctx2.drawImage(video, 440, 250, 220, 250, 405, 252, 200, 250);



                // (image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                //canvas2.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                setTimeout(loop, 1000 / 30);
            } else {
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
            }
        })();
    }
}

navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then((stream) => {
        video.srcObject = stream
        console.log("test");
    }).catch(err => {})