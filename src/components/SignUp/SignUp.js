import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css'

const SignUp = () => {
    const { createAccount } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (password.length < 6) {
            setError('Please input at least 6 digit password');
            return;
        }
        if (password !== confirm) {
            setError("Your password didn't match");
            return;
        }
        createAccount(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => { console.error(error) })
    }
    return (
        <div className="form-container">
            <h1 className="form-title">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Enter Your Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Enter Your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='Confirm Your password' required />
                </div>
                <input className="btn-submit" type="submit" value="Sign Up" />
            </form>

            <p>Already Have An Account <Link to='/login'>Log In</Link></p>
            <p><small className="error">{error}</small></p>
        </div>
    );
};

export default SignUp;