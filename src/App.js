import React, { useEffect, useState } from 'react';
import Form from './TodoComponents/Form';
import Header from './TodoComponents/Header';
import TodoItems from './TodoComponents/TodoItems';

import "./App.css"

function App() {

    const LocalStorageTodo=JSON.parse(localStorage.getItem("todos"))||[]

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(LocalStorageTodo);
    const [EditTodo, setEditTodo] = useState(null)

    useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    return (
        <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <Header />
                </div>
                <div>
                    <Form input={input}
                        setInput={setInput}
                        setTodos={setTodos}
                        todos={todos}
                        EditTodo={EditTodo}
                        setEditTodo={setEditTodo} />
                </div>
                <TodoItems
                    todos={todos}
                    setTodos={setTodos}
                    setEditTodo={setEditTodo} />
            </div>

        </div>
    )
}

export default App
