import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './PreInsurance.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import DropDown from '../../BabyComponent/DropDown';
import { connect } from 'react-redux';
import { saveFormData } from '../../../action';
class PreInsurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: '',
        }
    }

    render() {
        const {
            company,
            preInsuranceDuration,
            selDate,
            saveFormData
        } = this.props;
        const endDate = ({ ref }) => (
            <input
              readOnly
              ref={ref} // necessary
              placeholder="انتخاب کنید "
              value={selDate ? `${selDate.year}/${selDate.month}/${selDate.day}` : ''}
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
                            <DropDown
                                name="selPreInsur"
                                selectOptions={company}
                                textField="title"
                                valueField="id"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>تاریخ سر رسید بیمه نامه </p>
                            <DatePicker
                                value={selDate}
                                onChange={event => {
                                    localStorage.setItem('selDay',event.day);
                                    localStorage.setItem('selMonth',event.month);
                                    localStorage.setItem('selYear',event.year);
                                    saveFormData('selDate',event)
                                }}
                                renderInput={endDate}
                                shouldHighlightWeekends
                                locale="fa"
                            />
                        </Col>
                        <Col>
                            <p>نوع بیمه نامه</p>
                            <DropDown
                                name="selPreInsuranceDuration"
                                selectOptions={preInsuranceDuration}
                                textField="title"
                                valueField="id"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    saveFormData: (inputName, inputValue) => dispatch(saveFormData(inputName, inputValue))
})

export default connect(null, mapDispatchToProps)(PreInsurance);