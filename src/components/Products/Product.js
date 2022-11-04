import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, price, ratings, seller } = props.product;

    return (
        <div className='product-card'>
            <img src={img ? img : 'not available'} alt="" />
            <div className='product-info'>
                <p className='name'>{name}</p>
                <p>Price: {price}</p>
                <p><small>Manufacture: </small>{seller}</p>
                <p className='rate'><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => { props.handler(props.product) }} className='btn'>
                <p className='btn-p'>Add To Cart </p>
                <FontAwesomeIcon icon={faCartShopping} />
            </button>


        </div>
    );
};

export default Product;





