import React,  {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import './ShoppingBag.scss';
import Quantity from "./../Quantity/Quantity";
import Accordion from "../Accordion/Accordion";
import {Link} from 'react-router-dom';
import { removeSelectedProduct } from "../../redux/actions/productsActions";


import Edit from './images/edit-2.svg';
import Trash from './images/trash-2.svg';
import Heart from './images/heart.svg';

const pricingTotal = (subTotal, coupan, giftcard, estimated)=> subTotal ? Math.round((subTotal - coupan - giftcard + estimated) * 100.0) / 100.0 : 0.00 ;


const ShoppingBag = () => {
    const [estimatedTotal , pricingSummary] = useState(0);  
    const [subTotal , setSubTotal] = useState(0);
    const [coupan , setCoupan] = useState(77.60);
    const [giftcard , setGiftcard] = useState(100.00);
    const [estimated , setEstimated] = useState(23.28);
     
 
    let cart = useSelector((state) => state.cart.cart);

    const removeCartItem = (id) => {
        //const dispatch = useDispatch();
        console.log('-----------------product.id', id);
        //dispatch(removeSelectedProduct(id));
    }
    
    useEffect(() => {
      
        if(cart.length){
            let totalAmount = 0;
            cart.forEach((product)=>{
                totalAmount = totalAmount + (product.price*product.quantity);                
            });
            setSubTotal(totalAmount);
            setCoupan( totalAmount > 150 ? coupan : 0);                     
            pricingSummary(pricingTotal(totalAmount, coupan, giftcard, estimated ));
        }
      }, [cart]);

   
    const RenderList = (product) => {      

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
                        </div>
                    </div>

                    <div className="prod-quantity aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                        <section>
                            <Quantity total={product.quantity} />
                        </section>

                        <ul className="show-lg">
                            <li>
                                <Link to={`/product/${product.id}`} ><img src={Edit} className="" alt="edit" /> Edit item </Link>
                            </li>
                            <li>
                                <img src={Trash} className="remove" onClick={() => {removeCartItem(product.id);}} alt="remove" /> Remove
                            </li>
                            <li>
                                <img src={Heart} className="like" /> Save for later
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    };


    return (
        cart.length == 0 ? <h1 className="no-record">No product in Cart</h1> :

        <div className="shopping-bag-wrapper">
            <h1>Your Shopping Bag </h1>
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className="left-col aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1">
                        {cart.map(RenderList)}

                        <Accordion />

                </div>
                <div className="right-col aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                    <h5>Pricing Summary</h5>
                    <section className="summary">
                        <div className="title">Subtotal</div>
                        <div className="amount">{subTotal && `$ ${subTotal}`}</div>

                        <div className="title">Coupon</div>
                        <div className="amount">{coupan && `$ ${coupan}`}</div>

                        <div className="title">Gift Card</div>
                        <div className="amount">{giftcard && `$ ${giftcard}`}</div>

                        <div className="title">Estimated Task</div>
                        <div className="amount">{estimated && `$ ${estimated}`}</div>

                        <div className="title">Estimated Shipping</div>
                        <div className="amount">FREE</div>

                        <div className="title strong">Estimated total</div>
                        <div className="amount strong">{estimatedTotal && `$ ${estimatedTotal}`}</div>
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

