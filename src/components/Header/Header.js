import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className='nav'>
            <img src={logo} alt="" />
            <div className='navBar'>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ? <button className="btn-logout" onClick={logOut}>Log Out</button> :
                    <>
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;