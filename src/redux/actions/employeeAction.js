import { SET_EMPLOYEE_LIST } from './types';

export const setEmployeeData = data => dispatch => { // set dispatch เพื่อแก้ไข employee
    dispatch({
        type: SET_EMPLOYEE_LIST,
        payload: data
    })
}