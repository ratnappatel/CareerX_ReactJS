import React, { Component } from 'react';
import Employee from './DisplayEmployeeDetails';

export default class Employees extends Component{
    render(){
        return(
            <div>
                <Employee name="Raj" age="29" workLocation="Delhi"></Employee>
                <Employee name="Uttam" age="32" workLocation="Ahmedabad"></Employee>
                <Employee name="Neel" age="28" ></Employee>
                <Employee name="Gargesh" age="22" workLocation="NCR"></Employee>
            </div>
        );
    }
}