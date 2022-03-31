

prediction1="";


Webcam.set({
    height:350,
    width:350,
    image_format:"png",
    png_quality:100
});
Webcam.attach('#webcamera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
  document.getElementById("snapshot").innerHTML='<img id ="snapimage" src="'+data_uri+'">'  ;    
    });
}
console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bn_kqxjtz/model.json',modelLoaded);

function modelLoaded(){
    console.log("ModelLoaded");
}
function check() {
    img = document.getElementById("snapimage");
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("p1name").innerHTML = result[0].label;
       
        prediction1 = result[0].label;
        
        speak();
        if (results[0].label == "Amazing") {
            document.getElementById("p1emoji").innerHTML = "&#128076;";
        }
        if (results[0].label == "Victory") {
            document.getElementById("p1emoji").innerHTML = "&#9996;";
        }
        if (results[0].label == "Best") {
            document.getElementById("p1emoji").innerHTML = "&#128077;";
        }
        
    }
}

function speak() {
    synth = window.SpeechSynthesis;
    speakdata1 = "The first prediction is " + prediction1;
    utterThis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterThis);
}