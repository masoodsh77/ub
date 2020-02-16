import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Damages.css'
import DropDown from '../../BabyComponent/DropDown';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Damages extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            value: null,
            people: [{ id: "1", name: "بله" }, { id: "0", name: "خیر" },],
        }
    }
    render() {
        const {
            selDamageRecived,
            damage,
            driverDamage,
        } = this.props;
        const damageRecived = [{ id: "1", name: "بله" }, { id: "0", name: "خیر" },];
        return (
            <div className="damages">
                <Container>
                    <Row>
                        <Col>
                            <p>آیا از بیمه نامه قبلی خسارت دریافت کرده اید</p>
                            <DropDown
                                name="selDamageRecived"
                                selectOptions={damageRecived}
                                textField="name"
                                valueField="id"
                            />
                        </Col>
                    </Row>
                    {
                        selDamageRecived === '1'
                            ?
                            <Row>
                                <Col>
                                    <p>نوع آسیب</p>
                                    <DropDown
                                        name="selDamage"
                                        selectOptions={damage}
                                        textField="title"
                                        valueField="sign"
                                    />
                                </Col>
                                <Col>
                                    <p>نوع آسیب راننده</p>
                                    <DropDown
                                        name="selDriverDamage"
                                        selectOptions={driverDamage}
                                        textField="title"
                                        valueField="damageType"
                                    />
                                </Col>
                            </Row>
                            :
                            ''
                    }
                    <Row className="text-center">
                        <Link to="/comparison">
                            <Button variant="warning" style={{ fontFamily: 'yekan' }}>مقایسه</Button>
                        </Link>
                    </Row>
                </Container>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    selDamageRecived: state.third.selDamageRecived
})
export default connect(mapStateToProps)(Damages);