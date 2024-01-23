window.addEventListener("load", () => {
    //preloader
    document.querySelector(".js-preloader").classList.add("loaded")
    document.querySelector(".js-preloader .js-bg-item").addEventListener("transitionend", () => {
        document.querySelector(".js-preloader").style.display = "none"
        // INITIALIZE AOS
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out-cubic',
            once: true
        });
    })
})


/* header menu */

function headerMenu() {
    const toggler = document.querySelector(".js-header-toggler")
    const menu = document.querySelector(".js-header-menu")
    const items = document.querySelector("li")

    const menuToggle = () => {
        menu.classList.toggle("open")
        toggler.classList.toggle("active")
    }

    toggler.addEventListener("click", menuToggle)
}

headerMenu()

/* schedule tabs */

function scheduleTabs() {
    const tabs = document.querySelectorAll(".js-schedule-tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            if (tab.classList.contains("active")) {
                return;
            };
            document.querySelector(".js-schedule-tab.active").classList.remove("active");
            tab.classList.add("active");
            const target = tab.getAttribute("data-target");
            document.querySelector(".js-schedule-table.active").classList.remove("active");
            document.querySelector(target).classList.add("active");
        });
    });
};
scheduleTabs();

//splitting

Splitting();

//window popup

var modalBtns = document.querySelectorAll('.popup-info-open')

modalBtns.forEach(function (btn) {
    btn.onclick = function () {
        var modal = btn.getAttribute('data-popup-info')

        document.getElementById(modal).style.display = "block"
    }
})

var closeBtns = document.querySelectorAll('.popup-info-close')

closeBtns.forEach(function (btn) {
    btn.onclick = function () {
        var modal = btn.closest('.popup-info').style.display = 'none'
    }
})

window.onclick = function (e) {
    if (e.target.className === 'popup-info') {
        e.target.style.display = 'none'
    }
}

//form

const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail() {

    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>
    Phone Number: ${phone.value}<br> Messsage: ${message.value}`

    Email.send({
        //SecureToken :"51888373-ffe1-41f1-91a6-8df637da5243",
        //Host: "smtp.elasticemail.com",
        //Username: "zh.ivanov@ivanovtrans.de",
        //Password: "371D16513712F3C53A744570881D2BA7ED11",
        To: 'zh.ivanov@ivanovtrans.de',
        From: "zh.ivanov@ivanovtrans.de",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".input")

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error")
            item.parentElement.classList.add("error")
        }

        if (items[1].value != "") {
            checkEmail()
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error")
                item.parentElement.classList.remove("error")
            }
            else {
                item.classList.add("error")
                item.parentElement.classList.add("error")
            }
        })
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTextEmail = document.querySelector(".error-text.email")

    if (!email.value.match(emailRegex)) {
        email.classList.add("error")
        email.parentElement.classList.add("error")

        if (email.value != "") {
            errorTextEmail.innerText="Enter a valid email address."
        } else {
            errorTextEmail.innerText="Email can't be blank."
        }
    } else {
        email.classList.remove("error")
        email.parentElement.classList.remove("error")
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs()

    if (!fullName.classList.contains("error") &&
        !email.classList.contains("error") &&
        !phone.classList.contains("error") &&
        !subject.classList.contains("error") &&
        !message.classList.contains("error")) {
        sendEmail();

        form.reset()
        return false
    }


})