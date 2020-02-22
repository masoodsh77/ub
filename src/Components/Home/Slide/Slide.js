import React, { Component } from 'react';
import './Slide.css';
import City from '../../../imgs/unnamed.png';
import tpIcon from '../../../imgs/058-car insurance.png'
import { Link } from 'react-router-dom';

class Slide extends Component {
    render() {
        return (
                <div className="slide">
                    <img src={City} className="slide_img" alt="back"/>
                    <div className="slide_btn_box">
                        <Link to="/comparison">
                            <div className="slide_btn">
                                <img src={tpIcon} width="80%" alt="tpCar"/>
                                بیمه شخص ثالث
                            </div>
                        </Link>
                    </div>
                </div>
        );
    }
}

export default Slide;