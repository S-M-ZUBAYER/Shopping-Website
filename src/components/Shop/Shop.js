import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getItemFromDb } from '../../utilities/localDb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    useEffect(() => {
        const storeCart = getItemFromDb();
        let saveCart = [];
        for (const id in storeCart) {
            const productInfo = products.find(product => product.id === id)
            if (productInfo) {
                const quantity = storeCart[id];
                productInfo.quantity = quantity;
                saveCart.push(productInfo);
            }
        }
        setCart(saveCart);
    }, [products])


    const [cart, setCart] = useState([]);

    const handlerAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }


        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shopping-container'>
            <div className="products-container">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handler={handlerAddToCart}></Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;