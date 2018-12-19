// Tratamento do coração
let valorInicial = 10;
const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  $carrinho = document.querySelector("a.-last");

  $carrinho.textContent = `Carrinho (${++valorInicial})`;
}

// Tratamento das estrelas
const $stars = document.querySelectorAll(".-star > img.icon");

$stars.forEach($star => {
  $star.addEventListener("click", function() {
    if ($star.classList.toggle("-active")) {
      $star.src = "/img/star-active.png";
    } else {
      $star.src = "/img/star.png";
    }
  });
});
