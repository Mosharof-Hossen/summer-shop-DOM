function getValueByID(ID) {
    return document.getElementById(ID).innerText;
}

function setProductName(product) {
    let parent = document.getElementById('card-item-list');
    let p = document.createElement("p");
    console.log(parent.childElementCount);
    p.classList.add('text-xl','font-medium');
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
}