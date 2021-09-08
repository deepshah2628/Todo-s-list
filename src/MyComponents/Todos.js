import React from 'react'
import { TodoItem } from './TodoItem'


export const Todos = (props) => {
    // This is also the way to use css
    let myStyle={
        minHeight:"70vh",
        margin:"40px auto"      
    }
    return (
        <div className="container" style={myStyle}>
            <h4 className="my-3">Todos List</h4>
            {props.todos.length===0?<b>No Todos to display</b>:
            /*{*/ props.todos.map((todo)=>{
                return(
                    // parent element of todoItem so its props are passed here
                  
                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
                   
                )
            })
           }
        </div>
    )
}
