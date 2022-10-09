import React, {Component} from 'react';


export default class DemoState extends Component{
    constructor()
    {
        super();
        this.state={
            no:100,
            x:1,
            element:<h1>Hi</h1>
        };
        this.updateValue=this.updateValue.bind(this);
    }

    render(){
        return(
            <div>
                <div>{this.setState.element}</div>
                <p>x = {this.state.x++}</p>
                <h1>No = {this.state.no}</h1>
                <button onClick={this.updateValue}>Update No</button>
            </div>
        )
    }

    // event handler == bind to assign this
    updateValue(){
       // no:100+5;
        this.setState({
            no:this.state.no+5,
            element:"<p>Hello</p>"});
    }
}