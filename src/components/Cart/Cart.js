import React from 'react';
import './Cart.css'

const Cart = ({ cart, clearCart, children }) => {
    let total = 0;
    let shoppingCost = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + (product.price) * product.quantity;
        shoppingCost = shoppingCost + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shoppingCost + tax;

    return (
        <div className='cart'>
            <div>
                <h2 className='summery'>Order summery</h2>
            </div>
            <div className='cost-section'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shopping: ${shoppingCost}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
            <div>
                <button onClick={clearCart} className='clear-cart'>Clear Cart</button>
            </div>
            {children}


        </div>
    );
};

export default Cart;



