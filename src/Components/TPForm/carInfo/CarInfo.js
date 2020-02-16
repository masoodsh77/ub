import React, { Component } from 'react';
import './CarInfo.css';
import DropDown from '../../BabyComponent/DropDown';
import {connect} from 'react-redux';


class CarInfo extends Component {
    render() {
        const {
            cars,
            models,
            yearMade,
            usage
        } = this.props;
        return (
            <div className="carinfo">
                <div className="container">
                    <div className="carinfo_header">
                        <h2>بیمه شخص ثالث</h2>
                        <h6>نوع، برند و سال ساخت خودروی خود را انتخاب کنید.</h6>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>نوع وسیله نقلیه</p>
                            <DropDown
                                name="selCar"
                                brand={true}
                                selectOptions={cars}
                                textField="title"
                                valueField="id"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p>برند</p>
                            <DropDown
                                name="selCar"
                                brand={true}
                                selectOptions={cars}
                                textField="title"
                                valueField="id"
                            />
                        </div>
                        <div className="col-6">
                            <p>مدل</p>
                            <DropDown
                                name="selCarModel"
                                selectOptions={models}
                                textField="title"
                                valueField="id"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p>سال ساخت</p>
                            <DropDown
                                name="selYearMade"
                                brand={true}
                                selectOptions={yearMade}
                                textField="yearText"
                                valueField="id"
                            />
                        </div>
                        <div className="col-6">
                            <p>نوع کاربری</p>
                            <DropDown
                                name="selUsage"
                                brand={true}
                                selectOptions={usage}
                                textField="title"
                                valueField="id"
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    models: state.third.carModels
});


export default connect(mapStateToProps)(CarInfo);