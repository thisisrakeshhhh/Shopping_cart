let total = 0;
let elements = 0;
let product = 0;
function addtocart(){
    product += 1;
    total = 45000 * product;
    document.getElementById("showproduct").innerHTML = "No of products: " + product;
    document.getElementById("Total").innerHTML = "Total: ₹" + total;
}

