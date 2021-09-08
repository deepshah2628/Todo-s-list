import React,{useState} from 'react'

export const AddTodos = (props) => {

    // Syntax for useState const [state, setstate] = useState(initialState)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const Submit = (event)=>{
        event.preventDefault();
        if(!desc || !title){
            alert("title and description cannot be blank");
        }
        else{
        props.addTodo(title,desc)
        
        // This will empty up the title and desc after addTodo is called
        setTitle("")
        setDesc("");
    }
}

    return (
        <div className="container my-3">
            <h4>Add a Todo</h4>
            <form onSubmit={Submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Todo Titte
                    </label>
                    <input
                        type="text"
                        value={title}
                        // This will allow text box to enter values at id title
                        onChange={((event)=>setTitle(event.target.value))}
                        className="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                    />
                    {/* <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>  */}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Description
                    </label>
                    <input type="text" value={desc} onChange={(event)=>(setDesc(event.target.value))} className="form-control" id="desc" />
                </div>
                {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div> */}
                <button type="submit" className="btn btn-sm btn-outline-success">
                    Add Todo
                </button>
            </form>

        </div>
    )
}
