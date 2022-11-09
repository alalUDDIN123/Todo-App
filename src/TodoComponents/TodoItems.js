import React from 'react'

function TodoItems({todos,setTodos,setEditTodo}) {
    
const handleDelete=({id})=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
}


const handleEditTodo=({id})=>{
  const FindTodo=todos.find((todo)=>todo.id===id)
  setEditTodo(FindTodo)
}

  return (
    <div>
      {
        todos.map((todo)=>(
            <li key={todo.id} className="list-item"> 
            
             <input
              type="text"
              value={todo.title}
              className="list"
              onChange={(e)=>e.preventDefault()}  />

              <div>
               
                <button className='button-edit task-button' onClick={()=>handleEditTodo(todo)} >
                    <i className='fa fa-edit'></i>
                </button>
                <button className='button-delete task-button' onClick={()=>handleDelete(todo)} >
                    <i className='fa fa-trash'></i>
                </button>
              </div>
            </li>
        ))
      }
    </div>
  )
}

export default TodoItems
