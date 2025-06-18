document.addEventListener("DOMContentLoaded", () => {
  const orderItems = document.getElementById("orderItems");
  const summaryTotal = document.getElementById("summaryTotal");
  const confirmation = document.getElementById("confirmationMessage");
  const form = document.getElementById("orderForm");

  let cart = JSON.parse(localStorage.getItem("IGNITE_CART")) || [];
  let total = 0;

  // Display cart items
  if (cart.length === 0) {
    orderItems.innerHTML = "<li>Your cart is empty.</li>";
    summaryTotal.textContent = "0";
  } else {
    cart.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${item.name}</span><span>₹${item.price}</span>`;
      orderItems.appendChild(li);
      total += item.price;
    });
    summaryTotal.textContent = total;
  }

  // Handle form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const payment = formData.get("payment");

    const summary = `
      <h3>✅ Order Placed Successfully!</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Payment:</strong> ${payment === "cod" ? "Cash on Delivery" : "Online Payment"}</p>
      <p><strong>Total:</strong> ₹${total}</p>
      <br>
      <p>Your order has been received. Prepare for the flame 🔥</p>
    `;

    confirmation.innerHTML = summary;

    // Clear cart
    localStorage.removeItem("IGNITE_CART");
    form.reset();
    document.getElementById("orderSummary").remove();
  });
});
