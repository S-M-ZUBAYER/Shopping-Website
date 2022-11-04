import React from 'react';
import "./OrderReview.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const OrderReview = ({ product, handler }) => {
    const { id, name, price, quantity, img, shipping } = product;
    return (
        <div className='review-container'>
            <div className='review-items'>
                <img src={img} alt="" />
            </div>
            <div className='details-container'>
                <div className='detail-info'>
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>ShippingCost: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => { handler(id) }} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash} />
                    </button>
                </div>
            </div>

        </div>


    );
};

export default OrderReview;