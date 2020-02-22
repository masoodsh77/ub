import React, { Component } from 'react';
import './SubmitForm.css'
import { Container , Row , Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-modern-calendar-datepicker';
import  UploadImages  from  'yagoubi-upload-images';
import { FaTasks , FaImages } from 'react-icons/fa';

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
        selectedDay:'',
        GenderMan : "SubmitForm_Group_man",
        GenderWoman : "SubmitForm_Group_man",
    }
}
onChange = (images) =>{
 
  console.log(images)
   
  }
  handelGender = (value) =>{
    console.log(value.target.id)
    if (value.target.id === "1"){
      this.setState({
        GenderMan: "SubmitForm_Group_man SubmitForm_Group_man_active",
        GenderWoman : "SubmitForm_Group_man"
      })
    }else{
      this.setState({
        GenderWoman: "SubmitForm_Group_man SubmitForm_Group_man_active",
        GenderMan:"SubmitForm_Group_man"
      })
    }
  }
 render() {
  const endDate = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="انتخاب کنید "
      value={this.state.selectedDay ? `${this.state.selectedDay.year}/${this.state.selectedDay.month}/${this.state.selectedDay.day}` : ''}
      style={{
        width:"350px",
        textAlign: 'center',
        padding: '0.4rem 0.1rem',
        fontSize: '15px',
        border: '1px solid lightgray',
        borderRadius: '4px',
        color: 'black',
        outline: 'none',
      }}
      required={true}
      className="calender" // a styling class
    />)
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
      <div className="SubmitForm">
        <div className="SubmitForm_titr">
          <FaTasks className="SubmitForm_icon"/><span className="SubmitForm_text">اطلاعات فردی بیمه گذار</span>
        </div>
          <Form>
            <Container>
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group className="SubmitForm_Group">
                    <Form.Label>نام</Form.Label>
                    <Form.Control type="text" placeholder="نام خود را وارد کنید" />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group className="SubmitForm_Group">
                    <Form.Label>نام خانوادگی</Form.Label>
                    <Form.Control type="text" placeholder="نام خانوادگی خود را وارد نمایید" />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group className="SubmitForm_Group">
                    <Form.Label>کد ملی</Form.Label>
                    <Form.Control type="number" placeholder="کد ملی خود را وارد کنید" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group className="SubmitForm_Group">
                    <Form.Label>تاریخ تولد</Form.Label><br></br>
                    <DatePicker
                    value={this.state.selectedDay}
                    onChange={this.handelEndate}
                    renderInput={endDate}
                    shouldHighlightWeekends
                    locale="fa"
                  />
                  </Form.Group>
                </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group className="SubmitForm_Group">
                    <Form.Label>جنسیت</Form.Label><br></br>
                      <div className={this.state.GenderMan} id="1" onClick={this.handelGender}>مرد</div>
                      <div className={this.state.GenderWoman} id="2" onClick={this.handelGender}>زن</div>
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
      </div>
      <div className="SubmitForm">
        <div className="SubmitForm_titr">
          <FaImages className="SubmitForm_icon"/><span className="SubmitForm_text">ارسال تصاویر</span>
        </div>
        <Container>
          <Row style={{direction:"ltr", textAlign:"right" , fontSize:14}}>
            <Col lg={4} md={4} sm={12} xs={12}>
              <p>عکس بیمه نامه</p>
              <UploadImages onChange={this.onChange} placeholder="عکس بیمه نامه"/>
              <div className="SubmitForm_alert">
                <span>تصویر بیمه نامه باید کامل و واضح باشد</span>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <p>عکس روی کارت ماشین</p>
              <UploadImages onChange={this.onChange} placeholder="عکس روی کارت ماشین"/>
              <div className="SubmitForm_alert">
                <span>تصویر کارت ماشین باید خوانا و واضح باشد</span>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <p>عکس پشت کارت ماشین</p>
              <UploadImages onChange={this.onChange} placeholder="عکس پشت کارت ماشین"/>
              <div className="SubmitForm_alert">
                <span>تصویر کارت ماشین باید خوانا و واضح باشد</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="SubmitForm">
      </div>
     </div>
   )
 }
}

export default SubmitForm;