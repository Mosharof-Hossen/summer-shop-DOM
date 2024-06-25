document.getElementById("k-accessories-btn").addEventListener('click', () => {
    let itemName = getValueByID("k-accessories");
    let itemPrice = parseFloat(getValueByID("k-accessories-price")).toFixed(2);
    console.log(itemName, itemPrice);
    setProductName(itemName);
    setTotalPrice(itemPrice);
})