import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeItemFromDb } from '../../utilities/localDb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Order = () => {
    const { products, previousCart } = useLoaderData(); //{ products, previousCart } will be return from useLoaderData()
    const [cart, setCart] = useState(previousCart);
    const deleteHandler = (id) => {
        const remainingProducts = cart.filter(remain => remain.id !== id);
        setCart(remainingProducts);
        removeItemFromDb(id);
    }
    return (
        <div className='shopping-container'>
            <div className="Orders-container">
                {cart.map(product => <OrderReview
                    key={product.id}
                    product={product}
                    handler={deleteHandler}
                ></OrderReview>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;