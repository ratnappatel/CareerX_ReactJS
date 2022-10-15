import React, {Component} from 'react';
function App() {
  return (
       <div>
        <h1><Employees></Employees></h1>
       </div>
      );
}



class Employees extends Component{
  render(){
      return(
          <div>
              <Employee name="Raj" age="29" workLocation="Delhi"></Employee>
              <Employee name="Uttam" age="32" workLocation="Ahmedabad"></Employee>
              <Employee name="Neel" age="28" ></Employee>
              <Employee name="Gargesh" age="22" workLocation="NCR"></Employee>
          </div>
      );
  }
}


class Employee extends Component{
  render(){
      return(
          <div>
              <p>Name : {this.props.name}</p>
              <p>Age : {this.props.age}</p>
              <p>Work Location: {this.props.workLocation}</p>
              <hr height="5"></hr>
          </div>
      );
  }
}

Employee.defaultProps={
  workLocation: 'Bangaluru'
};

export default App;
