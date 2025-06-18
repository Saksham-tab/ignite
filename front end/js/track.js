document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('trackForm');
  const orderIdInput = document.getElementById('orderId');
  const statusOutput = document.getElementById('orderStatus');

  const fakeOrders = {
    "IGNITE001": "Shipped – Estimated delivery in 2 days.",
    "IGNITE777": "Delivered – Your order has reached its final destination.",
    "IGNITE404": "Cancelled – The ritual was interrupted.",
    "IGNITE999": "Processing – Preparing for dispatch."
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = orderIdInput.value.trim().toUpperCase();
    const result = fakeOrders[id];

    if (result) {
      statusOutput.textContent = result;
    } else {
      statusOutput.textContent = "No order found with that ID. Please check and try again.";
    }
  });
});
