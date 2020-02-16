import React, { Component } from 'react';
import { Container , Col , Row } from 'react-bootstrap';
import './PreInsurance.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import DropdownList from 'react-widgets/lib/DropdownList'

class PreInsurance extends Component {
    constructor(props) {
        super(props);
        this.state ={
            selectedDay:'',
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
            width:"250px",
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
     <div className="preinsurance">
         <Container>
             <Row>
                 <Col>
                    <p>شرکت بیمه گر قبلی</p>
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
             <Row>
                 <Col>
                    <p>تاریخ سر رسید بیمه نامه </p>
                    <DatePicker
                    value={this.state.selectedDay}
                    onChange={this.handelEndate}
                    renderInput={endDate}
                    shouldHighlightWeekends
                    locale="fa"
                  />
                 </Col>
                 <Col>
                    <p>نوع بیمه نامه</p>
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
   )
 }
}

export default PreInsurance;