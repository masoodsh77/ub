import React, { Component } from 'react';
import TopMenu from '../TopMenu/TopMenu';
import './Comparison.css';
import Stepper from 'bs-stepper';
import Level1 from './Level1/Level1';
import { connect } from 'react-redux';
import Axios from 'axios';
import { SERVER_URL } from '../../const';

class Comparison extends Component {
    componentDidMount() {
        this.stepper = new Stepper(document.querySelector('#stepper2'), {
            linear: false,
            animation: true
        });
    }

    onSubmit(e) {
        e.preventDefault()
    }

    render() {
        const prices = [];
        const listPrice = null;
        const {
            selModel,
            selYearMade,
            selDate,
            selDiscount,
            selUbimDiscount,
            selDriverDiscount,
            selUsage,
            selPreInsuranceDuration,
            selDamageRecived,
            selDamage,
            selDriverDamage,
            selPreInsurance
        } = this.props;
        
        return (
            <div className="comparison_stepper">
                <TopMenu />
                <div className="comparison_stepper_content">
                    <div id="stepper2" className="bs-stepper">
                        <div className="bs-stepper-header tp_stepper_header">
                            <div className="step" data-target="#test-l-1">
                                <button className="step-trigger" style={{ maxWidth: "100px" }}>
                                    <span className="comparison-stepper-circle1">1</span>
                                    <span className="bs-stepper-label">انتخاب</span>
                                </button>
                            </div>
                            <div className="line1"></div>
                            <div className="step" data-target="#test-l-2">
                                <button className="step-trigger" style={{ maxWidth: "90px" }}>
                                    <span className="comparison-stepper-circle1">2</span>
                                    <span className="bs-stepper-label">مشحصات</span>
                                </button>
                            </div>
                            <div className="line1"></div>
                            <div className="step" data-target="#test-l-3">
                                <button className="step-trigger" style={{ maxWidth: "90px" }}>
                                    <span className="comparison-stepper-circle1">3</span>
                                    <span className="bs-stepper-label">ارسال</span>
                                </button>
                            </div>
                            <div className="line1"></div>
                            <div className="step" data-target="#test-l-4">
                                <button className="step-trigger" style={{ maxWidth: "90px" }}>
                                    <span className="comparison-stepper-circle1">4</span>
                                    <span className="bs-stepper-label">پرداخت</span>
                                </button>
                            </div>
                        </div>

                        <div className="bs-stepper-content">
                            <form onSubmit={this.onSubmit}>
                                <div id="test-l-1" className="content">
                                    <div className="form-group">
                                        <Level1 prices={listPrice} />
                                    </div>
                                </div>
                                <div id="test-l-2" className="content">
                                    <div className="form-group">

                                    </div>
                                </div>
                                <div id="test-l-3" className="content text-center">

                                </div>
                                <div id="test-l-4" className="content">
                                    <div className="form-group">

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selModel: state.third.selModel,
    selYearMade: state.third.selYearMade,
    selDate: state.third.selDate,
    selDiscount: state.third.selDiscount,
    selUbimDiscount: state.third.selUbimDiscount,
    selDriverDiscount: state.third.selDriverDiscount,
    selUsage: state.third.selUsage,
    selPreInsuranceDuration: state.third.selPreInsuranceDuration,
    selDamageRecived: state.third.selDamageRecived,
    selDamage: state.third.selDamage,
    selDriverDamage: state.third.selDriverDamage,
    selPreInsurance: state.third.selPreInsurance
})

export default connect(mapStateToProps)(Comparison);