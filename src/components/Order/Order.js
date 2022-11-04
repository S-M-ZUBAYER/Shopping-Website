import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { clearCartFromBDb, removeItemFromDb } from '../../utilities/localDb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Order = () => {
    const { previousCart } = useLoaderData(); //{ products, previousCart } will be return from useLoaderData()
    const [cart, setCart] = useState(previousCart);
    console.log(previousCart)

    const clearCart = () => {

        setCart([]);
        clearCartFromBDb();
    }
    const deleteHandler = (id) => {
        const remainingProducts = cart.filter(remain => remain._id !== id);
        removeItemFromDb(id);
        setCart(remainingProducts);
    }

    return (
        <div className='shopping-container'>
            <div className="Orders-container">
                {cart.map(product => <OrderReview
                    key={product._id}
                    product={product}
                    handler={deleteHandler}
                ></OrderReview>)}
                {cart.length === 0 && <h1>No review products are available. Please <Link to="/">order more</Link></h1>}
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to="/shipping"><button>Process Shipping</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;