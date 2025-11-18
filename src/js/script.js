"use strict";

// smooth scrool with Lenis
const lenis = new Lenis({
  autoRaf: true,
});

const tabs = document.querySelectorAll(".tab-btn");
const tabContent = document.getElementById("tab-content");

// Update all the images ... fucking stressfull
const products = {
  clothes: `
           <div
          class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
        >
          <div class="relative">
            <img
              src="/src/assets/images/clothes_ankara-lady.webp"
              class="rounded-2xl mb-5 h-72 w-full object-cover"
            />
            <button
              onclick="window.location.href='../src/pages/redirect.html'"
              class="absolute inset-0 flex items-center cursor-pointer justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Click to Add to Cart<span class="ml-1">→</span>
            </button>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 truncate">
            Hertunba Nma Maxi Dress
          </h3>
          <p class="text-gray-600 text-lg mt-1">₦660,700</p>
          <button
            onclick="window.location.href='../src/pages/redirect.html'"
            class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
          >
            Get
          </button>
        </div>

        <div
          class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
        >
          <div class="relative">
            <img
              src="/src/assets/images/retro_coat.jpg"
              class="rounded-2xl mb-5 h-72 w-full object-cover"
            />
            <button
              onclick="window.location.href='../src/pages/redirect.html'"
              class="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Click to Add to Cart<span class="ml-1">→</span>
            </button>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 truncate">
            Denim Jacket
          </h3>
          <p class="text-gray-600 text-lg mt-1">₦70,000</p>
          <button
            onclick="window.location.href='../src/pages/redirect.html'"
            class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
          >
            Get
          </button>
        </div>

        <div
          class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
        >
          <div class="relative cursor-pointer">
            <img
              src="/src/assets/images/clothes_man.jpg"
              class="rounded-2xl mb-5 h-72 w-full object-cover"
            />
            <button
              onclick="window.location.href='../src/pages/redirect.html'"
              class="absolute inset-0 flex items-center justify-center bg-black/60 cursor-pointer text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Click to Add to Cart<span class="ml-1">→</span>
            </button>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 trunacte">
            Stone Island Collection
          </h3>
          <p class="text-gray-600 text-lg mt-1">₦205,000</p>
          <button
            onclick="window.location.href='../src/pages/redirect.html'"
            class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
          >
            Get
          </button>
        </div>
`,

  hoodies: `
<div
    class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
>
    <div class="relative">
    <img
        src="/src/assets/images/hoodies_losAngeles.webp"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
    onclick="window.location.href='../src/pages/redirect.html'"
        class="absolute inset-0 flex items-center cursor-pointer justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart<span class="ml-1">→</span>
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900 truncate">
    Mens Tye Fleece Hooded Sweatshirt
    </h3>
    <p class="text-gray-600 text-lg mt-1">₦28,985</p>
    <button
    onclick="window.location.href='../src/pages/redirect.html'"
    class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
    >
    Get
    </button>
</div>

<div
    class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
>
    <div class="relative">
    <img
        src="/src/assets/images/hoodies_cross.webp"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
    onclick="window.location.href='../src/pages/redirect.html'"
        class="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart<span class="ml-1">→</span>
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">B/W Unisex Hoodie</h3>
    <p class="text-gray-600 text-lg mt-1">₦21,000</p>
    <button
    onclick="window.location.href='../src/pages/redirect.html'"
    class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
    >
    Get
    </button>
</div>

<div
    class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
>
    <div class="relative cursor-pointer">
    <img
        src="/src/assets/images/hoodies_renaissance.webp"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
    onclick="window.location.href='../src/pages/redirect.html'"
        class="absolute inset-0 flex items-center justify-center bg-black/60 cursor-pointer text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart<span class="ml-1">→</span>
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900 capitalize">anthony's renaissance</h3>
    <p class="text-gray-600 text-lg mt-1">₦37,000</p>
    <button
    onclick="window.location.href='../src/pages/redirect.html'"
    class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
    >
    Get
    </button>
</div>
`,

  accessories: `
<div
class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
>
<div class="relative">
<img
    src="/src/assets/images/accessories_belt.jpg"
    class="rounded-2xl mb-5 h-72 w-full object-cover"
/>
<button
onclick="window.location.href='../src/pages/redirect.html'"
    class="absolute inset-0 flex items-center cursor-pointer justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
>
    Click to Add to Cart<span class="ml-1">→</span>
</button>
</div>
<h3 class="text-xl font-semibold text-gray-900 truncate">
Letter G Buckle Trendy Versatile Belt, Men's Casual Business Formal Belt
</h3>
<p class="text-gray-600 text-lg mt-1">₦18,500</p>
<button
onclick="window.location.href='../src/pages/redirect.html'"
class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
>
Get
</button>
</div>

<div
class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
>
<div class="relative">
<img
    src="/src/assets/images/accessories_glasses.jpg"
    class="rounded-2xl mb-5 h-72 w-full object-cover"
/>
<button
onclick="window.location.href='../src/pages/redirect.html'"
    class="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
>
    Click to Add to Cart<span class="ml-1">→</span>
</button>
</div>
<h3 class="text-xl font-semibold text-gray-900">
  Vintage Sun Shades
</h3>
<p class="text-gray-600 text-lg mt-1">₦25,000</p>
<button
onclick="window.location.href='../src/pages/redirect.html'"
class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
>
Get
</button>
</div>

<div
class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
>
<div class="relative cursor-pointer">
<img
    src="/src/assets/images/accessories_wrist_watch-1.jpg"
    class="rounded-2xl mb-5 h-72 w-full object-cover"
/>
<button
onclick="window.location.href='../src/pages/redirect.html'"
    class="absolute inset-0 flex items-center justify-center bg-black/60 cursor-pointer text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
>
    Click to Add to Cart<span class="ml-1">→</span>
</button>
</div>
<h3 class="text-xl font-semibold text-gray-900">
  SWLDAS Wristwatch (36mm)
</h3>
<p class="text-gray-600 text-lg mt-1">₦150,000</p>
<button
onclick="window.location.href='../src/pages/redirect.html'"
class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
>
Get
</button>
</div>
  `,

  shoes: `
<div
class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
>
<div class="relative">
<img
    src="/src/assets/images/shoes_heels.jpeg"
    class="rounded-2xl mb-5 h-72 w-full object-cover"
/>
<button
onclick="window.location.href='../src/pages/redirect.html'"
    class="absolute inset-0 flex items-center cursor-pointer justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
>
    Click to Add to Cart<span class="ml-1">→</span>
</button>
</div>
<h3 class="text-xl font-semibold text-gray-900">
  Heels
</h3>
<p class="text-gray-600 text-lg mt-1">₦180,500</p>
<button
onclick="window.location.href='../src/pages/redirect.html'"
class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
>
Get
</button>
</div>

<div
class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
>
<div class="relative">
<img
    src="/src/assets/images/shoes_docMaritins.webp"
    class="rounded-2xl mb-5 h-72 w-full object-cover"
/>
<button
onclick="window.location.href='../src/pages/redirect.html'"
    class="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
>
    Click to Add to Cart<span class="ml-1">→</span>
</button>
</div>
<h3 class="text-xl font-semibold text-gray-900">Dr. Martins</h3>
<p class="text-gray-600 text-lg mt-1">₦20,000</p>
<button
onclick="window.location.href='../src/pages/redirect.html'"
class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
>
Get
</button>
</div>

<div
class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
>
<div class="relative cursor-pointer">
<img
    src="/src/assets/images/shoes_sandals.webp"
    class="rounded-2xl mb-5 h-72 w-full object-cover"
/>
<button
onclick="window.location.href='../src/pages/redirect.html'"
    class="absolute inset-0 flex items-center justify-center bg-black/60 cursor-pointer text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
>
    Click to Add to Cart<span class="ml-1">→</span>
</button>
</div>
<h3 class="text-xl font-semibold text-gray-900">Handmade Sandals</h3>
<p class="text-gray-600 text-lg mt-1">₦35,000</p>
<button
onclick="window.location.href='../src/pages/redirect.html'"
class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
>
Get
</button>
</div>
`,
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) =>
      t.classList.remove("active", "text-black", "border-b-2", "border-black")
    );
    tab.classList.add("active", "text-black", "border-b-2", "border-black");
    const category = tab.dataset.tab;
    tabContent.classList.add("opacity-0");
    setTimeout(() => {
      tabContent.innerHTML = products[category];
      tabContent.classList.remove("opacity-0");
    }, 200);
  });
});

// Scroll to top btn
const backToTopBtn = document.getElementById("backToTop");

// Show button after scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show header after scrolling down
const header = document.getElementById("header");

const blackIcons = document.querySelector(".blackIcon");
const whiteIcons = document.querySelector(".whiteIcon");

const blackUserIcon = document.querySelector(".blackUserIcon");
const whiteUserIcon = document.querySelector(".whiteUserIcon");

const whiteMenuIcon = document.querySelector(".whiteMenuIcon");
const blackMenuIcon = document.querySelector(".blackMenuIcon");

const blackLogo = document.getElementById("blackLogo");
const whiteLogo = document.getElementById("whiteLogo");

const blackListItems = document.getElementById("blackListItems");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    header.classList.add("header-backdrop");
    blackIcons.classList.remove("hidden");
    whiteIcons.classList.add("hidden");

    whiteMenuIcon.classList.add("hidden");
    blackMenuIcon.classList.remove("hidden");

    blackUserIcon.classList.remove("hidden");
    whiteUserIcon.classList.add("hidden");

    blackLogo.classList.add("hidden");
    whiteLogo.classList.remove("hidden");
    blackListItems.classList.remove("text-white");
  } else {
    header.classList.remove("header-backdrop");
    blackIcons.classList.add("hidden");
    whiteIcons.classList.remove("hidden");

    blackUserIcon.classList.add("hidden");
    whiteUserIcon.classList.remove("hidden");

    icons.classList.add("text-white");
    blackLogo.classList.remove("hidden");

    whiteMenuIcon.classList.remove("hidden");
    blackMenuIcon.classList.add("hidden");

    whiteLogo.classList.add("hidden");
    blackListItems.classList.add("text-white");
  }
});

// FAQs sect
document.querySelectorAll(".faq-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.classList.toggle("hidden");
    btn.querySelector("span").textContent = content.classList.contains("hidden")
      ? "+"
      : "−";
  });
});

function subscribeModal() {
  const modal = document.getElementById("mailModal");
  const closeBtn = document.getElementById("closeModal");

  modal.classList.remove("hidden");

  requestAnimationFrame(() => {
    modal.classList.remove("opacity-0", "scale-95");
    modal.classList.add("opacity-100", "scale-100", "flex");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("opacity-0", "scale-95");
    modal.classList.remove("opacity-100");

    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }, 300);
  });
}

setTimeout(subscribeModal, 3000);

//stop animation
const partners = document.getElementById("partners");
const animationScroll = document.querySelector(".animate-scroll");
partners.addEventListener("mouseover", () => {
  animationScroll.classList.add("stop-scroll");
});
partners.addEventListener("mouseout", () => {
  animationScroll.classList.remove("stop-scroll");
});

// Open & close mobile menu
const openMenuWhiteBtn = document.querySelector(".whiteMenuIcon");
const openMenuBlackBtn = document.querySelector(".blackMenuIcon");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

openMenuWhiteBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});
openMenuBlackBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

// Remove when links is clicked
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    open = false;
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    document.body.style.overflowY = "auto";
    spinMenuBtn();
  });
});
