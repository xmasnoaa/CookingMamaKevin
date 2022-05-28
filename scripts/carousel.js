var index = 0;
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");

showImage(index);

function showImage(i) {
  index += i;

  var images = document.getElementsByClassName("image");

  var dots = document.getElementsByClassName("dot");

  //hiding images to block them from displaying everytime user presses on button

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  // similar to the one used above, but making the other dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  //if users in last image and clicks on next button, sends back to the beginning
  if (index > images.length - 1) index = 0;

  //if user is in first image and clicks on previous button, sends back to last image
  if (index < 0) index = images.length - 1;

  // displaying image that needs to be displayed onscreen

  images[index].style.display = "block";
  dots[index].className += " active";
}

nextButton.addEventListener("click", () => {
  showImage(1);
});
prevButton.addEventListener("click", () => {
  showImage(-1);
});
