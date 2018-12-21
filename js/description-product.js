const $heart = document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
  this.classList.toggle("-active");
}

// Tratamento das estrelas
const $stars = document.querySelectorAll(".star");

$stars.forEach(($star, index) => {
  $star.addEventListener("click", function() {
    handleClickStar(index);
  });
});

function handleClickStar(index_selected) {
  $stars.forEach((star, index) => {
    if (index_selected >= index) {
      star.classList.add("-active");
    } else {
      star.classList.remove("-active");
    }
  });
}
