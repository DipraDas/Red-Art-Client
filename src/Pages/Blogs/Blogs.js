import React from 'react';
import bar from '../../assets/home/bar-line.png';
import blog from '../../assets/blog/blog.jpg';

const Blogs = () => {
    return (
        <div>
            <div className="container mx-auto px-10 py-10 text-center">
                <h2 className='text-6xl mb-3 font-semibold text-gray-100'><span style={{ color: 'red' }}>Blog</span> Details</h2>
                <img className='m-auto' src={bar} alt="" />
                <img className='mx-auto py-10' src={blog} alt="" />
                <div className='text-left py-10'>
                    <div className='text-4xl' style={{ color: 'red' }}>1.<span className='text-gray-300'> Difference between SQL and NoSQL</span> </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-3/4 m-auto mt-10">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>SQL</th>
                                        <th>NoSQL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>RELATIONAL DATABASE MANAGEMENT SYSTEM.</td>
                                        <td>Non-relational or distributed database system.</td>
                                    </tr>
                                    <tr className="active">
                                        <th>2</th>
                                        <td>These databases have fixed or static or predefined schema</td>
                                        <td>They have dynamic schema</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>These databases are not suited for hierarchical data storage.</td>
                                        <td>These databases are best suited for hierarchical data storage.</td>
                                    </tr>
                                    <tr className="active">
                                        <th>4</th>
                                        <td>These databases are best suited for complex queries</td>
                                        <td>These databases are not so good for complex queries</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td>Vertically Scalable</td>
                                        <td>Horizontally scalable</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='text-left py-8'>
                    <div className='text-4xl mb-8' style={{ color: 'red' }}>2.<span className='text-gray-300'> What is JWT, and how does it work?</span> </div>
                    <div>
                        <div className='leading-9 text-gray-400'>JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.</div>
                        <div className='leading-9 text-gray-400'>Basically the identity provider, generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. User sign-in using username and password or google/facebook.
                            Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                            User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                            Resource server then verifies the authenticity of the token using the secret salt/ public key.</div>
                    </div>
                </div>
                <div className='text-left py-8'>
                    <div className='text-4xl mb-8' style={{ color: 'red' }}>3.<span className='text-gray-300'> What is the difference between javascript and NODE Js?</span> </div>
                    <div>
                        <div className='leading-9 text-gray-400'>JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.</div>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table w-3/4 m-auto mt-10">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Java Script</th>
                                            <th>Node JS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                            <td>NodeJS is a Javascript runtime environment.</td>
                                        </tr>
                                        <tr className="active">
                                            <th>2</th>
                                            <td>It is basically used on the client-side.</td>
                                            <td>It is mostly used on the server-side.</td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td>Javascript can only be run in the browsers.</td>
                                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                                        </tr>
                                        <tr className="active">
                                            <th>4</th>
                                            <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                            <td>Nodejs does not have capability to add HTML tags.</td>
                                        </tr>
                                        <tr>
                                            <th>5</th>
                                            <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                                            <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-left py-8'>
                    <div className='text-4xl mb-8' style={{ color: 'red' }}>4.<span className='text-gray-300'> How does NodeJS handle multiple request at the same time?</span> </div>
                    <div>
                        <div className='leading-9 text-gray-400'>NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;