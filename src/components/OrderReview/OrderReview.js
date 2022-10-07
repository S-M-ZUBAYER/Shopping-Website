import React from 'react';
import "./OrderReview.css"

const OrderReview = ({ product }) => {
    const { name, price, quantity, img } = product;
    return (
        <div className='review-container'>
            <div className='review-items'>
                <img src={img} alt="" />
            </div>
            <div className='details-container'>
                <div className='detail-info'>
                    <p>{name}</p>
                    <p><small>Price:{price}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button>Delete</button>
                </div>
            </div>
        </div>


    );
};

export default OrderReview;