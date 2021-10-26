import React from 'react'
import {ToDoItems} from './ToDoItems';

export const ToDos = (props) => {
    let myStyle ={
        minHeight : "70vh",
        margin: "40px auto"
    }
    return (
        
        <div className="container" style={myStyle}>
            <h3 className="my-3">ToDOs List</h3>
            {props.todos.length === 0 ? "No Todos to display" :
            props.todos.map((todo)=>{
                return <ToDoItems todo = {todo} key={todo.srno} onDelete={props.onDelete}/> 
            
            })
        
            }
            
            
        </div>
    )
}
