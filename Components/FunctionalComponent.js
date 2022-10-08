import React from 'react';
import ReactDOM from 'react-dom';

// functional component

function greet(props)
{
    return <h1>Hello props</h1>
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<greet abc/>,root);