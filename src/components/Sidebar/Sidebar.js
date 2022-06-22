import React from "react";
import './Sidebar.scss';

class Sidebar extends React.Component {
    render() {
        return (
            <section className="sidebar-wrapper">
                <h4>Filters</h4>

                <div className="filter-wrapper">                   
                    <p>Attributes</p>
                    <ul>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label htmlFor="option1">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option2" name="option2" value="Option2" />
                            <label htmlFor="option2">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option3" name="option3" value="Option3" />
                            <label htmlFor="option3">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option4" name="option4" value="Option4" />
                            <label htmlFor="option4">Option</label>
                        </li>
                    </ul>

                    <p className="border-line">
                        <a href="#">Show More</a>
                    </p>
                </div>
                <div className="filter-wrapper">
                    <p>Attributes</p>
                    <ul>
                        <li>
                            <input type="checkbox" id="option5" name="option5" value="Option5" />
                            <label htmlFor="option5">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option6" name="option6" value="Option6" />
                            <label htmlFor="option6">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option7" name="option7" value="Option7" />
                            <label htmlFor="option7">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option8" name="option8" value="Option8" />
                            <label htmlFor="option8">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option9" name="option9" value="Option9" />
                            <label htmlFor="option9">Option</label>
                        </li>
                        <li className="border-line">
                            <input type="checkbox" id="option10" name="option10" value="Option10" />
                            <label htmlFor="option10" className="option-text ">Option</label>
                        </li>
                    </ul>
                </div>
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
                <div className="filter-wrapper">
                    <p>Attributes</p>
                    <ul>
                        <li>
                            <input type="checkbox" id="option11" name="option11" value="Option11" />
                            <label htmlFor="option11">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option12" name="option12" value="Option12" />
                            <label htmlFor="option12">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option13" name="option13" value="Option13" />
                            <label htmlFor="option13">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option14" name="option14" value="Option14" />
                            <label htmlFor="option14">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option15" name="option15" value="Option15" />
                            <label htmlFor="option15">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option16" name="option16" value="Option16" />
                            <label htmlFor="option16">Option</label>
                        </li>
                        <li>
                            <input type="checkbox" id="option17" name="option17" value="Option17" />
                            <label htmlFor="option17">Option</label>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Sidebar;