let shoppingCart = {};
const addToDb = (id) => {
    const shoppingCart = getItemFromDb()
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}
const getItemFromDb = () => {

    const storeData = localStorage.getItem('shoppingCart');
    if (storeData) {
        shoppingCart = JSON.parse(storeData)
    }
    return shoppingCart;
}

export { addToDb, getItemFromDb }