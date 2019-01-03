const $magnifier = document.querySelector(".magnifier");
const $search = document.querySelector(".search");
const $close = document.querySelector(".close");

$magnifier.addEventListener("click", () => handleClickSearch());
$close.addEventListener("click", () => handleClickSearch());

function handleClickSearch() {
  $search.classList.toggle("-active");
  $close.classList.toggle("-active");
  $magnifier.classList.toggle("-active");
}
