import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedProduct } from "../../redux/actions/productsActions";
import './ShoppingBag.scss';
import Quantity from "./../Quantity/Quantity";
import Accordion from "../Accordion/Accordion";

import Edit from './images/edit-2.svg';
import Trash from './images/trash-2.svg';
import Heart from './images/heart.svg';

const ShoppingBag = () => {

    let cart = useSelector((state) => state.cart.cart);

    const renderList = cart.map((product) => {
        let total = +(product.price*product.quantity);

        return (
            <section>
                <div key={product.id} className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                    <div className="prod-details aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                        <img src={product.image} alt={product.title}></img>
                        <div>
                            <h5>{product.title}</h5>
                            <p>Size: Medium</p>
                            <p>Color: Storm</p>
                            <p>Price: {product.price}</p>
                            <p>Total: {total}</p>
                        </div>
                    </div>

                    <div className="prod-quantity aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                        <section>
                            <Quantity total={product.quantity} />
                        </section>

                        <ul className="show-lg">
                            <li>
                                <img src={Edit} className="" alt="edit" /> Edit item
                            </li>
                            <li>
                                <img src={Trash} className="remove" alt="remove" /> Remove
                            </li>
                            <li>
                                <img src={Heart} className="like" /> Save for later
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    });

    return (
        cart.length == 0 ? <h1 className="no-record">No product in Cart</h1> :

        <div className="shopping-bag-wrapper">
            <h1>Your Shopping Bag </h1>
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className="left-col aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1">
                   {renderList}
                    <Accordion />

                </div>
                <div className="right-col aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                    <h5>Pricing Summary</h5>
                    <section className="summary">
                        <div className="title">Subtotal</div>
                        <div className="amount">$388.00</div>

                        <div className="title">Coupon</div>
                        <div className="amount">$77.60</div>

                        <div className="title">Gift Card</div>
                        <div className="amount">$100.00</div>

                        <div className="title">Estimated Task</div>
                        <div className="amount">$23.28</div>

                        <div className="title">Estimated Shipping</div>
                        <div className="amount">FREE</div>

                        <div className="title strong">Estimated total</div>
                        <div className="amount strong">$233.68</div>
                    </section>

                    <section>
                        <button className="primary-btn">checkout</button>
                    </section>
                    <section>
                        <button className="primary-paypal-btn"></button>
                    </section>
                </div>
            </div>            
        </div>
    );
};

export default ShoppingBag;

