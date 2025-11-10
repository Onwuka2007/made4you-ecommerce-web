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
        src="/tobias-tullius-Fg15LdqpWrs-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">
    Classic Retro Coat
    </h3>
    <p class="text-gray-600 text-lg mt-1">₦18,500</p>
    <button
    onclick="window.location.href='/signup.html'"
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
        src="/andres-jasso-PqbL_mxmaUE-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">Denim Jacket</h3>
    <p class="text-gray-600 text-lg mt-1">₦20,000</p>
    <button
    onclick="window.location.href='/signup.html'"
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
        src="/angela-bailey-jlo7Bf4tUoY-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">Street Fit</h3>
    <p class="text-gray-600 text-lg mt-1">₦25,000</p>
    <button
    onclick="window.location.href='/signup.html'"
    class="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg my-2 w-full text-center transition duration-300"
    >
    Get
    </button>
</div>

`,

  hoodies: `
<div class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group relative"
>
    <div class="relative">
    <img
        src="/tobias-tullius-Fg15LdqpWrs-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">
    Classic Retro Coat
    </h3>
    <p class="text-gray-600 text-lg mt-1">₦18,500</p>
    <button
    onclick="window.location.href='/signup.html'"
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
        src="/andres-jasso-PqbL_mxmaUE-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">Denim Jacket</h3>
    <p class="text-gray-600 text-lg mt-1">₦20,000</p>
    <button
    onclick="window.location.href='/signup.html'"
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
        src="/angela-bailey-jlo7Bf4tUoY-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">Street Fit</h3>
    <p class="text-gray-600 text-lg mt-1">₦25,000</p>
    <button
    onclick="window.location.href='/signup.html'"
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
        src="/tobias-tullius-Fg15LdqpWrs-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">
    Classic Retro Coat
    </h3>
    <p class="text-gray-600 text-lg mt-1">₦18,500</p>
    <button
    onclick="window.location.href='/signup.html'"
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
        src="/andres-jasso-PqbL_mxmaUE-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">Denim Jacket</h3>
    <p class="text-gray-600 text-lg mt-1">₦20,000</p>
    <button
    onclick="window.location.href='/signup.html'"
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
        src="/angela-bailey-jlo7Bf4tUoY-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">Street Fit</h3>
    <p class="text-gray-600 text-lg mt-1">₦25,000</p>
    <button
    onclick="window.location.href='/signup.html'"
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
        src="/tobias-tullius-Fg15LdqpWrs-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">
    Classic Retro Coat
    </h3>
    <p class="text-gray-600 text-lg mt-1">₦18,500</p>
    <button
    onclick="window.location.href='/signup.html'"
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
        src="/andres-jasso-PqbL_mxmaUE-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">Denim Jacket</h3>
    <p class="text-gray-600 text-lg mt-1">₦20,000</p>
    <button
    onclick="window.location.href='/signup.html'"
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
        src="/angela-bailey-jlo7Bf4tUoY-unsplash.jpg"
        class="rounded-2xl mb-5 h-72 w-full object-cover"
    />
    <button
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white hover:text-green-500 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        Click to Add to Cart
    </button>
    </div>
    <h3 class="text-xl font-semibold text-gray-900">Street Fit</h3>
    <p class="text-gray-600 text-lg mt-1">₦25,000</p>
    <button
    onclick="window.location.href='/signup.html'"
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

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    header.classList.add("header-backdrop"); // example Tailwind class
  } else {
    header.classList.remove("header-backdrop");
  }
});

document.querySelectorAll(".faq-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.classList.toggle("hidden");
    btn.querySelector("span").textContent = content.classList.contains("hidden")
      ? "+"
      : "−";
  });
});
