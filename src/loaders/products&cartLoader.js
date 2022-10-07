import { getItemFromDb } from "../utilities/localDb";

export const productsAndCartLoaders = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();


    const saveCart = getItemFromDb();
    const previousCart = [];
    for (const id in saveCart) {
        const addedProducts = products.find(product => product.id === id);
        if (addedProducts) {
            const quantity = saveCart[id];
            addedProducts.quantity = quantity;
            previousCart.push(addedProducts);
        }
    }
    return { products, previousCart };
}

