var customerData = localStorage.getItem("customer");
if (customerData) {
  var customer = JSON.parse(customerData);
  document.getElementById("customerName").textContent = customer.name;
  document.getElementById("customerEmail").textContent = customer.email;
  document.getElementById("customerAddress").textContent = customer.address;
  document.getElementById("customerPhone").textContent = customer.phone;
}