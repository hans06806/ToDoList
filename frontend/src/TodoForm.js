import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Enter a task'
      />
      <button type='submit'>Add</button>
    </form>
  );
}

export default TodoForm;