import React, { Component } from 'react';
import reactDom from 'react-dom';
import ChildComponent from './childComp';

class StatefulComponent extends Component {
  state = {  
    firstName: 'Wiley',
    lastName: 'India Private Ltd.'
  }
  render() { 
    return (
      <div>
        <p> I carry my own state..</p>
          <ChildComponent firstName={this.state.firstName}  lastName={this.state.lastName} />
      </div>
      );
  }
}
 
export default StatefulComponent;

reactDom.render(<StatefulComponent/>, document.getElementById('root'));
