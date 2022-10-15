import React, { Component } from 'react';

// a presentational component 
export default class Employee extends Component{
    render(){
        return(
            <div>
                <p>Name : {this.props.name}</p>
                <p>Age : {this.props.age}</p>
                <p>Work Location: {this.props.workLocation}</p>
            </div>
        );
    }
}

Employee.defaultProps={
    workLocation: 'Bangaluru'
};