const gallery = document.querySelector(".gallery");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

gallery.addEventListener("wheel", (e) => {
  e.preventDefault();
  gallery.scrollLeft += e.deltaY;
  gallery.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";
  gallery.scrollLeft += 900;
});

prevBtn.addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";
  gallery.scrollLeft -= 900;
});
