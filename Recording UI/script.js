function showHideDiv(ele) {
    var srcElement = document.getElementById(ele);
    srcElement.style.display = 'none';
    setTimeout(() => {
        srcElement.style.display = "flex";
    }, 3000)
}

function changeCamera() {
    const withoutSlash = document.getElementById('withoutSlash1');
    const withSlash = document.getElementById('withSlash1');
    const hidden = 'hiddenCam';
    const display = 'displayCam';

    if (withoutSlash.classList.contains('hiddenCam')) {
        // img1 is hidden
        // displaying
        withoutSlash.classList.add(display);
        withoutSlash.classList.remove(hidden);
        // hiding
        withSlash.classList.add(hidden);
        withSlash.classList.remove(display);
    } else {
        // img2 is hidden
        // displaying
        withSlash.classList.add(display);
        withSlash.classList.remove(hidden);
        // hiding
        withoutSlash.classList.add(hidden);
        withoutSlash.classList.remove(display);
    }
}

function changeMicrophone() {
    const withoutSlash = document.getElementById('withoutSlash2');
    const withSlash = document.getElementById('withSlash2');
    const hidden = 'hiddenMic';
    const display = 'displayMic';

    if (withoutSlash.classList.contains('hiddenMic')) {
        // img1 is hidden
        // displaying
        withoutSlash.classList.add(display);
        withoutSlash.classList.remove(hidden);
        // hiding
        withSlash.classList.add(hidden);
        withSlash.classList.remove(display);
    } else {
        // img2 is hidden
        // displaying
        withSlash.classList.add(display);
        withSlash.classList.remove(hidden);
        // hiding
        withoutSlash.classList.add(hidden);
        withoutSlash.classList.remove(display);
    }
}

function changeVolume() {
    const withoutSlash = document.getElementById('withoutSlash3');
    const withSlash = document.getElementById('withSlash3');
    const hidden = 'hiddenVol';
    const display = 'displayVol';

    if (withoutSlash.classList.contains('hiddenVol')) {
        // img1 is hidden
        // displaying
        withoutSlash.classList.add(display);
        withoutSlash.classList.remove(hidden);
        // hiding
        withSlash.classList.add(hidden);
        withSlash.classList.remove(display);
    } else {
        // img2 is hidden
        // displaying
        withSlash.classList.add(display);
        withSlash.classList.remove(hidden);
        // hiding
        withoutSlash.classList.add(hidden);
        withoutSlash.classList.remove(display);
    }
}

function changePause() {
    const withoutSlash = document.getElementById('start');
    const withSlash = document.getElementById('pause');
    const hidden = 'hiddenPause';
    const display = 'displayPause';

    if (withoutSlash.classList.contains('hiddenPause')) {
        // img1 is hidden
        // displaying
        withoutSlash.classList.add(display);
        withoutSlash.classList.remove(hidden);
        // hiding
        withSlash.classList.add(hidden);
        withSlash.classList.remove(display);
    } else {
        // img2 is hidden
        // displaying
        withSlash.classList.add(display);
        withSlash.classList.remove(hidden);
        // hiding
        withoutSlash.classList.add(hidden);
        withoutSlash.classList.remove(display);
    }
}