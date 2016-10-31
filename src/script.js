function showFullDate() {
    var body = document.getElementsByTagName("BODY")[0];
    var interval = setInterval(function () {
        var aTag = body.getElementsByTagName("a")[0];
        console.log(aTag, aTag.style.zIndex, aTag.style.opacity, typeof aTag.style.zIndex, typeof aTag.style.opacity);
        if (aTag.style.zIndex === "2147483647" && aTag.style.opacity === "0") {
            console.log('aaaa');
            aTag.remove();
            clearInterval(interval);
        }
    }, 50);
}

document.domContentLoaded = showFullDate();
