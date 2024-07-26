
  var cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : [];


  var cartItemsContainer = document.getElementById('cartItems');
  var totalAmount = 0;

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
    var quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = item.quantity || 1; 
    quantityInput.addEventListener('change', function () {
      var newQuantity = parseInt(this.value);
      var newPrice = newQuantity * item.price;
      item.quantity = newQuantity;
      itemPrice.textContent = newPrice + '$';
      calculateTotalAmount(); 
      updateCartItems(); 
    });
    quantityCell.appendChild(quantityInput);

    var actionCell = document.createElement('td');
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
      cartItems.splice(index, 1); 
      row.remove(); 
      calculateTotalAmount(); 
      updateCartItems(); 
    });
    actionCell.appendChild(removeButton);

    row.appendChild(imageCell);
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(sizeCell);
    row.appendChild(quantityCell);
    row.appendChild(actionCell);

    cartItemsContainer.appendChild(row);
    totalAmount += item.price * (item.quantity || 1); 
  });


  var totalAmountElement = document.getElementById('totalAmount');
  totalAmountElement.textContent = totalAmount + '$';

  function calculateTotalAmount() {
    totalAmount = 0;
    cartItems.forEach(function (item) {
      totalAmount += item.price * (item.quantity || 1);
    });
    totalAmountElement.textContent = totalAmount + '$';
  }

  function updateCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }