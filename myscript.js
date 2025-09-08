    var product1 = 0;
    var product2 = 0;
    var product3 = 0;
    var total = 0;

    function updateTotal() {
      document.getElementById("Total").innerHTML = "Total: ₹" + total;
    }

    function addtocart1(name, price) {
      product1++;
      total += price;
      document.getElementById("showproduct1").innerHTML = "No of " + name + ": " + product1;
      document.getElementById("itemadded1").innerHTML = name + " | Price: ₹" + price;
      updateTotal();
    }
    function remove1(name, price) {
      if (product1 > 0) {
        product1--;
        total -= price;
        document.getElementById("showproduct1").innerHTML = "No of " + name + ": " + product1;
        if (product1 === 0) document.getElementById("itemadded1").innerHTML = "";
        updateTotal();
      }
    }

    function addtocart2(name, price) {
      product2++;
      total += price;
      document.getElementById("showproduct2").innerHTML = "No of " + name + ": " + product2;
      document.getElementById("itemadded2").innerHTML = name + " | Price: ₹" + price;
      updateTotal();
    }
    function remove2(name, price) {
      if (product2 > 0) {
        product2--;
        total -= price;
        document.getElementById("showproduct2").innerHTML = "No of " + name + ": " + product2;
        if (product2 === 0) document.getElementById("itemadded2").innerHTML = "";
        updateTotal();
      }
    }

    function addtocart3(name, price) {
      product3++;
      total += price;
      document.getElementById("showproduct3").innerHTML = "No of " + name + ": " + product3;
      document.getElementById("itemadded3").innerHTML = name + " | Price: ₹" + price;
      updateTotal();
    }
    function remove3(name, price) {
      if (product3 > 0) {
        product3--;
        total -= price;
        document.getElementById("showproduct3").innerHTML = "No of " + name + ": " + product3;
        if (product3 === 0) document.getElementById("itemadded3").innerHTML = "";
        updateTotal();
      }
    }