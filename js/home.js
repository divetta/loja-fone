let valorInicial = 10;
const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  $carrinho = document.querySelector("a.-last");

  $carrinho.textContent = `Carrinho (${++valorInicial})`;
}
