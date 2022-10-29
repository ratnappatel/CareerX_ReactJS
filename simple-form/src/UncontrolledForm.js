import React, { Component } from "react";


export default class UncontrolledForm extends Component
{
    constructor()
    {
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
        this.myRef=React.createRef();
    }

    handleSubmit= evt=> {
        evt.preventDefault();
        console.log(this.myRef.current.value);
        console.log(evt.target);
    };


    render(){
    return(
        <div>
            <form >
                <input type="text" name="name" ref={this.myRef}></input>
                <input type="button" value="Submit" onClick={this.handleSubmit}></input>
            </form>
        </div>
        );
    }
}

