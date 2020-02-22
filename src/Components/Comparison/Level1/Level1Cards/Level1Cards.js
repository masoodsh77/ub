import * as React from 'react';
import './Level1Cards.css';
import { Container, Row, Col, Button , Modal, Form } from 'react-bootstrap';
import insuranceLogo from '../../../../imgs/melatiran.png';
import { FaStar , FaStarHalfAlt  } from "react-icons/fa";
import { Link } from 'react-router-dom';

function formatCurrency(n, fixFloat) {
    return n.toFixed(fixFloat).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
}
class Level1Cards extends React.Component{
    state={
        numberShow:false,
        allowShow : false
    }

    handlenumberClose = () => this.setState({
        numberShow : false,
        allowShow : false
    });
    handleShow = () => this.setState({
        numberShow: true, 
    });
    handlenumberShow = () => this.setState({
        numberShow: false,
        allowShow : true
    });
    handleContinue =() => {
        
    }
    render() {
        return (
            <div className="card">
                <Container>
                    <Row>
                        <Col lg={10}>
                        <Row>
                            <Col lg={3} md={3} sm={6} xs={6}>
                                <img src={insuranceLogo} alt="" style={{marginBottom:15}}/>
                            </Col>
                            <Col lg={3} md={3} sm={6} xs={6}>
                                <p style={{fontSize:12}}>سطح توانگری</p>
                                <FaStarHalfAlt className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                            </Col>
                            <Col lg={3} md={3} sm={6} xs={6} className="shoaab">
                            <p style={{fontSize:12}}>تعداد شعب پرداخت خسارت</p>
                                12
                            </Col>
                            <Col lg={3} md={3} sm={6} xs={6} className="shoaab">
                            <p style={{fontSize:12}}>رضایت از مبلغ پرداختی (رتبه)   </p>
                                10
                            </Col>
                            <Row>
                                <Col lg={12} className="other">
                                <div className="other_discount"><p>تخفیف</p></div>
                                <div className="other_alarm"><p>جریمه دیرکرد</p></div>
                                <div className="other_alarm"><p>جریمه کهنگی</p></div>
                                <div className="other_gift"><p>با خرید این بیمه نامه به شما یک بیمه نامه آتش سوزی هدیه داده میشود</p></div>
                                </Col>
                            </Row>
                        </Row>
                        </Col>
                        <Col lg={2} className="price_Btn">
                            <Row>
                                <Col lg={12} md={12} sm={6} xs={7} className="price_col">
                                    <span className="price">
                                        {formatCurrency(1325213)}
                                    </span> تومان
                                </Col>
                                <Col lg={12} md={12} sm={6} xs={5}>
                                    <Button block variant="success" className="BuyBtn" onClick={this.handleShow}>خرید</Button>
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>
                    <Modal show={this.state.numberShow} onHide={this.handlenumberClose} className="level1Card_modal">
                        <Modal.Header closeButton>
                        <Modal.Title>شما در حال خرید 
                            <span style={{color:"royalblue"}}> بیمه شخص ثالث </span>
                             از شرکت 
                             <span style={{color:"royalblue"}}> بیمه ما </span>
                              هستید
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="Modal_Factor">
                                <h5> <div className="Modal_Factor_circle"/>حق بیمه یکساله</h5>
                                <div className="Modal_Factor_Price">
                                    <span> مبلغ قابل پرداخت : </span>
                                    <span className="Modal_Factor_Price_Number"> {formatCurrency(1325213)} تومان</span>
                                </div>
                            </div>
                            <Form>
                                <Form.Group>
                                    <Form.Control size="lg" type="number" placeholder="شماره موبایل" required />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handlenumberClose}>
                            انصراف
                        </Button>
                        <Button variant="primary" onClick={this.handlenumberShow}>
                           ارسال کد تایید
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={this.state.allowShow} onHide={this.handlenumberClose} className="level1Card_modal">
                        <Modal.Header closeButton>
                        <Modal.Title>کد تایید خود را وارد کنید</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Control size="sm" type="number" placeholder="----" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handlenumberClose}>
                            انصراف
                        </Button>
                            <Button variant="primary" onClick={this.handleContinue}>
                            تایید و ادامه
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
        );
    }
}

export default Level1Cards;