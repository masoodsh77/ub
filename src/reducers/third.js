import jDate from 'jalali-date';
const jdate = new jDate();
const third = (state = {}, action) => {
    switch (action.type) {
        case 'FIRST_AID_KIT':
            return {
                ...state,
                ...action.allData,
                selDamageRecived: "0",
                selUbimDiscount: "",
                selDate: {
                    day: jdate.getDate(),
                    month: jdate.getMonth(),
                    year: jdate.getFullYear()
                }
            };
        case 'INSERT_MODELS':
            return {
                ...state,
                carModels: action.carModels
            };
        case 'SAVE_FORM_DATA':
            return{
                ...state,
                [action.inputName]: action.inputValue
            }
        default:
            return state;
    }
}

export default third;