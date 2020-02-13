import React, { Component } from 'react';
import Select from "react-dropdown-select";
import { Container, Row , Col } from 'react-bootstrap';
import './Damages.css'
import DropdownList from 'react-widgets/lib/DropdownList'

class Damages extends Component {
    constructor(...args) {
        super(...args)
    
        this.state = {
          value: null,
          people: [{id:1 , name:"سلام"},{id:1 , name:"مرات"},{id:1 , name:"و جواد"},], 
        }
      }
    render() {
        return (
            <div className="damages">
                <Container>
                    <Row>
                        <Col>
                            <p>آیا از بیمه نامه قبلی خسارت دریافت کرده اید</p>
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
                            <p>درصد تخفیف ثالث</p>
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
                            <p>درصد تخفیف حوادث راننده</p>
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
        );
    }
}

export default Damages;