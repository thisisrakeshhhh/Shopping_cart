let total = 0;
let elements = 0;
let product = 0;
function addtocart(a,b){
    product += 1;
    total = a * product;
    document.getElementById("showproduct").innerHTML = "No of products: " + product;
    document.getElementById("Total").innerHTML = "Total: ₹" + total;
}

