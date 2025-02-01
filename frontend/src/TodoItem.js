import React from 'react';

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }) => {
    const handleComplete = () => {
        onUpdateTodo(todo.id, { completed: !todo.completed });
    };

    return (
        <li>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.task}
            </span>
            <button onClick={handleComplete}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;