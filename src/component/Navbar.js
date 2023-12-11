import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss'; // Import the CSS file
import { cartCount } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';
import Loading from './Loading';

function Navbar() {
    const location = useLocation();
    const [url, setUrl] = React.useState(null);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setUrl(location.pathname);
        const handleEsc = (event) => {
            if (event.keyCode === 27) setIsOpen(false);
        };
        document.addEventListener('keydown', handleEsc);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [location]);

    const cart = useSelector((state) => state.cart);
    const totalItems = cartCount(cart);

    return (
        <>
        <Loading />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-2 mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand link-secondary py-0">Den Noerdede ArtShop</Link>

                    <div className="col justify-content-end text-end">
                        <div className="position-relative cart-styling">
                            <button className="navbar-toggler me-3 d-inline border-0 link-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
                                <i className="fa fa-bars fs-4"></i>
                            </button>
                            <Link to="/cart" className={"text-decoration-none link-" + (url === "/cart" ? "light" : "secondary")}>
                                <i className="fas fa-shopping-cart fs-4"></i>
                                <span className={"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" + (totalItems > 0 ? " opacity-100" : " opacity-0")}>
                                    <span id='cart-count'>{totalItems}</span>
                                    <span className="visually-hidden">items in cart</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`fullscreen-menu ${isOpen ? 'open' : ''}`}>
                <button className="close-button" onClick={() => setIsOpen(false)}>X</button>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className={"nav-link text-decoration-none link-" + (url === "/" ? "light" : "secondary")} >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className={"nav-link text-decoration-none link-" + (url === "/about" ? "light" : "secondary")}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/shop" className={"nav-link text-decoration-none link-" + (url === "/shop" ? "light" : "secondary")}>Shop</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;