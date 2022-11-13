import React,{Component} from 'react';

class Calculator extends Component{

    constructor()
    {
        super();
        this.state={
            count: 0
        };
    }
    incrementCount = ()=>this.setState({count: this.state.count+1});
    decrementCount = ()=>this.setState({count: this.state.count-1});

    render(){
        return(
            <div>
                <p> You Clicked to increment {this.state.count} times.</p>
                <p> After decrement Count is {this.state.count} .</p>
            <button onClick={this.incrementCount}> ++ </button>
            <button onClick={this.decrementCount}> -- </button>
            </div>
        );
    }
}
export default Calculator;