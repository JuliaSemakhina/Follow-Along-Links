function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
};



const sliderImages = document.querySelectorAll('.slide-in');

function checkScroll(e) {
  sliderImages.forEach(slideImage => {
    //the center of the image
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height/2;
    //the bottom of the image
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isHalfShown = slideInAt > slideImage.offsetTop;
    const inNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && inNotScrolledPast) {
      slideImage.classList.add('active');
    } else {
      slideImage.classList.remove('active');
    }
  })
}

window.addEventListener('scroll', debounce(checkScroll));
