import React from "react";
import './Sidebar.scss';
import Filter from '../Filter/Filter';


const sizeArr = [
    { id: 1, name: 'X-Small'},
    { id: 2, name: 'Small'},
    { id: 3, name: 'Medium'},
    { id: 4, name: 'Large'},
    { id: 5, name: 'X-Large'} 
];

const styleArr = [
    { id: 6, name: 'Outdoor'},
    { id: 7, name: 'Casual'},
    { id: 8, name: 'Athleisure'},
    { id: 9, name: 'Running'},
    { id: 10, name: 'Active'} 
];

const brandArr = [
    { id: 11, name: 'Calvin Klein'},
    { id: 12, name: 'Dolce & Gabbana'},
    { id: 13, name: 'Miu Miu'},
    { id: 14, name: 'Prada'},
    { id: 15, name: 'Rag & Bone'},
    { id: 16, name: 'Gucci'},
    { id: 17, name: 'Chanel'},
    { id: 18, name: 'Salvatore Ferragamo'},
    { id: 19, name: 'Marni'},
    { id: 20, name: 'Dior'}
];

const Sidebar = () => {
    return (
        <section className="sidebar-wrapper">
                <h4>Filters</h4>

                <Filter filterArray={sizeArr} title="Size" show="true"/>

                <Filter filterArray={styleArr} title="Style"/>

                <div className="colors-wrapper">
                    <p>Color</p>
                    <div className="color-section border-line">
                        <div className="black-color"></div>
                        <div className="white-color"></div>
                        <div className="teal-green"></div>
                        <div className="mustard-color"></div>
                        <div className="blue-color"></div>
                        <div className="red-color"></div>
                        <div className="lavender-color"></div>
                        <div className="pink-color"></div>
                        <div className="dark-yellow"></div>
                        <div className="multi-color"></div>                      
                    </div>
                </div>

                <Filter filterArray={brandArr} title="Brand"/>

            </section>
    );    
}

export default Sidebar;