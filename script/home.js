document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
});
