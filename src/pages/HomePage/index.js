import React, { Component } from 'react';
import Banner from './../../components/Banner/Banner';
import Breadcrumb from './../../components/Breadcrumb/Breadcrumb';
import ProductList from '../../components/ProductList/ProductList';
import Sidebar from './../../components/Sidebar/Sidebar';


class HomePage extends Component {

    render() {
        return (
            <main className="home-section">
                <section>
                    <Banner />
                </section>

                <section className="container aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                    <aside className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
                        <Breadcrumb />
                        <Sidebar>
                            {/* <Filter></Filter> */}
                        </Sidebar>
                    </aside>
                    <section  className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--1">
                        <ProductList></ProductList>
                    </section>
                </section>
            </main>
        );
    }

}

export default HomePage;