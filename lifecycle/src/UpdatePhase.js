import React,{Component} from 'react';

export default class UpdatePhase extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            title:'shouldComponentUpdate'
        }
    }

   shouldComponentUpdate(){
        return true;
    }
 
    componentDidMount(){
        setTimeout(()=>{
            this.setState({title:'componentDidMount'})
        },5000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        document.getElementById('previous-state').innerHTML="The Previous Value of title State is : "+prevState.title;
    }
    componentDidUpdate()
    {
        document.getElementById('Updated-state').innerHTML="The Current Value of title State is : "+this.state.title;
    }

    render()
    {
        return(
            <div>
                <p>This is a {this.state.title}</p>

                <p id='Updated-state'></p>
                <p id='previous-state'></p>
            </div>
        )
    }
}