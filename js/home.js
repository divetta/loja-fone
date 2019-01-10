// Tratamento do carrinho
let valorInicial = 10;
const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  const $carrinho = document.querySelector(".action.-last");
  $carrinho.textContent = `Carrinho (${++valorInicial})`;
}
