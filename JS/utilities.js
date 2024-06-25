function getValueByID(ID) {
    return document.getElementById(ID).innerText;
}

function setProductName(product) {
    let parent = document.getElementById('card-item-list');
    let p = document.createElement("p");
    p.classList.add('text-xl', 'font-medium');
    p.innerHTML = `
    ${parent.childElementCount + 1}. ${product}
    `
    parent.appendChild(p);
}

function setTotalPrice(price) {
    let totalPriceElement = document.getElementById("total-price");
    let totalPrice = parseFloat(getValueByID('total-price')).toFixed(2);
    let finalPrice = parseFloat(parseFloat(totalPrice) + parseFloat(price)).toFixed(2);
    totalPriceElement.innerText = finalPrice;
    document.getElementById('total').innerText = finalPrice;
}

function buttonActivator() {
    let totalPriceElement = document.getElementById("card-item-list");
    let totalPrice = getValueByID('total-price');
    let makePurchase = document.getElementById("make-purchase");
    let applyBtn = document.getElementById('apply');
    if (totalPriceElement.childElementCount > 0) {
        makePurchase.classList.remove('btn-disabled');
    }
    if (parseInt(totalPrice) > 200) {
        applyBtn.classList.remove("btn-disabled");
    }
}

function discountApply() {
    let totalPrice = parseFloat(getValueByID('total-price'));
    let coupon = document.getElementById('coupon-input').value;

    if (coupon === 'SELL200') {
        let discount = (20 * totalPrice) / 100;
        document.getElementById('discount').innerText = parseFloat(discount).toFixed(2);
        document.getElementById('total').innerText = parseFloat(totalPrice - discount).toFixed(2);
    } else {
        alert("Wrong Coupon. Coupon is: SELL200")
    }

}