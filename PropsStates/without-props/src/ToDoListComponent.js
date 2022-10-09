import { Component } from "react";
import DisplayTask from "./DisplayToDoTasks";

export default class ToDoList extends Component
{
    constructor(){
        super();
        this.state={
            // state is implicitly a JSON Object
            tasks:["Upload Hands-On","Update Reference Docs",
            "Provide Node Tutorial","Develop New Examples","Prepare Presentations"]
        };
    }
    render(){
        return(
        <div>
            <ul>
                {
                    this.state.tasks.map((t)=>
                        
                        <DisplayTask task={t}></DisplayTask>
                        
                    )
                       
                }
            </ul>
        </div>
        )
    }
}