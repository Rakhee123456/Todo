import React from 'react';
import './TodoList.css';

function TodoList({ tasks, onToggleCompletion, onDeleteTask }) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`todo-item ${task.completed ? 'completed' : ''}`}
        >
          <span
            className="todo-name"
            onClick={() => onToggleCompletion(task.id)}
          >
            {task.name}
          </span>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
