// Get references to the buttons
var womanButton = document.getElementById("woman-button");
var menButton = document.getElementById("men-button");
var kidsButton = document.getElementById("kids-button");

// Get references to the sections
var womanSection = document.getElementById("woman-section");
var womanSectionTitleContainer = document.getElementById("woman-section-titleContainer");
var womanSectionSelectionContainer = document.getElementById("woman-section-selectionContainer");
var womanSectionPromotionContainer = document.getElementById("woman-section-promotionContainer");
var womanSectionPaymentContainer = document.getElementById("woman-section-paymentContainer");
var menSection = document.getElementById("men-section");
var kidsSection = document.getElementById("kids-section");

// Function to show a specific section
function showSection(section) {
    // Hide all sections
    womanSection.classList.remove("active");
    womanSectionTitleContainer.classList.remove("active");
    womanSectionSelectionContainer.classList.remove("active");
    womanSectionPromotionContainer.classList.remove("active");
    womanSectionPaymentContainer.classList.remove("active");
    menSection.classList.remove("active");
    kidsSection.classList.remove("active");

    // Show the selected section
    section.classList.add("active");

    // Change background color based on the selected section
    if (section.id === "woman-section") {
        document.body.style.background = "linear-gradient(135deg, #f3e7e7, #fc9d9d)";
    } else if (section.id === "men-section") {
        document.body.style.background = "linear-gradient(135deg, #a1c4fd, #c2e9fb)";
    } else if (section.id === "kids-section") {
        document.body.style.background = "linear-gradient(135deg, #f1c40f, #f9e98d)";
    }
}

// Event listeners for button clicks
womanButton.addEventListener("click", function () {
    showSection(womanSection);
    womanSectionTitleContainer.classList.add("active");
    womanSectionSelectionContainer.classList.add("active");
    womanSectionPromotionContainer.classList.add("active");
    womanSectionPaymentContainer.classList.add("active");
    womanButton.classList.add("active");
    menButton.classList.remove("active");
    kidsButton.classList.remove("active");
});

menButton.addEventListener("click", function () {
    showSection(menSection);
    womanSectionTitleContainer.classList.remove("active");
    womanSectionSelectionContainer.classList.remove("active");
    womanSectionPromotionContainer.classList.remove("active");
    womanSectionPaymentContainer.classList.remove("active");
    womanButton.classList.remove("active");
    menButton.classList.add("active");
    kidsButton.classList.remove("active");
});

kidsButton.addEventListener("click", function () {
    showSection(kidsSection);
    womanSectionTitleContainer.classList.remove("active");
    womanSectionSelectionContainer.classList.remove("active");
    womanSectionPromotionContainer.classList.remove("active");
    womanSectionPaymentContainer.classList.remove("active");
    womanButton.classList.remove("active");
    menButton.classList.remove("active");
    kidsButton.classList.add("active");
});

// Woman Gallery
var womanGallery = document.querySelector('#woman-section .gallery');
var womanImages = document.querySelectorAll('#woman-section .gallery img');
var womanDotsContainer = document.getElementById('woman-dots');
var womanDots = [];

// Create dots for woman gallery
for (var i = 0; i < womanImages.length; i++) {
    var dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) {
        dot.classList.add('active');
    }
    dot.setAttribute('data-index', i);
    dot.onclick = function () {
        var index = parseInt(this.getAttribute('data-index'));
        showImage(womanGallery, womanImages, womanDots, index);
    };
    womanDots.push(dot);
    womanDotsContainer.appendChild(dot);
}

function showImage(gallery, images, dots, index) {
    gallery.style.transform = 'translateX(-' + index * 350 + 'px)';
    for (var i = 0; i < images.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[index].classList.add('active');
}

// Men Gallery
var menGallery = document.querySelector('#men-section .gallery');
var menImages = document.querySelectorAll('#men-section .gallery img');
var menDotsContainer = document.getElementById('men-dots');
var menDots = [];

// Create dots for men gallery
for (var i = 0; i < menImages.length; i++) {
    var dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) {
        dot.classList.add('active');
    }
    dot.setAttribute('data-index', i);
    dot.onclick = function () {
        var index = parseInt(this.getAttribute('data-index'));
        showImage(menGallery, menImages, menDots, index);
    };
    menDots.push(dot);
    menDotsContainer.appendChild(dot);
}

function showImage(gallery, images, dots, index) {
    gallery.style.transform = 'translateX(-' + index * 350 + 'px)';
    for (var i = 0; i < images.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[index].classList.add('active');
}

// Kids Gallery
var kidsGallery = document.querySelector('#kids-section .gallery');
var kidsImages = document.querySelectorAll('#kids-section .gallery img');
var kidsDotsContainer = document.getElementById('kids-dots');
var kidsDots = [];

// Create dots for kids gallery
for (var i = 0; i < kidsImages.length; i++) {
    var dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) {
        dot.classList.add('active');
    }
    dot.setAttribute('data-index', i);
    dot.onclick = function () {
        var index = parseInt(this.getAttribute('data-index'));
        showImage(kidsGallery, kidsImages, kidsDots, index);
    };
    kidsDots.push(dot);
    kidsDotsContainer.appendChild(dot);
}

function showImage(gallery, images, dots, index) {
    gallery.style.transform = 'translateX(-' + index * 350 + 'px)';
    for (var i = 0; i < images.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[index].classList.add('active');
}