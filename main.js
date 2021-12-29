Webcam.set({
    width:310,
    height:300, 
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});
camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("results").innerHTML="<img id='capture_image' src='"+data_uri+"' />";
    });
}

console.log("ml5 version: ",ml5.version);

var classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}
function identify_image(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotresult);
                           
}
