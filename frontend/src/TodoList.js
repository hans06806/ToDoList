import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
    console.log("Todos in TodoList:", todos); // Debugging log

    if (!todos.length === 0) {
        return <p>No tasks to show</p>;
    }

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdateTodo={onUpdateTodo}
                    onDeleteTodo={onDeleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
