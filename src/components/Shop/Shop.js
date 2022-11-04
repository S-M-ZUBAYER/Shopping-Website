import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, clearCartFromBDb, getItemFromDb } from '../../utilities/localDb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'


const Shop = () => {
    // const { products, count } = useLoaderData(); //{ products, previousCart } will be return from useLoaderData()
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setProducts(data.products)
            })
    }, [page, size])

    const pages = Math.ceil(count / size);

    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    const clearCart = () => {
        setCart([]);
        clearCartFromBDb();
    }

    useEffect(() => {
        const storeCart = getItemFromDb();
        console.log(storeCart)
        let saveCart = [];
        const ids = Object.keys(storeCart);
        fetch('http://localhost:5000/productsByIds', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                for (const id in storeCart) {
                    const productInfo = data.find(product => product._id === id)
                    if (productInfo) {
                        const quantity = storeCart[id];
                        productInfo.quantity = quantity;
                        saveCart.push(productInfo);
                    }
                }
            }
            )

        setCart(saveCart);
    }, [products])


    // const [cart, setCart] = useState([]);




    const handlerAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product._id === selectedProduct._id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div className='shopping-container'>
            <div className="products-container">
                {products.map(product => <Product
                    key={product._id}
                    product={product}
                    handler={handlerAddToCart}></Product>)}
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/order"><button>Review Items</button></Link>
                </Cart>
            </div>
            <div className="pagination">
                <p>Currently selected page: {page}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={page === number ? 'selected' : ''}
                        onClick={() => setPage(number)}
                    >{number + 1}</button>)
                }
                <select onChange={(event) => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;

