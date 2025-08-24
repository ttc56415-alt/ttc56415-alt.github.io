// สั่งอาหาร
let cart = [];

function goBack() {
  window.location.href = "menu.html"; // เปลี่ยนลิงก์ไปหน้าหมวดหมู่ของคุณ
}

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  renderCart();
}

function removeFromCart(name) {
  cart = cart.map(item => {
    if (item.name === name) item.qty--;
    return item;
  }).filter(item => item.qty > 0);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  const totalEl = document.getElementById("total");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.qty} = ${item.price * item.qty} บาท`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "🗑️ ลบ";
    removeBtn.onclick = () => removeFromCart(item.name);
    li.appendChild(removeBtn);
    cartList.appendChild(li);
    total += item.price * item.qty;
  });
  totalEl.textContent = `รวม: ${total} บาท`;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("กรุณาเลือกเมนูก่อนสั่งอาหาร");
    return;
  }
  document.getElementById("success-message").style.display = "block";
  setTimeout(() => {
    cart = [];
    renderCart();
    document.getElementById("success-message").style.display = "none";
  }, 3000);
}