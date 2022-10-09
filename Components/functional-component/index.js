import React from 'react';
import PropTypes from 'prop-types';
import reactDom from 'react-dom';

//arrow components 
const FirstComponent = props => (
<div>
Hello, {props.name}! I am a FirstComponent.
</div>
);


reactDom.render(<FirstComponent name="Ghanu"/>,document.getElementById("root"));

// To use FirstComponent in another file it must be exposed through an export call:
export default FirstComponent;