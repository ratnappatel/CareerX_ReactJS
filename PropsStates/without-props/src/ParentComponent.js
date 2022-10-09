import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {  
    render() {
      return (
        <h1>
         <font color='blue'> I'm the parent component.</font>
          <ChildComponent text="I'm 1st Child"/>
          <ChildComponent text="I'm 2st Child"/>
          <ChildComponent text="I'm 3st Child"/>
        </h1>
      );
    }
  }

