const chatlog = document.getElementById("chatlog");
const userInput = document.getElementById("userInput");

function handleUserInput() {
  const input = userInput.value.trim();
  if (!input) return;
  appendMessage("👤 Bạn", input);
  respondToInput(input.toLowerCase());
  userInput.value = "";
}

function appendMessage(sender, message) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatlog.appendChild(msg);
  chatlog.scrollTop = chatlog.scrollHeight;
}

function respondToInput(input) {
  let response = "Xin lỗi, tôi chưa hiểu ý bạn. Bạn có thể hỏi về giá, đặt hàng, giao hàng, đổi trả...";

  if (input.includes("giá") || input.includes("bao nhiêu")) {
    response = "Giá sản phẩm được ghi rõ bên dưới từng sản phẩm. Bạn có thể vào trang 'Sản phẩm' để xem chi tiết.";
  } else if (input.includes("mua") || input.includes("đặt hàng")) {
    response = "Bạn có thể nhấn nút 'Thêm vào giỏ' trên sản phẩm rồi tiến hành đặt hàng.";
  } else if (input.includes("giao hàng") || input.includes("vận chuyển")) {
    response = "Chúng tôi giao hàng toàn quốc, qua các đơn vị uy tín như GHTK, Shopee Express, J&T.";
  } else if (input.includes("đổi trả") || input.includes("bảo hành")) {
    response = "Bạn được đổi trả trong vòng 7 ngày nếu sản phẩm lỗi. Liên hệ chúng tôi để được hướng dẫn chi tiết.";
  }

  setTimeout(() => appendMessage("🤖 Trợ lý", response), 500);
}
