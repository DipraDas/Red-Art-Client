import React, { useContext, useState } from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('dsgsd')
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL, email, password);
        setError('');

        createUser(email, password)
            .then(result => {
                handleUpdateUser(name,photoURL);
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
            })
    }

    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile);

    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} className="mt-16">
            <div className="card card-compact w-96 bg-base-100 shadow-xl py-5">
                <div style={{ boxShadow: '0px 0px 8px 1px inset #ff6868', backgroundImage: 'linear-gradient(to bottom right, #000, #2e0000cf)', padding: '1.2rem' }} className="card-body">
                    <img style={{ width: '180px' }} src={logo} alt="Shoes" />
                    <h1 style={{ fontSize: '35px', marginTop: '10px' }} className="card-title">Sign Up</h1>
                    <p>Already Registered? <Link className='text-blue-500 underline underline-offset-2' to='/login'>Login</Link></p>
                    <form onSubmit={handleSubmit}>
                        <label className='mt-3' htmlFor="">Name</label><br />
                        <input name='name' type="text" placeholder="Enter your name" className="input input-bordered w-full mb-3" required/><br />
                        <label className='mt-3' htmlFor="">Photo</label><br />
                        <input name='photo' type="text" placeholder="Enter your photoUrl" className="input input-bordered w-full mb-3" required/><br />
                        <label className='mt-3' htmlFor="">Email</label><br />
                        <input name='email' type="email" placeholder="Enter your email" className="input input-bordered w-full mb-3" required/><br />
                        <label className='mt-2' htmlFor="">Password</label><br />
                        <input name='password' type="password" placeholder="Enter your password" className="input input-bordered w-full" required/>
                        <div className="card-actions">
                            <button style={{ border: '1px solid #ff6868', backgroundColor: '#000', textTransform: 'uppercase', boxShadow: '0px 0px 5px 0px inset #ff6868' }} className="btn btn-block mt-5">Register</button>
                        </div>
                    </form>
                    <p className='label-text-alt text-red-600'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;