var product1 = 0;
var product2 = 0;
var product3 = 0;
var total = 0;

function addtocart1(name, price){
    product1++;
    total += price;
    document.getElementById("showproduct1").innerHTML = "No of products: " + product1 + "" + name;
    document.getElementById("Total").innerHTML = "Total: ₹" + total;
    // alert("Item added to cart");
    document.getElementById("itemadded1").innerHTML = name + "Price: ₹" + price;
}

function addtocart2(name, price){
    product2 = 1;
    total += price;
    document.getElementById("showproduct2").innerHTML = "No of products: " + product2 + "" + name;
    document.getElementById("Total").innerHTML = "Total: ₹" + total;
    // alert("Item added to cart");
    document.getElementById("itemadded2").innerHTML = name + "Price: ₹" + price;
}

function addtocart3(name, price){
    product3 = 1;
    total += price;
    document.getElementById("showproduct3").innerHTML = "No of products: " + product3 + "" + name;
    document.getElementById("Total").innerHTML = "Total: ₹" + total;
    // alert("Item added to cart");
    document.getElementById("itemadded3").innerHTML = name + "Price: ₹" + price;
}