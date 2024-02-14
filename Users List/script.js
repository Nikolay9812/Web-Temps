var sections = document.querySelectorAll('.section');
var users = document.querySelectorAll('.user');

sections.forEach(function (section) {
    section.addEventListener('click', function () {
        var sectionId = this.id;
        toggleSection(sectionId);
    });
});

document.querySelector('.search-bar').addEventListener('input', function () {
    filterUsers(this.value.toUpperCase());
});

function toggleSection(sectionId) {
    sections.forEach(function (section) {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
    filterUsers();
}

function filterUsers(filter = '') {
    users.forEach(function (user) {
        var sectionId = user.getAttribute('data-section');
        var tags = user.querySelector('.tags').innerText.toUpperCase();
        var section = document.getElementById(sectionId);
        var sectionIsActive = section.classList.contains('active');

        if (tags.indexOf(filter) > -1 && sectionIsActive) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    });
}

users.forEach(function (user) {
    user.addEventListener('click', function () {
        users.forEach(function (u) {
            u.classList.remove('active');
        });
        this.classList.add('active');
    });
});