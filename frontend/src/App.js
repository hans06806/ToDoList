import React, { useState, useEffect } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            const data = await fetchTodos();
            setTodos(data);
        };
        getTodos();
    }, []);

    return (
        <div>
            <h1>To-Do List</h1>
            <TodoForm onAddTodo={createTodo} />
            <TodoList todos={todos} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo} />
        </div>
    );
}

export default App;
