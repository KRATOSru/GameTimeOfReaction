var startTime = new Date().getTime();

var makeShapeVisible = function(){
    var shape = document.getElementById("shape");
    var top = Math.random()*400;
    var left = Math.random()*700;
    var width = Math.random()*200 + 50;
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.width = width + "px";
    
    if (Math.random()<0.3) {
        shape.style.borderRadius = "50%";
        shape.style.backgroundColor = "green";
    }else if (Math.random() >= 0.3 && Math.random() <= 0.7){
        shape.style.borderRadius = "0"
        shape.style.backgroundColor = "green";
    }else if (Math.random() > 0.7) {
        shape.style.borderRadius = "0"
        shape.style.left = "0";
        shape.style.width = "0";
        shape.style.borderLeft = "50px solid transparent";
        shape.style.borderRight = "50px solid transparent";
        shape.style.borderBottom = "100px solid green";
        shape.style.backgroundColor = "transparent";
    }

    shape.style.display = "block"
    startTime = new Date().getTime();
}

setTimeout(makeShapeVisible,Math.random()*2000);

document.getElementById("shape").onclick = function () {
    var shape = document.getElementById("shape");
    shape.style.display = "none";
    var finishTime = new Date().getTime();
    var reactionTime = (finishTime-startTime) / 1000;
    document.getElementById("reactionTime").innerHTML = reactionTime + " seconds."
    setTimeout(makeShapeVisible,Math.random()*3000);
}