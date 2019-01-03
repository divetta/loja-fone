const $magnifier = document.querySelector(".magnifier");

$magnifier.addEventListener("click", () => {
  const $search = document.querySelector(".search");
  $search.classList.toggle("-active");
});
