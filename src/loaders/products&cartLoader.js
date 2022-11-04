import { getItemFromDb } from "../utilities/localDb";

export const productsAndCartLoaders = async () => {
    const productsData = await fetch('http://localhost:5000/products');
    const { products, count } = await productsData.json();


    const saveCart = getItemFromDb();

    const previousCart = [];
    for (const id in saveCart) {
        console.log(id)
        const addedProducts = products.find(product => product._id === id);
        if (addedProducts) {
            const quantity = saveCart[id];
            addedProducts.quantity = quantity;
            previousCart.push(addedProducts);
        }
    }
    return { products, previousCart, count };
}

