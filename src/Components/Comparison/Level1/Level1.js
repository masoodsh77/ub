import React, { Component } from 'react';
import { Container, Row, Col , InputGroup , Button , FormControl} from 'react-bootstrap';
import './Level1.css';
import { FaAlignJustify , FaAngleLeft } from "react-icons/fa";
import Select from "react-dropdown-select";
import Level1Cards from './Level1Cards/Level1Cards';
import { FaCheck , FaTimes } from 'react-icons/fa';
import DropdownList from 'react-widgets/lib/DropdownList'

class Level1 extends Component {
    constructor(...args) {
        super(...args)
    
        this.state = {
          value: null,
          people: [{id:1 , name:"سلام"},{id:1 , name:"مرات"},{id:1 , name:"و جواد"},], 
        }
      }
    render() {
        return (
            <div>
                <Container className="Container">
                <div className="Level1_percents">
                    <FaAlignJustify className="Level1_percentsl1_icon"/><span>گزینه های اضافی</span>
                    <Container className="Level1_percents_form Container">
                    <Row>
                        <Col>
                            <p className="Level1_percents_form_p">کد تخفیف</p>
                            <InputGroup className="mb-3 Level1_percents_form_Input">
                                <InputGroup.Prepend>
                                <Button variant="outline-success">اعمال</Button>
                                </InputGroup.Prepend>
                                <FormControl aria-describedby="basic-addon1" />
                            </InputGroup>
                        </Col>
                        <Col>
                            <p className="Level1_percents_form_p">سطح تعهدات مالی</p>
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
                        <Col>
                            <p className="Level1_percents_form_p">مدت اعتبار بیمه نامه</p>
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
                    </Row>
                    </Container>
                </div>
                    <Row style={{paddingLeft:15 , paddingRight:15}}>
                        <Col className="Level1_Side_Bar" lg={3} >
                            <div style={{textAlign:'right'}}>
                                <FaAngleLeft className="Level1_percentsl1_icon"/><span>اطلاعات مرحله قبل</span>
                            </div>
                            <div style={{paddingRight:15 , paddingLeft:15}}>
                                <p className="Level1_percents_form_p">نوع وسیله نقلیه</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                                <p className="Level1_percents_form_p">برند</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                                <p className="Level1_percents_form_p">مدل</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                                <p className="Level1_percents_form_p">سال ساخت</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                                <p className="Level1_percents_form_p">شرکت بیمه گر قبلی</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                                <p className="Level1_percents_form_p">تاریخ سر رسید</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                                <p className="Level1_percents_form_p">تاریخ سررسید بیمه نامه</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                                <p className="Level1_percents_form_p">نوع بیمه نامه</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                                <p className="Level1_percents_form_p">درصد تخفیف بیمه نامه قبلی</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />  
                                <p className="Level1_percents_form_p">تخفیف حوادث راننده</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                                <p className="Level1_percents_form_p">آیا از بیمه نامه قبلی خود خسارت دریافت کرده اید</p>
                                <div className="form-check form-check-inline sideBar_radiobtn">
                                    <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label className="form-check-label radioBtn" for="inlineRadio1">
                                        <Container>
                                            <Row>
                                                <Col lg={6} style={{paddingRight:0}}><span>بلی</span> </Col>
                                                <Col lg={6} style={{margin:"5px 0 0 0" , paddingRight:0}}>
                                                    <span><FaCheck style={{color:'green'}}/></span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </label>
                                </div>
                                <div className="form-check form-check-inline sideBar_radiobtn">
                                    <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label radioBtn" for="inlineRadio2">
                                    <Container>
                                            <Row>
                                                <Col lg={6} style={{paddingRight:0}}><span>خیر</span> </Col>
                                                <Col lg={6} style={{margin:"5px 0 0 0" , paddingRight:0}}>
                                                    <span><FaTimes style={{color:'red'}}/></span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </label>
                                </div>
                                <p className="Level1_percents_form_p">تعداد خسارت مالی و جانی</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />  
                                <p className="Level1_percents_form_p">تعداد خسارت راننده</p>
                                <DropdownList filter
                                data={this.state.people}
                                value={this.state.value}
                                onCreate={name => this.handleCreate(name)}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                            </div>
                        </Col>
                        <Col lg={9} className="Level1_main">
                            <div className="level_alert">
                                <span>با تغییر شرکت بیمه فعلی خود  تخفیف های عدم خسارت بیمه نامه شما از بین نمی رود</span>
                            </div>
                            <div className="level1_title">
                                <Container>
                                    <Row>
                                        <Col lg={2} className="title_text">
                                            شرکت بیمه
                                        </Col>
                                        <Col lg={2} className="title_text">
                                            قیمت
                                        </Col>
                                        <Col lg={2} className="title_text">
                                            سطح توانگری
                                        </Col>
                                        <Col lg={2} className="title_text">
                                            تعداد شعب پرداخت خسارت
                                        </Col>
                                        <Col lg={1}>
                                            رضایت از مبلغ پرداختی
                                        </Col>
                                        <Col lg={1}>
                                            زمان پاسخگویی به شکایات
                                        </Col>
                                        <Col lg={2} className="title_text">
                                            عملیات
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <Level1Cards/>
                            <Level1Cards/>
                            <Level1Cards/>
                            <Level1Cards/>
                            <Level1Cards/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }test
}

export default Level1;