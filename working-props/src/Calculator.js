import propTypes from 'prop-types';
import React, { Component } from 'react';

export default class Product extends Component{
   
    render(){
        return(
            <div>
              
                <p>Number 1 : {this.props.number1}</p>
                <p>Number 2 : {this.props.number2}</p>
            </div>
        );
    }
}

Product.propTypes ={
    number1:propTypes.number.isRequired,
    number2:propTypes.number.isRequired
};