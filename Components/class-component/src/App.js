import Greet from './ClassComponent';
import Hello from './ClassComponent1';
import './App.css';

function App() {
  return (
    <div className="App">
      // initializing a component
      <Greet name='Varniraj IT Services PVT LTD.' email='ratnappatel@gmail.com'></Greet>
      <Hello name='Ghanshyam Private LTD..' email='varni@gmail.com'></Hello>
    </div>
  );
}

export default App;
