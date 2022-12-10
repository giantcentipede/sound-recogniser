function start_classification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/euy4DYdsI/model.json',modelReady);


}

function modelReady() {
    classifier.classify(gotResults);
    
}
