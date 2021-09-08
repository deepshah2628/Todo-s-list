import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <>
        <div>
            <h5>{todo.title}</h5>
            <p>{todo.desc}</p>

            {/* By writing just ondelete(todo) the function will be called at render so we require arrow function  */}
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
           
        </div>
            <hr />
            </>
    )
}
