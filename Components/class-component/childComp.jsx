import React from 'react';



function ChildComponent (props)
{
    return(

        <div>

        <p>{props.firstName}</p>

        <p>{props.lastName}</p>

        </div>

    )
}
export default  ChildComponent;