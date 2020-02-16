import React, { Component } from 'react';
import axios from 'axios';
import DropdownList from 'react-widgets/lib/DropdownList';
import { connect } from 'react-redux';
import { insertModels } from '../../action';
import { saveFormData } from '../../action';
import { SERVER_URL } from '../../const';


class DropDown extends Component {
    render() {
        const {
            name,
            textField,
            valueField,
            brand = 0,
            selectOptions,
            insertModels,
            saveFormData
        } = this.props;
        const getModels = carId => {
            axios.post(SERVER_URL, {
                "payload": {
                    "carid": carId
                },
                "group": "service",
                "key": "carModel",
                "src": "third"
            })
                .then(response => {
                    insertModels(response.data.payload)
                })
                .catch(err => console.log(err));
        }
        return (
            <DropdownList filter
                busy={selectOptions ? false : true}
                data={selectOptions}
                onChange={value => {
                    localStorage.setItem(name,value[valueField]);
                    saveFormData(name,value[valueField]);
                    return brand ? getModels(String(value.id)) : null
                }}
                textField={textField}
                placeholder="انتخاب کنید"
                style={{ textAlign: "right" }}
            />
        );
    }
}

const mapStateToProps = state => ({
    models: state.third.carModels
});

const mapDispatchToProps = dispatch => ({
    insertModels: carId => dispatch(insertModels(carId)),
    saveFormData: (inputName, inputValue) => dispatch(saveFormData(inputName, inputValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);