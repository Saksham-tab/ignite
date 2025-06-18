document.addEventListener('DOMContentLoaded', () => {
  const cartList = document.getElementById('cartList');
  const cartTotal = document.getElementById('cartTotal');

  let cart = JSON.parse(localStorage.getItem('IGNITE_CART')) || [];

  function updateCartDisplay() {
    cartList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartList.innerHTML = "<p>Your cart is empty.</p>";
      cartTotal.textContent = "0";
    } else {
      cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
          <h4>${item.name}</h4>
          <span>₹${item.price}</span>
          <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        cartList.appendChild(div);
        total += item.price;
      });

      cartTotal.textContent = total;
    }

    // ✅ Update cart count in navbar if available
    const countSpan = document.getElementById("cartCount");
    if (countSpan) {
      countSpan.textContent = cart.length;
    }

    bindRemoveButtons();
  }

  function bindRemoveButtons() {
    document.querySelectorAll(".remove-btn").forEach(button => {
      button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"));
        cart.splice(index, 1);
        localStorage.setItem("IGNITE_CART", JSON.stringify(cart));
        updateCartDisplay();
      });
    });
  }

  updateCartDisplay();
});

