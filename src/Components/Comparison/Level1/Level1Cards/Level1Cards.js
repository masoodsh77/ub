import * as React from 'react';
import './Level1Cards.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import insuranceLogo from '../../../../imgs/melatiran.png';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


class Level1Cards extends React.Component {
    render() {
        const {
            coImg,
            coTitle,
            coRate,
            coBranch,
            coSatisfaction,
            discount,
            price
        } = this.props;
        
        const img = `http://37.152.182.101:31111/ubim/GetFile/v1?fileID=${coImg}&height=12&width=8&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmUiOiIyMDIwLTAyLTA1VDEzOjA4OjU2LjI3MzEyMDI3OFoiLCJ0aW1lIjoiMjAyMC0wMi0wNVQxMjo1Mzo1Ni4yNzMxMjE3MjhaIiwidXNlcm5hbWUiOiI5MTg1NjI0OTA4In0.lMFwIzPR3lX5dk7F2F-qsq-s2icHPFn2-I7iaIGmtP4`;
        const rate = [];
        for (let i = 1; i <= coRate; i++)
            rate.push(<FaStar key={i} className="star" />)
        return (
            <div className="card">
                <Container>
                    <Row>
                        <Col lg={10}>
                            <Row>
                                <Col lg={3} md={3} sm={6} xs={6}>
                                    <img src={img} alt={coTitle} style={{ marginBottom: 15 }} />
                                </Col>
                                <Col lg={3} md={3} sm={6} xs={6}>
                                    <p style={{ fontSize: 12 }}>سطح توانگری</p>
                                    {rate}
                                    {/* <FaStarHalfAlt className="star" /> */}
                                </Col>
                                <Col lg={3} md={3} sm={6} xs={6} className="shoaab">
                                    <p style={{ fontSize: 12 }}>تعداد شعب پرداخت خسارت</p>
                                    {coBranch}
                                </Col>
                                <Col lg={3} md={3} sm={6} xs={6} className="shoaab">
                                    <p style={{ fontSize: 12 }}>رضایت از مبلغ پرداختی (رتبه)   </p>
                                    {coSatisfaction}
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
                        <Col lg={2} style={{ borderRight: "1px dashed gray" }}>
                            <Row>
                                <Col>
                                    <span style={{ color: "green", fontFamily: "yekanNum" }}>
                                        {price}
                                    </span> تومان
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