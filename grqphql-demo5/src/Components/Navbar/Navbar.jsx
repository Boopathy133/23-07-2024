import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className="container-left">
                    Shop Name
                </div>
                <div className="container-right">
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <Link style={{textDecoration: "none"}} to='/blogs'><li>Blogs</li></Link>
                        <li>My cart</li>
                        <li>My wishlist</li>
                        <li>My Order</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar