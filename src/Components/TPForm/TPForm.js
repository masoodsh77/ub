import React, { Component } from 'react';
import Stepper from 'bs-stepper'
import { FaCar, FaIdCardAlt, FaPercentage, FaCarCrash } from "react-icons/fa";
import './TPForm.css';
import TopMenu from '../TopMenu/TopMenu'
import CarInfo from './carInfo/CarInfo';
import PreInsurance from './preInsurance/PreInsurance';
import Percents from './Percents/Percents';
import Damages from './Damages/Damages';
import { connect } from 'react-redux';

class TPForm extends Component {
    componentDidMount() {
        this.stepper = new Stepper(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        })
        console.log(this.stepper)
    }

    onSubmit(e) {
        e.preventDefault()
    }

    render() {
        const {
            cars,
            yearMade,
            company,
            preInsuranceDuration,
            selDate,
            discount,
            usage,
            selDamageRecived = "0",
            damage,
            driverDamage,
        } = this.props;
        return (
            <div className="tp_stepper">
                <TopMenu />
                <div className="tp_stepper_content">
                    <div id="stepper1" className="bs-stepper">
                        <div className="bs-stepper-header tp_stepper_header">
                            <div className="step" data-target="#test-l-1">
                                <button className="step-trigger" style={{ maxWidth: "100px" }}>
                                    <span className="bs-stepper-circle1"><FaCar style={{ fontSize: "30px" }} /></span>
                                    <span className="bs-stepper-label">اطلاعات خودرو</span>
                                </button>
                            </div>
                            <div className="line1"></div>
                            <div className="step" data-target="#test-l-2">
                                <button className="step-trigger" style={{ maxWidth: "90px" }}>
                                    <span className="bs-stepper-circle1"><FaIdCardAlt style={{ fontSize: "30px" }} /></span>
                                    <span className="bs-stepper-label">اطلاعات بیمه</span>
                                </button>
                            </div>
                            <div className="line1"></div>
                            <div className="step" data-target="#test-l-3">
                                <button className="step-trigger" style={{ maxWidth: "90px" }}>
                                    <span className="bs-stepper-circle1"><FaPercentage style={{ fontSize: "30px" }} /></span>
                                    <span className="bs-stepper-label">تخفیف ها</span>
                                </button>
                            </div>
                            <div className="line1"></div>
                            <div className="step" data-target="#test-l-4">
                                <button className="step-trigger" style={{ maxWidth: "90px" }}>
                                    <span className="bs-stepper-circle1"><FaCarCrash style={{ fontSize: "30px" }} /></span>
                                    <span className="bs-stepper-label">خسارت ها</span>
                                </button>
                            </div>
                        </div>

                        <div className="bs-stepper-content background">
                            <form onSubmit={this.onSubmit}>
                                <div id="test-l-1" className="content">
                                    <div className="form-group">
                                        <CarInfo 
                                            cars={cars} 
                                            yearMade={yearMade} 
                                            usage={usage}
                                        />
                                    </div>
                                </div>
                                <div id="test-l-2" className="content">
                                    <div className="form-group">
                                        <PreInsurance 
                                            company={company} 
                                            preInsuranceDuration={preInsuranceDuration}
                                            selDate={selDate}
                                        />
                                    </div>
                                </div>
                                <div id="test-l-3" className="content text-center">
                                    <Percents discount={discount} />
                                </div>
                                <div id="test-l-4" className="content">
                                    <div className="form-group">
                                        <Damages 
                                            selDamageRecived={selDamageRecived}
                                            damage={damage}
                                            driverDamage={driverDamage}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="bottomNavbar">
                            <div bg="light" fixed="bottom" >
                                <button className="btn btn-primary navPreBtn" onClick={() => this.stepper.previous()}>مرحله قبل</button>
                                <button className="btn btn-primary navNextBtn" onClick={() => this.stepper.next()}>مرحله بعد</button>
                            </div>
                        </div>
                        <div className="bottomBtn">
                            <button className="btn btn-primary nextBtn" onClick={() => this.stepper.next()}>مرحله بعد</button>
                            <button className="btn btn-primary preBtn" onClick={() => this.stepper.previous()}>مرحله قبل</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cars: state.third.car,
    models: state.third.carModels,
    yearMade: state.third.yearMade,
    company: state.third.company,
    preInsuranceDuration: state.third.preInsuranceDuration,
    selDate: state.third.selDate,
    usage: state.third.usage,
    discount: state.third.discount,
    damageRecived: state.third.damageRecived,
    damage: state.third.damage,
    driverDamage: state.third.driverDamage,
    selCarModel: state.third.selCarModel,
    selYearMade: state.third.selYearMade,
    selPreInsurance: state.third.selPreInsurance,
    selPreInsuranceDuration: state.third.selPreInsuranceDuration,
    selUsage: state.third.selUsage,
    selDiscount: state.third.selDiscount,
    selDamageRecived: state.third.selDamageRecived,
    selDamage: state.third.selDamage,
    selDriverDamage: state.third.selDriverDamage,
    selDriverDiscount: state.third.selDriverDiscount,
    selUbimDiscount: state.third.selUbimDiscount
})

export default connect(mapStateToProps)(TPForm);
