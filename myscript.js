var product1 = 0;
var product2 = 0;
var product3 = 0;
var total = 0;

function updateTotal() {
    document.getElementById("Total").innerHTML = "Total: ₹" + total;
}

function addToCart(id, name, price) {
    if (id === 1 && product1 === 0) {
        product1 = 1;
        total += price;
        document.getElementById("cart1").innerHTML = `
          ${name} | Price: ₹${price}
          <button class="btn" onclick="increase(1, ${price}) class = 'btn' ">+</button>
          <button class="btn" onclick="decrease(1, ${price}) class = 'btn' ">-</button>
          <span id="qty1">Qty: ${product1}</span>
        `;
    } else if (id === 2 && product2 === 0) {
        product2 = 1;
        total += price;
        document.getElementById("cart2").innerHTML = `
          ${name} | Price: ₹${price} 
          <button class="btn" onclick="increase(2, ${price})">+</button>
          <button class="btn" onclick="decrease(2, ${price})">-</button>
          <span id="qty2">Qty: ${product2}</span>
        `;
    } else if (id === 3 && product3 === 0) {
        product3 = 1;
        total += price;
        document.getElementById("cart3").innerHTML = `
          ${name} | Price: ₹${price} 
          <button class="btn" onclick="increase(3, ${price})">+</button>
          <button class="btn" onclick="decrease(3, ${price})">-</button>
          <span id="qty3">Qty: ${product3}</span>
        `;
    }
    updateTotal();
}

function increase(id, price) {
    if (id === 1) {
        product1++;
        total += price;
        document.getElementById("qty1").innerHTML = "Qty: " + product1;
    } else if (id === 2) {
        product2++;
        total += price;
        document.getElementById("qty2").innerHTML = "Qty: " + product2;
    } else if (id === 3) {
        product3++;
        total += price;
        document.getElementById("qty3").innerHTML = "Qty: " + product3;
    }
    updateTotal();
}


function decrease(id, price) {
    if (id === 1 && product1 > 0) {
        product1--;
        total -= price;
        document.getElementById("qty1").innerHTML = "Qty: " + product1;
        if (product1 === 0) document.getElementById("cart1").innerHTML = "";
    } else if (id === 2 && product2 > 0) {
        product2--;
        total -= price;
        document.getElementById("qty2").innerHTML = "Qty: " + product2;
        if (product2 === 0) document.getElementById("cart2").innerHTML = "";
    } else if (id === 3 && product3 > 0) {
        product3--;
        total -= price;
        document.getElementById("qty3").innerHTML = "Qty: " + product3;
        if (product3 === 0) document.getElementById("cart3").innerHTML = "";
    }
    updateTotal();
}