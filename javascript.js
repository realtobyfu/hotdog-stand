function read(){
  var hot = document.getElementById("hot");
  var h = hot.options[hot.selectedIndex].value;
  var fr = document.getElementById("fr");
  var f = fr.options[fr.selectedIndex].value;
  var sd = document.getElementById("sd");
  var s = sd.options[sd.selectedIndex].value;
  calculate(h, f, s);
}


function calculate (h, f, s) {
  var pH = 4.25, pF = 2.60, pD = 1.50;
  var tax, total, discount = 0, subtotal = pH * h + pF * f + pD * s;
  if (subtotal > 20) {
    discount = subtotal * .1;
  }
  subtotal = subtotal - discount;
  tax = subtotal * .0625;
  discount = Math.round(discount * 100) / 100;
  subtotal = Math.round(subtotal * 100) / 100;
  tax = Math.round(tax * 100) / 100;
  total = subtotal + tax;
  total = Math.round(total * 100) / 100;

  document.getElementById("hotdog").innerHTML = h + " Hotdogs";
  document.getElementById("fries").innerHTML = f + " French Fries";
  document.getElementById("soda").innerHTML = s + " Drinks";
  document.getElementById("subtotals").innerHTML = "Subtotal: $" + subtotal;
  document.getElementById("tax").innerHTML = "Tax: $" + tax;
  document.getElementById("total").innerHTML = "Final Total: $" + total;
  if (subtotal > 20) {
    document.getElementById("discount").innerHTML = "Discount(10%): $" + discount;
  }
}
