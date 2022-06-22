import React, { Component } from 'react';
import ShoppingBag from './../../components/ShoppingBag/ShoppingBag';
//import RecentHistory from './../../components/RecentHistory/RecentHistory';

class CartPage extends Component {

    render() {
        return (
            <main className="container">
                <section>
                    <ShoppingBag />
                </section>

                <section>
                    {/* <RecentHistory /> */}
                </section>
            </main>
        );
    }

}

export default CartPage;