import React, { Component } from 'react';
import './SendInfo.css';
import { Form, Container, Row, Col , Alert } from 'react-bootstrap';
import DropdownList from 'react-widgets/lib/DropdownList';
import { FaTasks , FaShippingFast } from 'react-icons/fa';
import QueueAnim from 'rc-queue-anim';

class SendInfo extends Component {
    constructor(...args) {
        super(...args)
    
        this.state = {
          value: null,
          people: [{id:1 , name:"سلام"},{id:1 , name:"مرات"},{id:1 , name:"و جواد"},],
          PreAddressBtn:"SendInfo_SendTo_Btn",
          NewAddressBtn:"SendInfo_SendTo_Btn",
          ShowNewAddress : false
        }
      }
      handleAddress = (id) => {
        if (id.target.id === "1"){
            this.setState({
                PreAddressBtn:"SendInfo_SendTo_Btn selected",
                NewAddressBtn:"SendInfo_SendTo_Btn",
                ShowNewAddress:false
            })
        }else{
            this.setState({
                PreAddressBtn:"SendInfo_SendTo_Btn",
                NewAddressBtn:"SendInfo_SendTo_Btn selected" ,
                ShowNewAddress:true
            })
        }
      }
    render() {
        return (
            <div>
                <div className="SubmitForm">
                <Container>
                <Row>
                    <Col lg={2} md={2} sm={6} xs={6} className="SubmitForm_Information">
                    <span>نوع خودرو : </span><br/><span> پژو </span>
                    </Col>
                    <Col lg={2} md={2} sm={6} xs={6} className="SubmitForm_Information SubmitForm_Information_XS">
                    <span>مدل خودرو : </span><br/><span> 405 </span>
                    </Col>
                    <Col lg={2} md={2} sm={6} xs={6} className="SubmitForm_Information SubmitForm_Information_XS_BorderTop">
                    <span>سال ساخت : </span><br/><span> 1395 </span>
                    </Col>
                    <Col lg={2} md={2} sm={6} xs={6} className="SubmitForm_Information SubmitForm_Information_XS SubmitForm_Information_XS_BorderTop">
                    <span>کاربری خودرو : </span><br/><span> شخصی </span>
                    </Col>
                    <Col lg={2} md={2} sm={6} xs={6} className="SubmitForm_Information SubmitForm_Information_XS_BorderTop">
                    <span>تاریخ انقضا بیمه نامه  : </span><br/><span> 1/1/1 </span>
                    </Col>
                    <Col lg={2} md={2} sm={6} xs={6} className="SubmitForm_Information_End SubmitForm_Information_XS_BorderTop">
                    <span>شماره موبایل : </span><br/><span> 09185624908 </span>
                    </Col>
                </Row>
                </Container>
            </div>
                <div className="SendInfo">
                    <div className="SubmitForm_titr">
                        <FaTasks className="SubmitForm_icon"/><span className="SubmitForm_text">اطلاعات آدرس درج شده روی بیمه نامه</span>
                    </div>
                    <Form>
                        <Container>
                            <Row>
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <p className="Level1_percents_form_p">استان</p>
                                    <DropdownList filter
                                        data={this.state.people}
                                        value={this.state.value}
                                        onCreate={name => this.handleCreate(name)}
                                        onChange={value => this.setState({ value })}
                                        textField="name"
                                        placeholder="انتخاب کنید"
                                        style={{textAlign:"right"}}
                                    />
                                </Col>
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <p className="Level1_percents_form_p">شهر</p>
                                    <DropdownList filter
                                        data={this.state.people}
                                        value={this.state.value}
                                        onCreate={name => this.handleCreate(name)}
                                        onChange={value => this.setState({ value })}
                                        textField="name"
                                        placeholder="انتخاب کنید"
                                        style={{textAlign:"right"}}
                                    />
                                </Col>
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <Form.Group className="SubmitForm_Group">
                                        <Form.Label className="Level1_percents_form_p">کدپستی</Form.Label>
                                        <Form.Control type="number" placeholder="کدپستی خود را وارد کنید" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className="Level1_percents_form_p" style={{textAlign:"right"}}> آدرس </Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </div>
                <div className="SendInfo">
                    <div className="SubmitForm_titr">
                        <FaShippingFast className="SubmitForm_icon"/><span className="SubmitForm_text">اطلاعات تحویل بیمه‌نامه</span>
                    </div>
                    <Form>
                        <Container>
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                <Form.Group className="SubmitForm_Group">
                                    <Form.Label>نام و نام خانوادگی تحویل گیرنده</Form.Label>
                                    <Form.Control type="text" placeholder="نام و نام خانوادگی تحویل گیرنده" />
                                </Form.Group>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                <Form.Group className="SubmitForm_Group">
                                    <Form.Label>شماره موبایل تحویل گیرنده</Form.Label>
                                    <Form.Control type="number" placeholder="شماره موبایل تحویل گیرنده" />
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} style={{padding:0}}>
                                    <div className="SendInfo_SendTo">
                                        <p>ارسال به : </p>
                                        <div id="1" className={this.state.PreAddressBtn} onClick={this.handleAddress}>آدرس بیمه نامه</div>
                                        <div id="2" className={this.state.NewAddressBtn} onClick={this.handleAddress}>آدرس جدید</div>
                                    </div>
                                </Col>
                                {this.state.ShowNewAddress ? 
                                <Col lg={8} className="SendInfo_NewAddressForm">
                                    <Container>
                                    <QueueAnim>
                                        <Row key="1">
                                            <Col lg={4} md={4} sm={12} xs={12}>
                                                <p className="Level1_percents_form_p">استان</p>
                                                <DropdownList filter
                                                    data={this.state.people}
                                                    value={this.state.value}
                                                    onCreate={name => this.handleCreate(name)}
                                                    onChange={value => this.setState({ value })}
                                                    textField="name"
                                                    placeholder="انتخاب کنید"
                                                    style={{textAlign:"right"}}
                                                />
                                            </Col>
                                            <Col lg={4} md={4} sm={12} xs={12}>
                                                <p className="Level1_percents_form_p">شهر</p>
                                                <DropdownList filter
                                                    data={this.state.people}
                                                    value={this.state.value}
                                                    onCreate={name => this.handleCreate(name)}
                                                    onChange={value => this.setState({ value })}
                                                    textField="name"
                                                    placeholder="انتخاب کنید"
                                                    style={{textAlign:"right"}}
                                                />
                                            </Col>
                                            <Col lg={4} md={4} sm={12} xs={12}>
                                                <Form.Group className="SubmitForm_Group">
                                                    <Form.Label className="Level1_percents_form_p">کدپستی</Form.Label>
                                                    <Form.Control type="number" placeholder="کدپستی خود را وارد کنید" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row key="2">
                                            <Col >
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label className="Level1_percents_form_p" style={{textAlign:"right"}}> آدرس </Form.Label>
                                                    <Form.Control as="textarea" rows="3" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        </QueueAnim>
                                    </Container>
                                </Col>
                                :null}
                                
                            </Row>
                            <Alert variant="danger" className="SendInfo_Alert">
                                پس از صدور بیمه نامه برای ارسال با شما هماهنگی به عمل خواهد آمد.
                            </Alert>
                        </Container>
                    </Form>
                    
                </div>
                <div className="SendInfo"></div>
            </div>
        )
    }
}

export default SendInfo