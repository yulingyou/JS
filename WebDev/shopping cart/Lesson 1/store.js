let removeCartItemBtn = document.querySelectorAll(".btn-danger")
let quantityInputs = document.querySelectorAll(".cart-quantity-input")
let shopItemBtn = document.querySelectorAll(".shop-item-button")

shopItemBtn.forEach((i) => {
  i.addEventListener("click", addCartItemClicked)
})

function addCartItemClicked(e) {
  const button = e.target
  const shopItem = button.parentElement.parentElement
  const title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
  const price = shopItem.querySelector(".shop-item-price").innerText
  const imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src
  addCartItem(price, title, imageSrc)
  upadteCartTotal()
}
function addCartItem(price, title, imageSrc) {
  const cartItems = document.querySelector(".cart-items")
  const cartItemsName = cartItems.getElementsByClassName("cart-item-title")
  for (let i = 0; i < cartItemsName.length; i++) {
    if (cartItemsName[i].innerText == title) {
      const btn = getElementsByClassName("shop-item-button")[0]

      btn.addEventListener("change", quantityChanged)
      return
    }
  }
  const newCartItems = ` <div class="cart-row">
      <div class="cart-item cart-column">
       <img
       class="cart-item-image"
       src="${imageSrc}"
       width="100"
       height="100"/>
     <span class="cart-item-title">${title}</span>
     </div>
     <span class="cart-price cart-column">${price}</span>
     <div class="cart-quantity cart-column">
     <input class="cart-quantity-input" type="number" value="1" />
    <button class="btn btn-danger"type="button">REMOVE</button>
  </div>
</div>`

  cartItems.insertAdjacentHTML("afterbegin", newCartItems)

  cartItems
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem)

  cartItems
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged)
}

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
