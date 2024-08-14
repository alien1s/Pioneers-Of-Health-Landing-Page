document.querySelectorAll(".slider").forEach((sliderElement) => {
  const sliderWrapper = sliderElement.querySelector(".slider-wrapper");
  const albumImgs = sliderWrapper.querySelectorAll(".album-imgs");
  const prevButton = sliderElement.querySelector(".prev");
  const nextButton = sliderElement.querySelector(".next");

  let currentIndex = 0;

  // Ensure the wrapper has the correct width
  sliderWrapper.style.width = `${albumImgs.length * 100}%`;

  // Set each image container to be the width of the slider (100% / number of images)
  albumImgs.forEach((img) => {
    img.style.width = `${100 / albumImgs.length}%`;
  });

  function showSlide(index) {
    const totalSlides = albumImgs.length;
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  // Optionally, you can add an automatic slide change every few seconds
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000); // Change slide every 5 seconds
});
