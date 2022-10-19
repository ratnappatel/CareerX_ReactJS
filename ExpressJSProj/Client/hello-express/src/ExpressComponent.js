import React,{Component} from 'react';

export default class ExpressComponent extends Component{
    constructor()
    {
        super();
        this.state={
            message:"",
            isLoading:false
        }
    }
    getCall()
    {
        this.setState({
            isLocading: true
        },
        ()=>{
            fetch("http://localhost:8082/")
            .then(res=>res.text())
            .then(result=>this.setState({
                isLoading:false,
                message:result
            })).catch(console.log);
        });
        console.log(this.state.message);
    }
    componentDidMount(){this.getCall();}
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}