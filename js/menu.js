const $menu = document.querySelector(".menu");
const $openMenu = $menu.querySelector(".-open");
const $closeMenu = $menu.querySelector(".-close");
const $actions = $menu.querySelectorAll(".action");

$openMenu.addEventListener("click", () => {
  $menu.classList.toggle("-active");
  $actions.forEach($action => {
    $action.classList.toggle("-active");
  });
  $openMenu.classList.remove("-active");
  $closeMenu.classList.add("-active");
});

$closeMenu.addEventListener("click", () => {
  $menu.classList.toggle("-active");
  $actions.forEach($action => {
    $action.classList.toggle("-active");
  });
  $openMenu.classList.add("-active");
  $closeMenu.classList.remove("-active");
});
