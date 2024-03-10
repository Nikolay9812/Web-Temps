document.addEventListener("DOMContentLoaded", function() {
    const closeBtn = document.querySelector('.card__close-btn');
    const card = document.querySelector('.card');
    const msgBtn = document.querySelector('.msg');
    const msgInput = document.createElement('input');

    msgInput.type = 'text';
    msgInput.placeholder = 'Type your message here';
    msgInput.classList.add('message-input');

    closeBtn.addEventListener('click', function() {
        card.style.display = 'none';
    });

    msgBtn.addEventListener('click', function() {
        if (msgBtn.classList.contains('active')) {
            msgBtn.classList.remove('active');
            msgInput.remove();
        } else {
            msgBtn.classList.add('active');
            card.appendChild(msgInput);
            msgInput.focus();
        }
    });

    msgInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const message = msgInput.value.trim();
            if (message !== '') {
                console.log("Message sent:", message);
                msgInput.value = '';
            }
        }
    });
});