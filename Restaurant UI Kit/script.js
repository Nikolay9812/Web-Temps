const dropdownButton = document.querySelector('.arrow');

dropdownButton.addEventListener('click', function () {
    this.classList.toggle('down');
});

const dropdownOptions = document.querySelector('.dropdown');
dropdownButton.addEventListener('click', () => {
    dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
});

const showMore = document.querySelector('.more')
showMore.addEventListener('click', function () {
    var ul = document.getElementById("numbers");
    ul.innerHTML = `<a> 21 </a>`;
})



var header = document.querySelector(".numbers");
var btns = header.getElementsByTagName("a");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}







var headerTime = document.querySelector(".timeChose");
var btnsTime = headerTime.getElementsByClassName("a");
for (var i = 0; i < btnsTime.length; i++) {
    btnsTime[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activeTime");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" activeTime", "");
        }
        this.className += " activeTime";
    });
}