import * as types from '../const';

export const getFirstData = allData => ({
    type: types.FAK,
    allData: allData.payload
});

export const insertModels = carModels => ({
    type: types.GI,
    carModels
});

export const saveFormData = (inputName, inputValue) => ({
    type: types.SFD,
    inputName,
    inputValue
});