window.addEventListener('scroll', function () {
    var header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

const gallery = document.querySelector('.slider');
const firstImg = gallery.querySelectorAll('img')[0];
arrowIcons = document.querySelectorAll('.gallery-btn .arrow');
const firstImgBox = gallery.querySelector('.imgBox').offsetWidth;
const galleryImg = [...gallery.children]

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 25;

let imgPerView = Math.round(gallery.offsetWidth / firstImgBox)

galleryImg.slice(-imgPerView).reverse().forEach(imgBox => {
    gallery.insertAdjacentHTML('afterbegin', imgBox.outerHTML)
});

galleryImg.slice(0, imgPerView).forEach(imgBox => {
    gallery.insertAdjacentHTML('beforeend', imgBox.outerHTML)
});

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        gallery.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth
    })
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = gallery.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    gallery.classList.add('dragging')
    let positionDif = (e.pageX || e.touches[0].pageX) - prevPageX;
    gallery.scrollLeft = prevScrollLeft - positionDif;
}

const dragStop = () => {
    isDragStart = false;
    gallery.classList.remove('dragging')
}

const infiniteScroll = () => {
    if (gallery.scrollLeft === 0) {
        gallery.classList.add('no-transition')
        gallery.scrollLeft = gallery.scrollWidth - (2 * gallery.offsetWidth)
        gallery.classList.remove('no-transition')
    } else if (Math.ceil(gallery.scrollLeft) === gallery.scrollWidth - gallery.offsetWidth) {
        gallery.classList.add('no-transition')
        gallery.scrollLeft = gallery.offsetWidth
        gallery.classList.remove('no-transition')
    }
}

gallery.addEventListener("mousedown", dragStart);
gallery.addEventListener("touchstart", dragStart);

gallery.addEventListener("mousemove", dragging);
gallery.addEventListener("touchmove", dragging);

gallery.addEventListener("mouseup", dragStop);
gallery.addEventListener("mouseleave", dragStop);
gallery.addEventListener("touchend", dragStop);

gallery.addEventListener("scroll", infiniteScroll)