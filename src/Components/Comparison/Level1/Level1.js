import React, { Component } from 'react';
import { Container , Modal , Row, Col , InputGroup , Button , FormControl , DropdownButton , Dropdown, Navbar} from 'react-bootstrap';
import './Level1.css';
import { FaAlignJustify , FaAngleLeft , FaEdit} from "react-icons/fa";
import Level1Cards from './Level1Cards/Level1Cards';
import DropdownList from 'react-widgets/lib/DropdownList';


class Level1 extends Component {
    constructor() {
        super()
    
        this.state = {
            editShow:false,
            damageShow:false,
            value: null,
            damagevalue:null,
            people: [{id:1 , name:"مرات"},{id:2 , name:"جواد"},{id:3 , name:"ممد"}], 
            damage:[{id:1 , name:"با خسارت"},{id:2 , name:"بی خسارت"}]
        }
      }
        handleClose = () => this.setState({
            editShow : false
        });
        handleShow = () => this.setState({
            editShow: true
        });
      hanleDamage = (e) =>{
        this.setState({ damagevalue:e })
        if (e.id === 1){
            this.setState({
                damageShow:true
            })
        }else{
            this.setState({
                damageShow:false
            })
        }
      }
    render() {
        return (
            <div>
                <Container className="Container">
                <div className="Level1_percents">
                    <FaAlignJustify className="Level1_percentsl1_icon"/><span>اطلاعات بیشتر</span>
                    <Container className="Level1_percents_form Container">
                    <Row>
                        <Col lg={4} xs={12}>
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
                        <Col lg={4} xs={12}>
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
                        <Col lg={4} xs={12}>
                            <p className="Level1_percents_form_p">کد تخفیف</p>
                            <InputGroup className="mb-3 Level1_percents_form_Input">
                                <InputGroup.Prepend> 
                                <Button variant="outline-success">اعمال</Button>
                                </InputGroup.Prepend>
                                <FormControl aria-describedby="basic-addon1" />
                            </InputGroup>
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
                                <DropdownList filter
                                data={this.state.damage}
                                value={this.state.damagevalue}
                                onCreate={name => this.handleCreate(name)}
                                onChange={this.hanleDamage}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                            {this.state.damageShow ?
                            <div>
                                <p className="Level1_percents_form_p">تعداد خسارت مالی و جانی</p>
                                <DropdownList filter
                                data={this.state.people}
                                damagevalue={this.state.value}
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
                            </div>:null}
                            </div>
                        </Col>
                        <Col lg={9} className="Level1_main">
                            <div className="level_alert">
                                <span>با تغییر شرکت بیمه فعلی خود  تخفیف های عدم خسارت بیمه نامه شما از بین نمی رود</span>
                            </div>
                            <div className="level1_title">
                                <Container>
                                    <Row>
                                        <Col lg={9} md={9} sm={6} xs={6}>
                                            <span className="title_text">لیست شرکت ها</span>
                                        </Col>
                                        <Col lg={3} md={3} sm={6} xs={6}>
                                            <DropdownButton className="filters" variant="warning" id="dropdown-basic-button" title="فیلتر ها">
                                                <Dropdown.Item href="#/action-1">کمترین قیمت</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">بیشترین قیمت</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">تعداد شعب</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">رضایت از پرداخت</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">سطح توانگری</Dropdown.Item>
                                            </DropdownButton>
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
                <div className="NavDownbar" >
                    <Navbar bg="light" fixed="bottom" className="NavDownbar">
                        <Button variant="warning" block onClick={this.handleShow}>ویرایش اطلاعات <FaEdit className="edit_icon"/></Button>
                    </Navbar>
                    <Modal show={this.state.editShow} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>ویرایش اطلاعات</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                                <DropdownList filter
                                data={this.state.damage}
                                value={this.state.damagevalue}
                                onCreate={name => this.handleCreate(name)}
                                onChange={this.hanleDamage}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                            {this.state.damageShow ?
                            <div>
                                <p className="Level1_percents_form_p">تعداد خسارت مالی و جانی</p>
                                <DropdownList filter
                                data={this.state.people}
                                damagevalue={this.state.value}
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
                            </div>:null}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            انصراف
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            اعمال تغییرات
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Level1;