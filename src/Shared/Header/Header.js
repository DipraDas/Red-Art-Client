import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error('error', error))
    }
    return (
        <div className="navbar bg-base-100 py-4 tracking-wide lg:px-20 sm:px-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <img className='md:block sm: hidden' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            {/* <Link href="#deets">{user?.displayName}</Link> */}
                            <div>
                                {
                                    user?.photoURL ?
                                        <div title={user.displayName} className="avatar ">
                                            <div className="w-8 rounded-full">
                                                <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                            </div>
                                        </div>
                                        :
                                        <FaUserAlt title={user.displayName} />
                                }
                            </div>
                            <button className='btn btn-error my-2 mr-8 ml-5 uppercase' onClick={handleLogOut} variant="primary">Log out</button>
                        </>
                        :
                        <>
                            <button className="btn btn-outline btn-error uppercase tracking-wide"><Link to='/login'>Login</Link></button>                            </>
                }
            </div>
        </div>
    );
};

export default Header;