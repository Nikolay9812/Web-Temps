const toggle = document.querySelector('.toogle')

toggle.onclick = function () {
    const text = document.querySelector('.text')
    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}