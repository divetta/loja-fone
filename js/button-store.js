const $buttonAddTocart = window.document.querySelector(".-second");

$buttonAddTocart.addEventListener("click", handleClick);

function handleClick() {
  $cartCounter = window.document.querySelector("a.-last");

  let existingQty = $cartCounter.text;
  let newQty = existingQty.replace(/(\d+)+/g, function(match, number) {
    return parseInt(number) + 1;
  });

  $cartCounter.text = newQty;
}
