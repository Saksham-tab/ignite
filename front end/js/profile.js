document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('trackForm');
  const orderIdInput = document.getElementById('orderId');
  const orderStatus = document.getElementById('orderStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderId = orderIdInput.value.trim();

    if (!orderId) {
      orderStatus.textContent = "Please enter a valid Order ID.";
      return;
    }

    // Simulated order status check (replace with API call)
    const fakeOrders = {
      "IGNITE001": "Shipped - arriving in 2 days.",
      "IGNITE777": "Delivered. Blessed be the flame.",
      "IGNITE404": "Order not found. Check ID and try again."
    };

    orderStatus.textContent = fakeOrders[orderId.toUpperCase()] || "No matching order found.";
  });
});
