let shoppingCart = {};
const getItemFromDb = () => {

    const storeData = localStorage.getItem('shoppingCart');
    if (storeData) {
        shoppingCart = JSON.parse(storeData)
    }
    return shoppingCart;
}

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





const removeItemFromDb = id => {
    const storedData = localStorage.getItem('shoppingCart');
    if (storedData) {
        const shoppingCart = JSON.parse(storedData);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        }
    }
}


const clearCartFromBDb = () => {
    localStorage.removeItem('shoppingCart');
}



export { addToDb, getItemFromDb, removeItemFromDb, clearCartFromBDb }