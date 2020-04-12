import React, { Component } from 'react'
import { employeeAll } from '../../../mocdata/Employee/employeeAll';

// REDUX
import { connect } from 'react-redux';
//ใช้ dispatch employee เพื่อใช้ในการเเก้ไขข้อมูล
import { setEmployeeData } from '../../../redux/actions/employeeAction';
import { Button } from 'antd';

class List extends Component {
    state = {
        employees: employeeAll
    }
    onClickReduxEmployee = () => {
        this.props.setEmployeeData(this.state.employees);
    }
    render() {
        console.log('Moc Employee Data: ', this.state.employees[0], 'PROPS #@$%^&* employeesListsEmployee: ', this.props);
        return (
            <div>
                <h1> EMPLOYEE LIST </h1>
                <Button onClick={this.onClickReduxEmployee}>REDUX_EMPLOYEE</Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    employeesListsEmployee: state.employeeReducer.employeesList // ปกติจะพิมพ์แค่  employeesListsEmployee: state.employeesList
});

const mapDispatchToProps = {
    setEmployeeData
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

