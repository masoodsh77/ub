import * as React from 'react';
import './Level1Cards.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import insuranceLogo from '../../../../imgs/melatiran.png';
import { FaStar , FaStarHalfAlt  } from "react-icons/fa";


class Level1Cards extends React.Component{
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
                                <div className="other_gift"><p>هدیه</p></div>
                                <div className="other_gift"><p>تخفیف</p></div>
                                <div className="other_alarm"><p>جریمه دیرکرد</p></div>
                                <div className="other_alarm"><p>جریمه کهنگی</p></div>
                                </Col>
                            </Row>
                        </Row>
                        </Col>
                        <Col lg={2} style={{borderRight:"1px dashed gray"}}>
                            <Row>
                                <Col>
                                    <span style={{color:"green" , fontFamily:"yekanNum"}}>13213211</span> تومان
                                </Col>
                                <Col>
                                    <Button block variant="success" className="BuyBtn">خرید</Button>
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Level1Cards;