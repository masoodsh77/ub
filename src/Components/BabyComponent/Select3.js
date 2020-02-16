import React, { Component } from 'react';
import Select from 'react-dropdown-select';
import axios from 'axios';
import { connect } from 'react-redux';
import { insertModels } from '../../action';
import { saveFormData } from '../../action'

class Select3 extends Component {
    render() {
        const {
            insertModels,
            model = "0",
            placeholder,
            options,
            labelField,
            name,
            saveFormData,
            valueName = "id"
        } = this.props;
        const getModels = carId => {
            axios.post('http://37.152.182.101:8002/ubim/request/v1', {
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
            <Select
                direction="rtl"
                placeholder={placeholder}
                options={options}
                searchBy={labelField}
                labelField={labelField}
                valueField={valueName}
                onChange={(values) => {
                    saveFormData(name, String(values[0][valueName]));
                    return model === "1" ? getModels(String(values[0][valueName])) : null;
                }}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    insertModels: carId => dispatch(insertModels(carId)),
    saveFormData: (inputName, inputValue) => dispatch(saveFormData(inputName, inputValue))
})

export default connect(null, mapDispatchToProps)(Select3);
