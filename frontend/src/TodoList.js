import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
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
