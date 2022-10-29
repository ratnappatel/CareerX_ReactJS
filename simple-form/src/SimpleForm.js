import React,{Component} from 'react';

export default class SimpleForm extends Component{
    constructor(){
        super();
        this.state={
            topicName: 'React JS'
        }
       this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit = evt =>{
        evt.preventDefault();
        alert("Today's Topic was : "+this.state.topicName);
        

    }
    render(){
        return(
            <div>
                <h1>Kindly Provide Your Details To Procceed</h1>
                <form onSubmit={this.handleSubmit} >
                    <label>Enter Your Name</label>
                    <input name="name" value={this.state.topicName} 
                    placeholder="Enter The Topic Covered Today" required onChange={evt=>this.setState({topicName:evt.target.value})}/>
                    <button type="submit">Submit</button>
                </form>
                <p>Today's Topic was : {this.state.topicName}</p>
            </div>
        );
    }
}