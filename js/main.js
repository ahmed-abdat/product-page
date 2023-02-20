const minus = document.querySelector(".quantity .minus"),
  quantity = document.querySelector(".quantity .number"),
  plus = document.querySelector(".quantity .plus");

// shop cart
const shopCart = document.querySelector("header .right-side .shop .count");
const addToCart = document.querySelector(
  ".product .right-side .btns .add-to-cart"
);

addToCart.addEventListener("click", addTocartHandler);

minus.addEventListener("click", minusHandler);
plus.addEventListener("click", plussHandler);

// function handler (event)

function plussHandler() {
  quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
  minus.classList.remove("disable");
}

function minusHandler() {
  quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
  if (parseInt(quantity.innerHTML) === 1) {
    minus.classList.add("disable");
    return;
  }
  minus.classList.remove("disable");
}

function addTocartHandler(){
    shopCart.innerHTML = quantity.innerHTML;
    shopCart.classList.remove('hide')
}