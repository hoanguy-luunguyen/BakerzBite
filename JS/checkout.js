
var cartItems = localStorage.getItem('cartItems');
cartItems = cartItems ? JSON.parse(cartItems) : [];
var cartItemsContainer = document.getElementById('cartItems');
cartItems.forEach(function (item, index) {
  var row = document.createElement('tr');

  var imageCell = document.createElement('td');
  var itemImage = document.createElement('img');
  itemImage.src = item.image;
  itemImage.alt = '';
  imageCell.appendChild(itemImage);

  var nameCell = document.createElement('td');
  var itemName = document.createElement('p');
  itemName.textContent = item.name;
  nameCell.appendChild(itemName);

  var priceCell = document.createElement('td');
  var itemPrice = document.createElement('p');
  itemPrice.textContent = item.price + '$';
  priceCell.appendChild(itemPrice);

  var sizeCell = document.createElement('td');
  var itemSize = document.createElement('p');
  itemSize.textContent = item.size;
  sizeCell.appendChild(itemSize);

  var quantityCell = document.createElement('td');
  var itemQuantity = document.createElement('p');
  itemQuantity.textContent = 'Quantity: ' + item.quantity;
  quantityCell.appendChild(itemQuantity);

  row.appendChild(imageCell);
  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(sizeCell);
  row.appendChild(quantityCell);

  cartItemsContainer.appendChild(row);
});