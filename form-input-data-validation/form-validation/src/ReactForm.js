//import 'ReactForm.css';
import React,{Component} from 'react';
import { FormErrors } from './FormErrors';

export default class Form extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email:'Enter Your Email ID',
            password:'',
            formErrors:{email:'',password:''},
            emailValid:false,
            passwordValid:false,
            formValid:false
        }
    }

    //generic event handler
    handleInput(e){
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]: value},
            ()=>{this.validateInput(name,value)});
    }
    validateInput(fieldName,value)
    {
        let fieldError=this.state.formErrors;
        let emailValid=this.state.emailValid;
        let passwordValid=this.state.passwordValid;

        switch(fieldName)
        {
            case 'email':
                emailValid=value.match(/^([\W.%+-]+)@([\W-]+\.)+([\W]{2,})$/i);
                fieldError.email= emailValid ? '': ' is invalid email';
                break;
            case 'password':
                passwordValid=value.length>=8;
                fieldError.password=passwordValid?'':' is too short';
                break;
            default:
                    break;
        }
        this.setState({formErrors:fieldError,emailValid:emailValid,
        passwordValid:passwordValid},this.validateForm)
    }
    validateForm()
    {
        this.setState({formValid:this.state.emailValid && this.state.passwordValid});
    }

    render(){
        return(
            <div>
                <div className="panel panel-default">
                    <p>Validation Error goes Here..</p>
                   <FormErrors formErrors={this.state.formErrors}></FormErrors>
                </div>
            <form className="demoForm">
                <h2>Sign In</h2>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" 
                    name="email" required value={this.state.email} onChange={(evt)=>this.handleInput(evt)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" 
                    name="password" required value={this.state.password} onChange={(evt)=>this.handleInput(evt)}/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>
                    Sign Me In
                </button>

            </form>
            <p> Email :{this.state.email} </p>
            <p> Password :{this.state.password} </p>
            </div>
        )  }
}
