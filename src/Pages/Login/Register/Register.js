import React from 'react';
import logo from '../../../assets/logo.png';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} className="mt-16">
            <div className="card card-compact w-96 bg-base-100 shadow-xl py-5">
                <div style={{ boxShadow: '0px 0px 8px 1px inset #ff6868', backgroundImage: 'linear-gradient(to bottom right, #000, #2e0000cf)', padding: '1.2rem' }} className="card-body">
                    <img style={{ width: '180px' }} src={logo} alt="Shoes" />
                    <h1 style={{ fontSize: '35px', marginTop: '10px' }} className="card-title">Sign Up</h1>
                    <p>Already Registered? <Link className='text-blue-500 underline underline-offset-2' to='/login'>Login</Link></p>
                    <label className='mt-3' htmlFor="">Email</label>
                    <input type="email" placeholder="Enter your email" className="input input-bordered" />
                    <label className='mt-2' htmlFor="">Password</label>
                    <input type="email" placeholder="Enter your password" className="input input-bordered " />
                    <div className="card-actions">
                        <button style={{ border: '1px solid #ff6868', backgroundColor: '#000', textTransform: 'uppercase', boxShadow: '0px 0px 5px 0px inset #ff6868' }} className="btn btn-block mt-5">Register</button>
                    </div>
                    <div className="googleGithub flex justify-between">
                        <div className='w-full'><button className="btn btn-outline btn-block mt-1 uppercase"><FaGoogle className='mr-2'></FaGoogle>Google Sign In</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;