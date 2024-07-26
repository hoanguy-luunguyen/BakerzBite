function addToCart(name, image, price) {
  var sizeSelect = document.getElementById('size-6');
  var selectedSize = sizeSelect.options[sizeSelect.selectedIndex].value;
  var newItem = {
    name: name,
    image: image,
    price: price,
    size: selectedSize
  };
  var cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : [];
  var existingItem = cartItems.find(function(item) {
    return item.name === newItem.name && item.size === newItem.size;
  });

  if (existingItem) {
    alert('Sản phẩm này đã có trong giỏ hàng!!');
  } else {
    cartItems.push(newItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Thêm sản phẩm vào giỏ hàng thành công <3');
  }
  setTimeout(function() {
    window.location.href = "cart.html";
  }, 1000);
}