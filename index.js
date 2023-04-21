// Select all images on the page
const images = document.querySelectorAll("img");
// Add a click event listener to each image
images.forEach((img) => {
    img.style.filter = "blur(10px)";
    img.addEventListener("click", () => {
        //si la img tiene filtro
        if (img.style.filter !== "none"){
            event.preventDefault(); //no se accede al link
            img.style.transition = "filter 0.5s ease-in-out";
            setTimeout(() => { // Remove the blur after a short delay
                img.style.filter = "none";
            }, 5);
        }
        
  });
});


