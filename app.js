let imagesObj = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

document.querySelector(".toggle").addEventListener("click", () => {
  let sideMenu = document.querySelector(".side-menu");
  let content = document.querySelector(".content");
  sideMenu.classList.add("side-menu-show");
  content.classList.add("content-show");
});

document.querySelector(".close").addEventListener("click", () => {
  let sideMenu = document.querySelector(".side-menu");
  let content = document.querySelector(".content");
  sideMenu.classList.remove("side-menu-show");
  content.classList.remove("content-show");
});

document.querySelector(".icon-cart").addEventListener("click", () => {
  document.querySelector(".card-content").classList.toggle("show");
});

document.querySelector(".minus").addEventListener("click", () => {
  let currNum = document.querySelector(".curr-num");
  let currQuantity = +currNum.innerText;
  if (currQuantity > 0) {
    currNum.innerText = currQuantity - 1;
  }
});

document.querySelector(".plus").addEventListener("click", () => {
  let currNum = document.querySelector(".curr-num");
  let currQuantity = +currNum.innerText;
  currNum.innerText = currQuantity + 1;
});

let totalProdcutsIncart = [];
let cnt = 0;

document.querySelector(".add-btn").addEventListener("click", () => {
  let currNum = document.querySelector(".curr-num");
  let mainContent = document.querySelector(".main-content");
  let currQuantity = +currNum.innerText;
  let totalPrice = currQuantity * 125;
  if (totalPrice === 0) {
    alert("Product is not added in cart");
    return;
  }
  totalProdcutsIncart.push(currQuantity);
  mainContent.innerHTML = totalProdcutsIncart
    .map((e) => {
      return `<div class="prod" >
        <img class="prod-img" src="./images/image-product-1-thumbnail.jpg" alt="">
        <div class="cart-text">
          <p>fall limited edition sneakers</p>
          <p>$125.00 x ${e} <span class="total">${e*125}</span></p>
        </div>
        <img class="delete" src="./images/icon-delete.svg" alt="">
      </div>`;
    })
    .join("")

  let prods = document.querySelectorAll(".prod");
  let checkOutBtn = document.querySelector(".checkout");
  let emptyCart = document.querySelector(".empty-cart");
  cnt += 1;
  prods.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentNode.removeChild(item);
      totalProdcutsIncart.pop()
      cnt--;
      if (cnt === 0) {
        checkOutBtn.classList.remove("checkout-show");
        emptyCart.classList.remove("empty-cart-remove");
      }
    });
  });

  if (cnt === 1) {
    checkOutBtn.classList.add("checkout-show");
    emptyCart.classList.add("empty-cart-remove");
  }
});

let i = 0;
let image = document.querySelector(".product-img");
document.querySelector(".pre").addEventListener("click", () => {
  if (i === 0) {
    i = imagesObj.length - 1;
  } else {
    i--;
  }
  console.log((document.querySelector(".product-img").src = imagesObj[i]));
});
document.querySelector(".next-img").addEventListener("click", () => {
  if (i === imagesObj.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.querySelector(".product-img").src = imagesObj[i];
});
