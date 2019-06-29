
var appleQuantity= 0;
var orangeQuanity= 0;
var bananaQuanity= 0;
var haveCash= 0;
var totalAmount= 0;
var purchaseThings= 0;

function haveMoney () {
	document.querySelector('.haveM0oney').value;
	}
	
	function totalBill() {
   document.querySelector(".h3").innerHTML = totalBill;
}
function addApple(){
    if (haveMoney >= 10) {
        appleQuantity += 1;
        purchase += 10;
        haveMoney = haveMoney - purchase;
        totalBill = purchase + totalBill;
        purchase = 0;
        document.querySelector(".app-quantity").value = appleQuantity;