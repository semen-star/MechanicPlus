document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    window.openImage = function (src) {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        lightboxImg.src = src;
        lightbox.classList.add("show");
    };

    window.closeImage = function () {
        const lightbox = document.getElementById("lightbox");
        lightbox.classList.remove("show");
    };
});
window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img:not(.uniform-image)');
    images.forEach(img => {
        img.classList.add('uniform-image');
    });
});

function toggleDescription(element) {
            var description = element.querySelector('.description');
            if (description.style.display === 'block') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        }
