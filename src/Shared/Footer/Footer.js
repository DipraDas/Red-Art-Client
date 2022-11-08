import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div>
                <div className="grid grid-flow-col">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="grid grid-flow-col gap-4">
                <Link>Home</Link>
                <Link>Services</Link>
                <Link>Blog</Link>
            </div>
            <p>Copyright © 2022 - All right reserved by redART</p>
        </footer>
    )
};

export default Footer;