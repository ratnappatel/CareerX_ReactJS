import React, {Component} from 'react';

export default class Pets1 extends Component{
    constructor(props){
        super(props);
        this.state ={
            pets: [],
            isLoading: true
        }
    }
    getAllPets(){
        this.setState({
            isLocading: true
        },
        ()=>{
            fetch("http://localhost:3004")
            .then(res=>res.json())
            .then(result=>this.setState({
                isLoading:false,
                pets:result
            })).catch(consoleo.log);
        });
    }
    componentDidMount(){this.getAllPets();}

    render(){
        const pets=this.state.pets;
        return(
            <div>
                {pets.map(
                    pet=> {
                        const {name,species,favFoods,birthYear,photo}=p;
                        return(
                            <div>
                                    <p>Name : {name}</p>
                                    <p>Species : {species}</p>
                                    <p>favFoods: {favFoods}</p>
                                    <p>BirthYear: {birthYear}</p>
                                    <p>Photo: {photo}</p>
                                </div>
                        )
                    }
                )}
            </div>
        );
    }
}