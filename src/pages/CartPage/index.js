import React, { Component } from 'react';
import ShoppingBag from './../../components/ShoppingBag/ShoppingBag';
import RecentlyView from "./../../components/RecentlyView/RecentlyView";

class CartPage extends Component {

    render() {
        return (
            <main className="container">
                <section>
                    <ShoppingBag />
                </section>

                <section>
                    <RecentlyView />
                </section>
            </main>
        );
    }

}

export default CartPage;