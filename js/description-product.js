/*
1- Ter a janela (browser) na mão
2- Ter o HTML na mão
3- Pegar o coração
4- Pegar clique no coração
5- No momnento que o usuário clicar, nós queremos mostrar um alert
*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
  console.log("aew");
}
