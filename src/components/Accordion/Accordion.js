import React from "react";
import "./Accordion.scss";
//import downArrow from './images/arrow-down-grey.svg';

const Accordion = (props) => {
    const accordionBtns = document.querySelectorAll(".accordion");

    accordionBtns.forEach((accordion) => {
        accordion.onclick = function () {
            this.classList.toggle("is-open");

            let content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        };
    });

    return (
        <div className="accordion-wrapper">

            <button className="accordion">Estimate your Shipping</button>
            <div className="accordion-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                </p>
            </div>

            <button className="accordion">Enter a Coupon Code</button>
            <div className="accordion-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                </p>
            </div>

            <button className="accordion">Apply Gift Card</button>
            <div className="accordion-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                </p>
            </div>
        </div>
    )
};


export default Accordion;