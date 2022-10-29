import React, { Component } from "react";


export default class UncontrolledForm extends Component
{
    constructor()
    {
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
        this.ref=React.createRef();
    }

    handleSubmit= evt=> {
        evt.preventDefault();
        console.log(this.ref.name.value);
    };


    render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" ref="name"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
        );
    }
}

