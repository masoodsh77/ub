import React, { Component } from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import './Percents.css';
import DropdownList from 'react-widgets/lib/DropdownList'

class Percents extends Component {
    constructor(...args) {
        super(...args)
    
        this.state = {
          value: null,
          people: [{id:1 , name:"سلام"},{id:1 , name:"مرات"},{id:1 , name:"و جواد"},], 
        }
      }
    render() {
        return (
            <div className="percents">
                <Container>
                    <Row>
                        <Col>
                            <p>درصد تخفیف بیمه نامه قبلی</p>
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
                            <p>تخفیف حوادث راننده</p>
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

export default Percents;