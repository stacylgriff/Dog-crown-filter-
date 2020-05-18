let video;
let noseX = 0;
let noseY = 0;
let happyDog;

// function for dog image to be inserted 
function preload(){
  happyDog = loadImage('happy doggo.png');
  
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  posenet = ml5.poseNet(video, modelReady);
  posenet.on('pose', DOGGYposes);
  
 
  }

function DOGGYposes(poses){
 //console.log(poses);
  
  // position of filter on face 
  if (poses.length >0){
    noseX = poses[0].pose.keypoints[0].position.x;
    noseY = poses[0].pose.keypoints[0].position.y;
  }
  
 
  
}

function modelReady() {
   //console.log('model ready');
  
  
}

function draw() {
  
  image (video, 0,0);
  
  image(happyDog, (noseX)-145, (noseY)-220, 270, 250);

  
 
}