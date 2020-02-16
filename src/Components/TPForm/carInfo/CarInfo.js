import React, { Component } from 'react';
import Select from "react-dropdown-select";
import './CarInfo.css'
import DropdownList from 'react-widgets/lib/DropdownList'


class CarInfo extends Component {
    constructor(...args) {
        super(...args)
    
        this.state = {
          value: null,
          people: [{id:1 , name:"سلام"},{id:1 , name:"مرات"},{id:1 , name:"و جواد"},], 
        }
      }
    render() {
        const { cars } = this.props;
        return (
            <div className="carinfo">
                <div className="container">
                    <div className="carinfo_header">
                        <h2>بیمه شخص ثالث</h2>
                        <h6>نوع، برند و سال ساخت خودروی خود را انتخاب کنید.</h6>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>نوع وسیله نقلیه</p>
                            <DropdownList filter
                                data={cars}
                                value={this.state.value}
                                onChange={value => this.setState({ value })}
                                textField="name"
                                placeholder="انتخاب کنید"
                                style={{textAlign:"right"}}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p>برند</p>
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
                        <div className="col-6">
                            <p>مدل</p>
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
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>سال ساخت</p>
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
                    </div>
                </div>

            </div>
        );
    }
}

export default CarInfo;