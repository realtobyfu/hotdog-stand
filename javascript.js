var h, f, s;
h = prompt("How many hotdogs do you want?");
f = prompt("How many fries do you want?"); 
s = prompt("How many sodas do you want?");
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
