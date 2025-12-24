/* ---------------- EMAIL CONFIRMATION ---------------- */
function confirmEmailFunction() {
  let email = document.getElementById("confirmEmail").value.trim();
  let message = document.getElementById("emailMessage");

  // Email format validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    message.style.color = "red";
    message.innerText = "❌ Invalid email format!";
    return;
  }

  message.style.color = "green";
  message.innerText = "✅ Confirmation email sent to: " + email;
}




/* ---------------- CART & BOOKING SYSTEM ---------------- */
let cart = [];
let total = 0;

function addService(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function removeService(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  let cartList = document.getElementById("cart");
  let totalAmount = document.getElementById("total");

  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} 
    <button onclick="removeService(${index})">Remove</button>`;
    cartList.appendChild(li);
  });

  totalAmount.textContent = total;
}

function generateBill() {
  let name = document.getElementById("custName").value;
  let email = document.getElementById("custEmail").value;
  let phone = document.getElementById("custPhone").value;

  if (name === "" || email === "" || phone === "" || cart.length === 0) {
    alert("Please fill all details and add at least 1 service!");
    return;
  }

  document.getElementById("billName").textContent = name;
  document.getElementById("billEmail").textContent = email;
  document.getElementById("billPhone").textContent = phone;

  let billItems = document.getElementById("billItems");
  billItems.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    billItems.appendChild(li);
  });

  document.getElementById("billTotal").textContent = total;

  document.getElementById("billSection").style.display = "block";
}



/* ---------------- "BOOK NOW" Scroll ---------------- */
document.getElementById("bookBtn").addEventListener("click", () => {
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
});



/* ---------------- ACTIVE LINK HIGHLIGHTING ---------------- */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


/* ---------------- NEWSLETTER ---------------- */
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("subscriberName").value.trim();
  let email = document.getElementById("subscriberEmail").value.trim();
  let msg = document.getElementById("newsletterMessage");

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    msg.style.color = "red";
    msg.textContent = "Please enter your name!";
    return;
  }

  if (email === "") {
    msg.style.color = "red";
    msg.textContent = "Please enter your email!";
    return;
  }

  if (!emailPattern.test(email)) {
    msg.style.color = "red";
    msg.textContent = "Invalid email format!";
    return;
  }

  msg.style.color = "green";
  msg.textContent = `✅ Subscribed successfully! Confirmation sent to ${email}`;

  document.getElementById("newsletterForm").reset();
});
