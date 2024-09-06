// script.js

document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            lightboxImg.src = thumbnail.src;
            lightbox.style.display = 'flex';
            // Force layout recalculation to ensure smooth transition
            lightboxImg.offsetHeight; // Trigger reflow
            lightboxImg.classList.add('enlarged');
            lightbox.style.opacity = '1';
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightboxImg.classList.remove('enlarged');
            // Delay hiding the lightbox to complete the zoom-out transition
            setTimeout(() => lightbox.style.display = 'none', 300);
            lightbox.style.opacity = '0';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightboxImg.classList.remove('enlarged');
            setTimeout(() => lightbox.style.display = 'none', 300);
            lightbox.style.opacity = '0';
        }
    });
});
