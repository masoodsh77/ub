import React, { Component } from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import './Percents.css';
import DropDown from '../../BabyComponent/DropDown';

class Percents extends Component {
    render() {
        const {discount} = this.props;
        return (
            <div className="percents">
                <Container>
                    <Row>
                        <Col>
                            <p>درصد تخفیف بیمه نامه قبلی</p>
                            <DropDown
                                name="selDiscount"
                                selectOptions={discount}
                                textField="title"
                                valueField="offValue"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>تخفیف حوادث راننده</p>
                            <DropDown
                                name="selDriverDiscount"
                                selectOptions={discount}
                                textField="title"
                                valueField="offValue"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Percents;