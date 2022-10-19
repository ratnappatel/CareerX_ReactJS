import './App.css';
import React,{Component} from 'react';
//import Pets from './PetsComponent';

function App() {
  return (
    <div >
     <Pets></Pets>
    </div>
  );
}


class Pets extends Component{
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
          fetch("http://localhost:3004/pets")
             .then(result=>this.setState({
              isLoading:false,
              pets:result
          })).catch(console.log);
      });
  }
  componentDidMount(){this.getAllPets();}

  render(){
      const pets=this.state.pets;
      console.log(this.state.pets);
      return(
          <div>
              {pets.map(
                  pet=> {
                      const {name,species,favFoods,birthYear,photo}=pet;
                      return(
                            <div key={name}>
                                  <p><strong>Name :</strong> {name}</p>
                                  <p >Species : {species}</p>
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


export default App;
