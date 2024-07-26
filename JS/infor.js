
 
  document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();

  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;


    var customer = {
      name: name,
      email: email,
      address: address,
      phone: phone
    };

    localStorage.setItem("customer", JSON.stringify(customer));

    alert("Order placed successfully!");
  });

  document.addEventListener("DOMContentLoaded", function() {
    var customerData = localStorage.getItem("customer");
    if (customerData) {
      var customer = JSON.parse(customerData);
      document.getElementById("name").value = customer.name;
      document.getElementById("email").value = customer.email;
      document.getElementById("address").value = customer.address;
      document.getElementById("phone").value = customer.phone;
    }
  });
  placeOrderButton.addEventListener("click", function() {

    window.location.href = "thanhcong.html";
  });
 