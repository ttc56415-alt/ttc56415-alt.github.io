// 1.js
document.getElementById("lang-toggle").addEventListener("click", function () {
  const descTh = document.getElementById("desc-th");
  const descEn = document.getElementById("desc-en");
  const name = document.getElementById("restaurant-name");
  const btn = document.getElementById("lang-toggle");

  if (descTh.style.display !== "none") {
    descTh.style.display = "none";
    descEn.style.display = "block";
    name.textContent = "Isan / Seafood Restaurant";
    btn.textContent = "ภาษาไทย";
  } else {
    descTh.style.display = "block";
    descEn.style.display = "none";
    name.textContent = "ร้านอาหารอีสาน/ทะเลซีฟู้ด";
    btn.textContent = "English";
  }
});

