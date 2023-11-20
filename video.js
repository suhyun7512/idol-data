const hoverImage1 = document.getElementById('hover-image1');
const gifImage1 = document.getElementById('gif-image1');

const hoverImage2 = document.getElementById('hover-image2');
const gifImage2 = document.getElementById('gif-image2');

hoverImage1.addEventListener('mouseover', function () {
    gifImage1.style.display = 'block';
    gifImage1.src = gifImage1.src;
});

hoverImage1.addEventListener('mouseout', function () {
    gifImage1.style.display = 'none';
});

hoverImage2.addEventListener('mouseover', function () {
    gifImage2.style.display = 'block';
    gifImage2.src = gifImage2.src; 
});

hoverImage2.addEventListener('mouseout', function () {
    gifImage2.style.display = 'none';
});