document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");
    var modal = document.getElementById("myModal");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        modal.style.display = "block";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
