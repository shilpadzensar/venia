import React from 'react';
import Logo from './images/logo.svg';
import Hamburger from './images/hamburger.svg';
import Search from './images/search.svg';
import Cart from './images/shopping-bag.svg';
import Login from './images/user.svg';
import './Header.scss';

function Header() {
    return (
        <div className="container header-wrapper">
            <header>
                <img className="hamburger" id="hamburger" aria-hidden="true"
                    data-state="show" src={Hamburger} ></img>

                <img src={Logo} className="logo" alt="venia logo"/>              

                <ul className="nav-links">
                    <li><a href="/">Women</a></li>
                    <li><a href="/">Men</a></li>
                    <li><a href="/">Smart Gear</a></li>
                    <li><a href="/">Accessories</a></li>
                </ul>
                
                <span className="show-lg"><img className="search" src={Search} alt="Click here to search"/>
                Search</span>
                <span className="show-lg"><img className="sign_in"  src={Login} alt="click here to login"/>
                Sign In
                </span>
                <img className="search show-xs" src={Search} alt="Click here to search"/>
                <img className="cart"  src={Cart} alt="click here to go to cart"/>
               
            </header>
        </div>
    );
}
export default Header;