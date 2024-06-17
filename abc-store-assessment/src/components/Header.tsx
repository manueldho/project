import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../redux/store';
import { ReactComponent as StoreIcon } from '../assets/store-icon.svg';
import { ReactComponent as CartIcon } from '../assets/cart-icon.svg';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';
import { ReactComponent as AccountPersona } from '../assets/account-persona.svg';
import './Header.css';
import { setProducts } from "../redux/slices/productSlice";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const cartItemsCount = useSelector((state: RootState) => state.cart.items.length);
    let productsList = useSelector((state: RootState) => state.products.products)
    const location = useLocation();

    const isHomePage = () => {
        return location.pathname === '/';
    };

    const handleFilterClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        if (productsList) {
            if (selectedOption === 'lowToHigh') {
                let lowToHigh = [...productsList].sort((a, b) => a.price - b.price);
                dispatch(setProducts(lowToHigh));
            } else if (selectedOption === 'highToLow') {
                let highToLow = [...productsList].sort((a, b) => b.price - a.price);
                dispatch(setProducts(highToLow));
            }
        }
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        if (value) {
            let filteredProducts = productsList.filter(product => product.title.toLowerCase().includes(value.toLowerCase()));
            if (filteredProducts.length > 0) {
                dispatch(setProducts(filteredProducts));
            } 
        }
    }

    return (
        <>
            <header className="header">
                <nav className="nav">
                    <div className="nav-left">
                        <StoreIcon className="store-icon" />
                        <Link to="/" className="nav-link">STORE</Link>
                        <Link to="/" className={`nav-link ${isHomePage() ? 'active' : ''}`}>Home</Link>
                        <div className="dropdown">
                            <button className="dropdown-button">Categories
                                <svg className="dropdown-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div className="dropdown-content">
                                <Link to="/category/men" className="dropdown-item">Men</Link>
                                <Link to="/category/women" className="dropdown-item">Women</Link>
                                <Link to="/category/electronics" className="dropdown-item">Electronics</Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="search-container">
                            <input type="text" className="search-input" value={searchTerm} onChange={handleSearch} />
                            <SearchIcon className="search-icon" />
                        </div>

                        <div className="sort-container">
                            <select className="sort-select" onChange={handleFilterClick}>
                                <option value="">Sort By: Featured</option>
                                <option value="lowToHigh">Price: Low to High</option>
                                <option value="highToLow">Price: High to Low</option>
                            </select>
                        </div>
                        <Link to="/cart" className="nav-link cart-link">
                            <CartIcon className="cart-icon" />
                            <span className="cart-count">{cartItemsCount}</span>
                        </Link>
                        <AccountPersona className="persona-icon" />
                    </div>
                </nav>
            </header>
            <div className="promo-banner">
                <p className="promo-text">Sale up to 50%. Hurry! Limited period offer Shop Now</p>
            </div>
        </>
    );
}

export default Header;
