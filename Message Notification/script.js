const notification = document.querySelector('.notification')
const text = document.querySelector('.text')

notification.addEventListener('click', function () {
    text.classList.toggle('active')
})


