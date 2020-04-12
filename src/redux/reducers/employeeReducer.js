import { SET_EMPLOYEE_LIST } from '../actions/types';

const initState = {
    employeesList: {
        "id": 11,
        "name": "redux_name",
        "nickname": "redux_nickname",
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_EMPLOYEE_LIST:
            return {...state, employeesList: action.payload}
        default:
            return state;
    }
}