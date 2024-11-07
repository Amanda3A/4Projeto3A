let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

images.forEach((img, index) => {
    img.style.display = 'none';
});

images[currentImageIndex].style.display = 'block';

function showNextImage() {
    images[currentImageIndex].style.display = 'none'; 
    
    currentImageIndex = (currentImageIndex + 1) % totalImages; 
    
    images[currentImageIndex].style.display = 'block'; 
}

setInterval(showNextImage, 2000);