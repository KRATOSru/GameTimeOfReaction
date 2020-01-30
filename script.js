var startTime = new Date().getTime();

var makeShapeVisible = function(){
    document.getElementById("shape").style.display = "block"
    startTime = new Date().getTime();
}

makeShapeVisible();

document.getElementById("shape").onclick = function () {
    var shape = document.getElementById("shape");
    var top = Math.random()*400;
    var left = Math.random()*700;
    shape.style.display = "none";
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    var finishTime = new Date().getTime();
    var reactionTime = (finishTime-startTime) / 1000;
    document.getElementById("reactionTime").innerHTML = reactionTime + " seconds."
    setTimeout(makeShapeVisible,Math.random()*3000);
}