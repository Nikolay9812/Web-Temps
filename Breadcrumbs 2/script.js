const links = document.querySelectorAll('li');

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(li => li.classList.remove('active'))
        this.classList.add('active')
    })
})