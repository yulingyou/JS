let removeCartItemBtn = document.querySelectorAll(".btn-danger")
let quantityInputs = document.querySelectorAll(".cart-quantity-input")

quantityInputs.forEach((i) => {
  i.addEventListener("change", quantityChanged)
})
function quantityChanged(e) {
  if (e.target.value == NaN || e.target.value <= 0) {
    e.target.value = 0
  }
  upadteCartTotal()
}
removeCartItemBtn.forEach((i) => {
  i.addEventListener("click", removeCartItem)
})
// for (let i = 0; i < removeCartItemBtn.length; i++) {
//   let button = removeCartItemBtn[i]
//   button.addEventListener("click", removeCartItem)
// }
function removeCartItem(e) {
  e.target.parentElement.parentElement.remove()
  upadteCartTotal()
}

function upadteCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0]
  let cartRows = cartItemContainer.getElementsByClassName("cart-row")
  let total = 0
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName("cart-price")[0]
    let quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0]
    let price = parseFloat(priceElement.textContent.replace("$", ""))
    let quantity = quantityElement.value
    total = total + price * quantity
  }
  total = Math.round(total * 100) / 100
  document.querySelector(".cart-total-price").textContent = "$" + total
}
