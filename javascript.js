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
  var tax, total, discount = 0, subtotal = 4.25 * h + 2.6 * f + 1.5 * s;
  if (subtotal > 20) {
    discount = subtotal * .1;
  }
  total = subtotal - discount;
  tax = subtotal * .0625;
  discount = discount.toFixed(2);
  subtotal = subtotal.toFixed(2);
  tax = tax.toFixed(2);
  total = total.toFixed(2);

  document.getElementById("hotdog").innerHTML = h + " Hotdogs";
  document.getElementById("fries").innerHTML = f + " French Fries";
  document.getElementById("soda").innerHTML = s + " Drinks";
  document.getElementById("subtotals").innerHTML = "Subtotal: $" + subtotal;
  document.getElementById("tax").innerHTML = "Tax: $" + tax;
  document.getElementById("total").innerHTML = "Final Total: $" + total;
  if (subtotal > 20) {
    document.getElementById("discount (10%)").innerHTML = "Discount: $" + discount;
  }
}