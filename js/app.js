let shippingCharge = document.querySelector(".main__shipping > span");
let total = document.querySelector(".main__total > span");
const icons = document.querySelectorAll('.product__addremove i');
shippingCharge = getNumber(shippingCharge.innerText);
total = getNumber(total.innerText);
let subTotal = 0.00;

icons.forEach(icon => {
	icon.addEventListener('click', () => {	
		const curPriceNode = icon.parentNode.parentNode.querySelector('.product__price');
		const curPrice = getNumber(curPriceNode.innerText);
		let spanNode = icon.parentNode.querySelector('span');
		let spanValue = parseInt(spanNode.innerText);		
		if (icon.innerHTML === 'add') {
			spanValue += 1;
			if (subTotal > shippingCharge) {
				subTotal += parseFloat(curPrice);
			} else {				
				subTotal += parseFloat(shippingCharge) + parseFloat(curPrice);								
			}
		} else {
			if (spanValue > 0) {
				spanValue -= 1;				
				subTotal -= curPrice;					
				if (subTotal.toFixed(2) == shippingCharge)
				{
					subTotal = 0;	
				}
			}
		}
		spanNode.innerHTML = spanValue;	
		const output = subTotal == 0 ? subTotal.toString() : subTotal.toFixed(2);
		document.querySelector(".main__total > span").innerText = '$' + output;
    });
});

function getNumber(value)
{
	return  parseFloat(value.substring(1));		
}

function validateForm() {	
	alert('Thank you for your information');	
}
