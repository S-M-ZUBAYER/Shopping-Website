import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Order = () => {
    const { products, previousCart } = useLoaderData(); //{ products, previousCart } will be return from useLoaderData()
    const [cart, setCart] = useState(previousCart)
    return (
        <div className='shopping-container'>
            <div className="Orders-container">
                {cart.map(product => <OrderReview
                    key={product.id}
                    product={product}
                ></OrderReview>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;