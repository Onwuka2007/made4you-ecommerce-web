"use strict";

// DOM elements
const productsDiv = document.getElementById("products");
const cartList = document.getElementById("cartItems");
const totalDisplay = document.getElementById("total");

// Object of arrays for the products in store
const products = [
  {
    id: 1,
    name: "Lit Men's Fashion Sports Outdoor Running Sneakers - Sports Shoes",
    price: 17999,
    img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/6778872/3.jpg?1236",
  },
  {
    id: 2,
    name: "Samsung Level Headsets - Wireless Over-Ear Noise Cancellation",
    price: 19941,
    img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/1236814/1.jpg?8131",
  },

  {
    id: 3,
    name: "Apple IPhone 17 Pro - 12GB- 256GB - Cosmic Orange",
    price: 2499000,
    img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/6187814/1.jpg?3232",
  },

  {
    id: 4,
    name: " Maybelline Superstay Vinyl Ink Nude Shock Liquid Lipstick, Longwear, Smudge-free, Long Lasting up to 16hr, Highly Pigmented Color, Shine Finish - 35 Cheeky",
    price: 13639,
    img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/2708162/1.jpg?9553",
  },
  {
    id: 4,
    name: "DELL LATITUTE 3190 2in1 X360 INTEL PENTIUM, 8GB RAM, 256GB SSD",
    price: 230000,
    img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/1423804/1.jpg?1458",
  },

  {
    id: 5,
    name: "LED USB Energy Saving Bulb",
    price: 2290,
    img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/7628752/1.jpg?8409",
  },
];

// Render product UI
function renderProducts() {
  productsDiv.innerHTML = "";

  //for each of the products elements
  products.forEach((prod, i) => {
    //create a card div dynamically
    const card = document.createElement("div");

    //styles the card
    card.classList.add("bg-white", "rounded-sm", "shadow", "flex", "flex-col", "md:p-3");

    // Add contenet to the card
    card.innerHTML = `
        <img src="${prod.img}" class="rounded mb-3 w-full h-60 object-cover border" />
        <div class="px-2">
          <div class="flex items-center justify-between mb-5">
              <h3 class="font-semibold truncate text-sm md:text-lg">${prod.name}</h3>
              <i class="likeBtn fa-regular fa-heart cursor-pointer"></i>
          </div>
          <p class="text-gray-600 font-semibold mb-5 text-sm md:text-lg">₦${prod.price.toLocaleString()}</p>
          <p class="likeMsg hidden font-bold text-green-200 bg-green-600 w-[90%] px-4 py-2 rounded fixed top-[50px] right-[20px] left-[2px] mx-auto z-50 truncate">Watchlisted 
          ${prod.name}!</p>
        </div>
    `;

    const likeBtn = card.querySelector(".likeBtn");
    const likeMsg = card.querySelector(".likeMsg");
    likeBtn.addEventListener("click", () => {
      // Check if it’s currently outlined (not liked)
      const isLiking = likeBtn.classList.contains("fa-regular");

      // Toggle heart
      likeBtn.classList.toggle("fa-regular");
      likeBtn.classList.toggle("fa-solid");
      likeBtn.classList.toggle("text-red-500");

      // Only show message if liking
      if (isLiking) {
        likeMsg.classList.remove("hidden");

        // Add to wishlist
        wish.push(prod);
        wishlistList(); // re-render wishlist

        // Hide after 5 seconds
        setTimeout(() => {
          likeMsg.classList.add("hidden");
        }, 4000);
      } else {
        // Remove from wishlist
        wish = wish.filter((p) => p.id !== prod.id);
        wishlistList();
      }
    });

    // Add button to add
    const btn = document.createElement("button");
    btn.classList.add(
      "m-2",
      "bg-black",
      "text-white",
      "text-xs",
      "font-semibold",
      "px-4",
      "py-2",
      "rounded",
      "hover:bg-gray-800",
      "transition"
    );
    btn.textContent = "Add To Cart";
    btn.addEventListener("click", () => addToCart(i)); //add to cart called here

    // Append them into the html (card into product div, btn into card)
    card.appendChild(btn);
    productsDiv.appendChild(card);
  });
}

let cart = [];

// Add to cart fn
function addToCart(p) {
  cart.push(products[p]);
  renderCart(products[p]); // pass the added product
  updateCartCount();
}

// Card ui
function renderCart(addedProduct) {
  cartList.innerHTML = "";
  let sum = 0;

  cart.forEach((item) => {
    sum += item.price;

    const li = document.createElement("li");
    li.className = "flex justify-between bg-gray-200 p-2 rounded";
    li.textContent = `${item.name} - ₦${item.price}`;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = `Total: ₦${sum}`;

  // Show "Added to cart" message for the specific product
  const cartMsg = document.createElement("p");
  cartMsg.classList.add(
    "font-bold",
    "text-green-200",
    "bg-green-600",
    "w-fit",
    'h-fit',
    "px-4",
    "py-2",
    "rounded",
    "fixed",
    'top-20',
    'left-2',
    'right-2',
    'm-auto',
    "z-50"
  );
  cartMsg.textContent = `${addedProduct.name} was added to cart`;

  document.body.appendChild(cartMsg);

  setTimeout(() => {
    cartMsg.remove();
  }, 2000);
}

renderProducts();

let wish = [];
// watchlist UI
function wishlistList() {
  const wishList = document.getElementById("wishList");

  wishList.innerHTML = "";

  wish.forEach((list) => {
    const li = document.createElement("li");
    li.className = "flex justify-between bg-gray-200 p-2 rounded";
    li.textContent = `${list.name} - $${list.price}`;

    wishList.appendChild(li);
  });
}

// Change the count on cart icon
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cart.length;
}

const cartContainer = document.getElementById("cartContainer");
const cartOverlay = document.getElementById("cartOverlay");
const cartIcon = document.getElementById("cartIcon");
const closeCart = document.getElementById("closeCart");

// Open modal
cartIcon.addEventListener("click", () => {
  cartContainer.classList.remove("hidden");
  cartOverlay.classList.remove("hidden");
});

// Close modal via button
closeCart.addEventListener("click", () => {
  cartContainer.classList.add("hidden");
  cartOverlay.classList.add("hidden");
});

// Close modal when clicking overlay
cartOverlay.addEventListener("click", () => {
  cartContainer.classList.add("hidden");
  cartOverlay.classList.add("hidden");
});

const wishlistIcon = document.getElementById("wishlist-icon");
const wishListContainer = document.getElementById("wishListContainer");
const closeWishlist = document.getElementById("closeWishlist");

wishlistIcon.addEventListener("click", () => {
  wishListContainer.classList.remove("hidden");
  cartOverlay.classList.remove("hidden");
});

closeWishlist.addEventListener("click", () => {
  wishListContainer.classList.add("hidden");
  cartOverlay.classList.add("hidden");
});
