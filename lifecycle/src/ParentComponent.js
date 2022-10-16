import React, {Component} from 'react';

export default class Parent extends Component{
    constructor(props)
    {
        super(props);
        this.state ={
            title: 'Constructor'
        }
        console.log('Component is initialized');
    }
    static getDerivedStateFromProps(props,state)
    {
        return {title: props.titleFromParent}
    }
    render(){
        console.log('Render is called for first Time..');
        return(
            <div>
                <p> This is {this.state.title}</p>
            </div>
        );
    }
}