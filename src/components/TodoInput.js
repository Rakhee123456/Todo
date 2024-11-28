import React, { useState } from 'react';
import './TodoInput.css';

function TodoInput({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    onAddTask(taskName);
    setTaskName('');
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Enter a task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TodoInput;
