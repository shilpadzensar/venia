import React, { useState } from 'react';
import Logo from './images/logo.svg';
import Hamburger from './images/hamburger.svg';
import Search from './images/search.svg';
import Cart from './images/shopping-bag.svg';
import Login from './images/user.svg';
import Close from './images/close.png';
import User from './images/user.svg';
import {Link} from 'react-router-dom';

import './Header.scss';

const navArr = [
    { id: 1, name: "Women", link: "/venia" },
    { id: 2, name: "Men", link: "/venia" },
    { id: 3, name: "Smart Gear", link: "/venia" },
    { id: 4, name: "Accessories", link: "/venia" }
];

function Header() {
    let [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className="container header-wrapper">
                <header>
                    <img className="hamburger" id="hamburger" onClick={() => setToggle(!toggle)} aria-hidden="true"
                        data-state="show" src={Hamburger} ></img>

                    <a href="/venia" aria-label="go to venia home page"><img src={Logo} className="logo" alt="venia logo" /></a>

                    <ul className="nav-links">
                        {navArr?.map((nav) => {
                            return (
                                <li key={nav.id}>
                                    <Link to={nav.link} alt="" >{nav.name}</Link>
                                </li>
                            );
                        })}
                    </ul>

                    {toggle ?  <div className="nav-links-xs">
                        <section className="header">
                            <p>Shop Categories</p>
                            <button><img src={Close} alt='close' onClick={() => setToggle(!toggle)}/></button>
                        </section>
                        <section>
                            <ul>
                                {navArr?.map((nav) => {
                                    return (
                                        <li>
                                            <a href={nav.link} alt={nav.name}>{nav.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                        <section className="footer">
                            <p>
                                <img src={User} alt="create account" /> Account
                            </p>
                            <p>Sign In</p>
                        </section>
                    </div> : ""}

                    <span className="show-lg">
                        <img className="search" src={Search} alt="Click here to search" />
                        Search</span>
                    <span className="show-lg">
                        <img className="sign_in" src={Login} alt="click here to login" />
                        Sign In
                    </span>
                    <img className="search show-xs" src={Search} alt="Click here to search" />
                    <img className="cart" src={Cart} alt="click here to go to cart" />

                </header>
            </div >
            <hr />
        </div >

    );
}
export default Header;