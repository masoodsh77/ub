import React, { Component } from 'react';
import { FaTasks , FaShippingFast , FaCreditCard } from 'react-icons/fa'
import { Table, Button, Container , Row , Col, Alert, Form} from 'react-bootstrap';


function formatCurrency(n, fixFloat) {
    return n.toFixed(fixFloat).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "," + c : c;
    });
}

class Factor extends Component {
    render() {
        return (
            <div>
                <div className="SendInfo">
                    <span> <div className="SubmitForm_titr">
                        <FaTasks className="SubmitForm_icon"/><span>صورت حساب بیمه شخص ثالث</span>
                    </div></span>
                    <Table responsive="sm" bordered style={{textAlign:"center", fontSize:14}}>
                        <thead style={{backgroundColor:"lightgray"}}>
                            <th>نام و نام خانوادگی</th>
                            <th>کد ملی</th>
                            <th>تاریخ تولد</th>
                            <th>نشانی درج در بیمه</th>
                            <th>نشانی ارسال</th>
                            <th>شرکت بیمه</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>مسعود شاطرآبادی</td>
                                <td>3241305279</td>
                                <td>1/1/1</td>
                                <td>کرمانشاه 22 بهمن کوچه 125 مجتمع امیرعلی واحد ۷</td>
                                <td>کرمانشاه 22 بهمن کوچه 125 مجتمع امیرعلی واحد ۷</td>
                                <td>البرز</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="warning" style={{marginBottom:15}}>ویرایش مشخصات</Button>
                    <Table bordered style={{textAlign:"center", fontSize:14}}>
                        <thead style={{backgroundColor:"lightgray"}}>
                            <th>خودرو</th>
                            <th>کاربری خودرو</th>
                            <th>مدت قرارداد</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>لامبورگینی - گالاردو</td>
                                <td>تاکسی</td>
                                <td>دوماهه</td>
                            </tr>
                            <tr style={{backgroundColor:"lightgray"}}>
                                <td>اطلاعات بیمه نامه</td>
                                <td style={{backgroundColor:"white"}} colSpan="2">
                                    <Container>
                                        <Row>
                                            <Col lg={3} md={3} sm={6} xs={12} ><p>درصد تخفیف بیمه نامه قبلی : 5</p></Col>
                                            <Col lg={3} md={3} sm={6} xs={12} ><p>درصد تخفیف حوادث راننده : 5</p></Col>
                                            <Col lg={3} md={3} sm={6} xs={12} ><p>تعداد خسارت جانی مالی : یکبار مالی</p></Col>
                                            <Col lg={3} md={3} sm={6} xs={12} ><p>تعداد خسارت حوادث راننده : یکبار خسارت</p></Col>
                                        </Row>
                                    </Container>
                                </td>
                            </tr>
                            <tr style={{backgroundColor:"lightgray"}}>
                                <td>بیمه نامه قبلی</td>
                                <td style={{backgroundColor:"white"}} colSpan="2">
                                    <Container>
                                        <Row>
                                            <Col lg={6} md={6} sm={6} xs={12}><p>شرکت بیمه نامه قبلی : البرز</p></Col>
                                            <Col lg={6} md={6} sm={6} xs={12}><p>تاریخ انقضای بیمه نامه قبلی : 2/2/2</p></Col>
                                        </Row>
                                    </Container>
                                </td>
                            </tr>
                            <tr style={{backgroundColor:"lightgray"}}>
                                <td>پوشش های انتخاب شده</td>
                                <td style={{backgroundColor:"white"}} colSpan="2">
                                    <Container>
                                        <Row>
                                            <Col lg={4} md={4} sm={6} xs={12}><p>پوشش مالی : {formatCurrency(18000000)} تومان</p></Col>
                                            <Col lg={4} md={4} sm={6} xs={12}><p>پوشش سرنشین : {formatCurrency(360000000)} تومان</p></Col>
                                            <Col lg={4} md={4} sm={6} xs={12}><p>پوشش راننده : {formatCurrency(270000000)} تومان</p></Col>
                                        </Row>
                                    </Container>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="warning" style={{marginBottom:15}}>ویرایش مشخصات بیمه نامه</Button>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className="SendInfo">
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Alert variant="warning">
                                            لطفا همگام دریافت بیمه نامه بیمه نامه قبلی را تحویل مامور پست دهید
                                        </Alert>
                                        <Alert variant="success">
                                           <Form.Check type="checkbox" style={{float:"right"}}/> بدینوسیله صحت اطلاعات فوق را تایید میکنم و <a href="/comparison">شرایط و قوانین یوبیم </a> را میپذیرم
                                        </Alert>
                                    </Col>
                                    <Col lg={9} md={9} sm={12} xs={12}>
                                        <FaShippingFast className="SubmitForm_icon"/><span>هزینه ارسال : <span style={{color:"green" , fontWeight:"bold"}}>رایگان</span> </span><br></br>
                                        <FaCreditCard className="SubmitForm_icon"/><span>مبلغ قابل پرداخت :<span style={{color:"green" , fontWeight:"bold"}}>{formatCurrency(1250000)}</span> تومان </span>
                                    </Col>
                                    <Col lg={3} md={3} sm={12} xs={12}>
                                        <Button variant="success" block style={{float:"left" , height:"100%" , marginTop:3}}>تکمیل فرایند و پرداخت</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Factor;