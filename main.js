song = "";
wlx = 0;
wrx = 0;
wly = 0;
wrx = 0;

function preload()
{
    song = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
    image(video,0,0,200,200);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded()
{
    console.log("Modle loaded");
}
function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
       
        wrx = results[0].pose.rightWrist.x;
        wly = results[0].pose.leftWrist.y;
        wlx = results[0].pose.leftWrist.x;
        wry = results[0].pose.rightWrist.y;
        console.log("X cordinets of leftwrist =" + wlx + "Y cordinets of leftwrist =" + wly );
        console.log("X cordinets of rightwrist =" + wrx + "Y cordinets of rightwrist =" + wry);
    }
    
}
