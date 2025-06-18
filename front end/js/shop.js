// IGNITE Shop Page JS: Sorting + View Toggle + Cart

document.addEventListener("DOMContentLoaded", () => {
  const sortSelect = document.getElementById("sortOptions");
  const gridBtn = document.getElementById("gridView");
  const listBtn = document.getElementById("listView");
  const productGrid = document.getElementById("productGrid");

  // Toggle Grid/List View
  if (gridBtn && listBtn && productGrid) {
    gridBtn.addEventListener("click", () => {
      productGrid.classList.remove("list-view");
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
    });

    listBtn.addEventListener("click", () => {
      productGrid.classList.add("list-view");
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
    });
  }

  // Sort Products by Price
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      const option = sortSelect.value;
      let cards = Array.from(productGrid.children);

      if (option.includes("price")) {
        cards.sort((a, b) => {
          const priceA = parseInt(a.querySelector(".price").innerText.replace(/[₹,]/g, ""));
          const priceB = parseInt(b.querySelector(".price").innerText.replace(/[₹,]/g, ""));
          return option === "price-asc" ? priceA - priceB : priceB - priceA;
        });

        cards.forEach(card => productGrid.appendChild(card));
      }
    });
  }

  // Add to Cart Logic (only bind once)
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      if (!card) return;

      const name = card.querySelector("h3")?.innerText || "Unknown Item";
      const priceText = card.querySelector(".price")?.innerText || "0";
      const price = parseInt(priceText.replace(/[₹,]/g, ""));

      const item = { name, price };

      let cart = JSON.parse(localStorage.getItem("IGNITE_CART")) || [];
      cart.push(item);
      localStorage.setItem("IGNITE_CART", JSON.stringify(cart));

      updateCartCount();
      alert(`${name} added to cart!`);
    });
  });

  // Update Cart Count in Navbar
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("IGNITE_CART")) || [];
    const countSpan = document.getElementById("cartCount");
    if (countSpan) {
      countSpan.textContent = cart.length;
    }
  }

  updateCartCount(); // Initial load
});
