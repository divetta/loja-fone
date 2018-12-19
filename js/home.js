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

$stars.forEach(($star, index_selected) => {
  $star.addEventListener("click", function() {
    $stars.forEach((star, index) => {
      if (index_selected >= index) {
        star.src = "/img/star-active.png";
      } else {
        star.src = "/img/star.png";
      }
    });
  });
});
