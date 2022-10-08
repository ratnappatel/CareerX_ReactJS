import React from 'react';

class Hello extends React.Component{
    message='Hello From Message';
    constructor(props)
    {
        super(props);
    }
  // a control for lifecycle phases of React Component
    render(){
        return(
           <h1 style=''>Hello CareerX<br/>{this.props.name} <br/>
           Email : {this.props.email}</h1>
        );
    }
}
export default Hello;