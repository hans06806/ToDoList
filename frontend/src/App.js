import React, { useState, useEffect } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const data = await fetchTodos();
                console.log("Fetched Todos from API:", data); // Debugging log
                setTodos(data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        getTodos();
    }, []);

    const handleAddTodo = async (task) => {
        try {
            const newTodo = await createTodo(task);
            console.log("New Todo Created:", newTodo); // Debugging log
            setTodos((prevTodos) => [...prevTodos, newTodo]); // Update state
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <TodoForm onAddTodo={handleAddTodo} />
            <TodoList todos={todos} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo} />
        </div>
    );
}

export default App;
