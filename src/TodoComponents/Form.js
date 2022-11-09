import React, { useEffect } from 'react';

import { v4 as uuid } from "uuid"

function Form({ input, setInput, todos, setTodos,EditTodo,setEditTodo }) {
console.log(EditTodo)

  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  const updateTodo=(title,id)=>{
  const newTodo=todos.map((todo)=>
    todo.id===id ? {title,id}:todo
  )
  setTodos(newTodo);
 setEditTodo("")

  };

  const onSubmitTodo = (e) => {
    e.preventDefault();
   if(!EditTodo){
    setTodos([...todos, { id: uuid(), title: input, complete: false }])
    setInput("")
   }else{
    updateTodo(input,EditTodo.id)
   }
  }

  useEffect(()=>{

    if(EditTodo)
    {
      setInput(EditTodo.title);
    }else{
      setInput("")
    }

  },[setInput,EditTodo])


  return (
    <form onSubmit={onSubmitTodo}>
      <input type="text"
        placeholder='Enter todo'
        className='task-input'
        value={input}
        onChange={onInputChange}
        required />
      <button className='button-add'>
        {EditTodo ? "EDIT" :"ADD"}
      </button>
    </form>
  )
}

export default Form
