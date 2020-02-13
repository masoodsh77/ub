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
                        <Col lg={2}>
                            <img src={insuranceLogo} alt=""/>
                        </Col>
                        <Col lg={2} className="shoaab">
                            13213211 تومان
                        </Col>
                        <Col lg={2}>
                            <FaStarHalfAlt className="star"/>
                            <FaStar className="star"/>
                            <FaStar className="star"/>
                            <FaStar className="star"/>
                            <FaStar className="star"/>
                        </Col>
                        <Col lg={2} className="shoaab">
                            15
                        </Col>
                        <Col lg={1} className="shoaab">
                            10
                        </Col>
                        <Col lg={1} className="shoaab">5</Col>
                        <Col lg={2}>
                            <Button block variant="success" className="BuyBtn">خرید</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Level1Cards;