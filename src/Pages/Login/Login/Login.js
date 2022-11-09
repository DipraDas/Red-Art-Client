import React, { useContext, useState } from 'react';
import logo from '../../../assets/logo.png';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn, googleLogin, } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const nevigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        setError('');

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                nevigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                nevigate(from, { replace: true });
            })
            .catch(error => console.error('error', error))
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} className="mt-16">
            <div className="card card-compact w-96 bg-base-100 shadow-xl py-5">
                <div style={{ boxShadow: '0px 0px 8px 1px inset #ff6868', backgroundImage: 'linear-gradient(to bottom right, #000, #2e0000cf)', padding: '1.2rem' }} className="card-body">
                    <img style={{ width: '180px' }} src={logo} alt="Shoes" />
                    <h1 style={{ fontSize: '35px', marginTop: '10px' }} className="card-title">Sign In</h1>
                    <p>Do you have an account? <Link className='text-blue-500 underline underline-offset-2' to='/register'>Register</Link></p>
                    <form onSubmit={handleSubmit}>
                        <label className='mt-3' htmlFor="">Email</label> <br />
                        <input name='email' type="email" placeholder="Enter your email" className="input input-bordered w-full mb-3" required/><br />
                        <label className='mt-4' htmlFor="">Password</label><br />
                        <input name='password' type="password" placeholder="Enter your password" className="input input-bordered w-full" required/><br />
                        <div className="card-actions">
                            <button style={{ border: '1px solid #ff6868', backgroundColor: '#000', textTransform: 'uppercase', boxShadow: '0px 0px 5px 0px inset #ff6868' }} className="btn btn-block mt-5">Sign In</button>
                        </div>
                    </form>
                    <div className="googleGithub flex justify-between">
                        <div className='w-full'><button onClick={handleGoogleSignIn} className="btn btn-outline btn-block mt-1 uppercase"><FaGoogle className='mr-2'></FaGoogle>Google Sign In</button></div>
                    </div>
                    <p>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;