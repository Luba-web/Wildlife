//функция открытия бар меню
function openMenu() {
  menuBtn.style.display = "none";
  bar.classList.add("block-bar_opened");
  logo.style.display = "none";
  closeBtn.style.visibility = "visible";
}

//функция закрытия бар меню
function closeMenu() {
  menuBtn.style.display = "flex";
  bar.classList.remove("block-bar_opened");
  logo.style.display = "flex";
  closeBtn.style.visibility = "hidden";
}

//слушатель для открытия бар меню
menuBtn.addEventListener("click", openMenu);

//слушатель для закрытия бар меню
closeBtn.addEventListener("click", closeMenu);
