function changeIcon(from, to) {
    const icon = document.querySelectorAll('#icon')
    for (let i = 0; i < icon.length; i++) {
        icon[i].addEventListener('click', (e) => {
            let iconEl = e.currentTarget.children[0].children[0];
            iconEl.getAttribute('href') === from
                ? iconEl.setAttribute('href', to)
                : iconEl.setAttribute('href', from)
        })
    }
}

changeIcon('#check', '#check-empty')

const cont = document.querySelector('.cont');

cont.addEventListener('click', () => {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
})






