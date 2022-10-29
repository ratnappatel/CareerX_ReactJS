import SimpleForm from './SimpleForm';
import './App.css';
import UncontrolledForm from './UncontrolledForm';
import React from 'react';

function App() {
  return (
    <div>
      <React.StrictMode>
        <SimpleForm></SimpleForm>
        <UncontrolledForm></UncontrolledForm>
      </React.StrictMode>
    </div>
  );
}

export default App;
