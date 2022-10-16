import React, {Component} from 'react';
import Parent from './ParentComponent';

// presentation logic
export default class Child extends Component{
    render()
    {
        return(
            <div>
                <Parent titleFromParent="getDerivedStsteFrom method"/>
            </div>
        )
    }
}