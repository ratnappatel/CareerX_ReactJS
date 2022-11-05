import React, {Component} from 'react';
import ReactFormInputValidation from 'react-form-input-validation';

export default class ValidationForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            fields:{
                email:'',
                password:'',
                phone:''
            },
            errors:{}
        }
        this.form=new ReactFormInputValidation(this);
        this.form.useRules({
            email: "required|email",
            password:"required|size:8",
            phone:"required|numeric|digits_between: 8,10"
        });
        this.form.onformsubmit=(fields)=>{
            // URL to Express JS 
        }
    }
    handleChangeEvent(e){
        const name=e.target.name;
        const value=e.target.value;
        this.setState({fields.name: value});
    }

    render()
    {
        return(
            <React.Fragment>
                <form onSubmit={this.form.handleSubmit}>
                    <p>Email</p>
                    <input type="text" onBlur={this.form.handleBlurEvent} onChange={(evt)=>this.handleChangeEvent(evt)}
                    value={this.state.fields.email}/>
                    <div>
                    <label className="error">
                        {this.state.errors.email?this.state.errors.email:""}
                    </label>
                    </div>

                    <p>Password</p>
                    <input type="password" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} 
                    value={this.state.fields.password}/>
                    <div>
                    <label className="error">
                        {this.state.errors.password?this.state.errors.password:""}
                    </label>
                    </div>

                    <p>Phone</p>
                    <input type="number" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} 
                    value={this.state.fields.phone}/>
                    <div>
                    <label className="error">
                        {this.state.errors.phone?this.state.errors.phone:""}
                    </label>
                </div>
                </form>
                
            </React.Fragment>
        )
    }
}