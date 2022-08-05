function start() {

}
function setup() {
    canvas = createCanvas(460,460);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
}
function draw() {
image(video,0,0,460,460);
objectDetector.detect(video,gotResult);
}
function modelLoaded() {
    console.log("cocossd is loaded");
}
function gotResult(error,results) {
    if (error) {
        console.log("Error");
    }else {
        console.log(results);
    }
}