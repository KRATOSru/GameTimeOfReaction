var startTime = new Date().getTime();

document.getElementById("shape").onclick = function () {
    var finishTime = new Date().getTime();
    document.getElementById("shape").style.display = "none"
    var reactionTime = (finishTime-startTime) / 1000;
    document.getElementById("reactionTime").innerHTML = reactionTime + " seconds."
}