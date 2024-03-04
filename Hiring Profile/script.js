// Add event listeners to navigation links
var navLinks = document.querySelectorAll("#container__nav a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        var index = parseInt(link.getAttribute("data-index")); // Get section index
        showSection(index); // Show the selected section
    });
});

// Function to show the selected section and update active link
function showSection(sectionIndex) {
    var sections = document.getElementsByClassName("container__section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none"; // Hide all sections
    }
    sections[sectionIndex].style.display = "block"; // Show selected section

    // Update active link
    navLinks.forEach(function (link) {
        link.classList.remove("active"); // Remove active class from all links
    });
    navLinks[sectionIndex].classList.add("active"); // Add active class to selected link
}

// Show the initial section
showSection(1); // Show the first section by default