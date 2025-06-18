// 🔗 Global Config
const BASE_URL = "http://localhost:5000"; // Change if hosted

// ✅ LOGIN FUNCTION
async function loginUser(email, password) {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("IGNITE_TOKEN", data.token);
    localStorage.setItem("IGNITE_USER_ID", data.user.id);
    return data;
  } else {
    throw new Error(data.msg || "Login failed");
  }
}

// ✅ SIGNUP FUNCTION
async function signupUser(userObj) {
  const res = await fetch(`${BASE_URL}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userObj)
  });
  return await res.json();
}

// ✅ FETCH PRODUCTS
async function loadProducts() {
  const res = await fetch(`${BASE_URL}/api/products`);
  return await res.json();
}

// ✅ ADD TO CART
async function addToCart(userId, item) {
  const res = await fetch(`${BASE_URL}/api/cart/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, item })
  });
  return await res.json();
}

// ✅ GET CART ITEMS
async function getCart(userId) {
  const res = await fetch(`${BASE_URL}/api/cart/${userId}`);
  return await res.json();
}

// ✅ REMOVE ITEM FROM CART
async function removeFromCart(userId, index) {
  const res = await fetch(`${BASE_URL}/api/cart/remove`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, index })
  });
  return await res.json();
}

// ✅ PLACE ORDER
async function placeOrder(orderObj) {
  const res = await fetch(`${BASE_URL}/api/order/place`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderObj)
  });
  return await res.json();
}

// ✅ TRACK ORDER
async function trackOrder(orderId) {
  const res = await fetch(`${BASE_URL}/api/track/${orderId}`);
  return await res.json();
}

// ✅ FETCH USER INFO
async function fetchUserInfo(userId) {
  const res = await fetch(`${BASE_URL}/api/auth/user/${userId}`);
  return await res.json();
}

// ✅ FETCH ORDER HISTORY
async function fetchOrderHistory(userId) {
  const res = await fetch(`${BASE_URL}/api/order/history/${userId}`);
  return await res.json();
}
