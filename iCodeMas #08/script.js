// product A
var minus_A = document.querySelector("#product_A_form .btn-subtract")
var add_A = document.querySelector("#product_A_form .btn-add");
var quantity_A = document.querySelector("#product_A_form .item-quantity");

minus_A.addEventListener("click", function(){
    quantity_A.value--;
});

add_A.addEventListener("click", function() {
    quantity_A.value++;
});

// product B
var minus_B = document.querySelector("#product_B_form .btn-subtract")
var add_B = document.querySelector("#product_B_form .btn-add");
var quantity_B = document.querySelector("#product_B_form .item-quantity");

// includes button minus disablement if at minimum or below
const minimum = 0;

minus_B.addEventListener("click", function(){
    if (quantity_B.value <= minimum) {
      minus_B.disabled = true;
      return; // return to avoid decrementing
    } else {
      minus_B.disabled = false;
    }
    quantity_B.value--;
});

add_B.addEventListener("click", function() {
    if (quantity_B.value > minimum) {
      minus_B.disabled = false;
    }
    quantity_B.value++;
});