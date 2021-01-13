if (window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", process, false);
} else {
    console.log("no supported");
}

if(window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", process, false);
  } else {
    console.log("no supported");  
}

function process(event) {
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    document.getElementById("log2").innerHTML = "<ul><li>Alpha : " + alpha + "</li><li>Beta : " + beta + "</li><li>Gamma : " + gamma + "</li></ul>";
    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
    document.getElementById("log").innerHTML = "<ul><li>X : " + x + "</li><li>Y : " + y + "</li><li>Z : " + z + "</li></ul>";
}