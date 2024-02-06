document.querySelector('.themes').oninput = () => {
    document.querySelector('.currTheme').innerText = document.querySelector('.themes').value
}