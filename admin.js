function addProduct() {
  const name = document.getElementById("name").value.trim();
  const price = parseInt(document.getElementById("price").value);
  if (!name || isNaN(price)) return alert("Vui lòng nhập đầy đủ");

  const products = JSON.parse(localStorage.getItem("admin_products")) || [];
  products.push({ name, price });
  localStorage.setItem("admin_products", JSON.stringify(products));
  loadProducts();
}

function loadProducts() {
  const products = JSON.parse(localStorage.getItem("admin_products")) || [];
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>
        <p>Giá: ${p.price.toLocaleString()} đ</p>
        <button onclick="deleteProduct(${i})">❌ Xóa</button>
      </div>
    `;
  });
}

function deleteProduct(index) {
  const products = JSON.parse(localStorage.getItem("admin_products")) || [];
  products.splice(index, 1);
  localStorage.setItem("admin_products", JSON.stringify(products));
  loadProducts();
}

function addProduct() {
  const name = document.getElementById("name").value.trim();
  const price = parseInt(document.getElementById("price").value);
  const img = document.getElementById("img").value.trim(); // ảnh từ URL
  if (!name || isNaN(price) || !img) return alert("Nhập đầy đủ thông tin!");

  const products = JSON.parse(localStorage.getItem("admin_products")) || [];
  products.push({ name, price, img });
  localStorage.setItem("admin_products", JSON.stringify(products));
  loadProducts();
}

loadProducts();
