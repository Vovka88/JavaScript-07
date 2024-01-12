const lazyImage = document.querySelectorAll('img[loading="lazy"]');

lazyImage.forEach(element => {
    element.addEventListener('load', onImageLoaded, { once: "true"});
});

function onImageLoaded (e){
    console.log("Зображення завантажилось");
    e.target.classList.add('appear')
}