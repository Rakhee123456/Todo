import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  const motivationalQuotes = [
    "Stay focused, and never give up!",
    "Small steps lead to big achievements!",
    "Productivity is the key to success.",
    "Finish your tasks and enjoy the rest of the day!",
  ];

  const randomQuote =
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="app-header">
        <h1>Welcome to Your Todo App!</h1>
        <p>Organize your day and stay productive!</p>
      </header>

      {/* Left Panel */}
      <aside className="left-panel">
        <h2>Statistics</h2>
        <p>Completed Tasks: {completedCount}</p>
        <p>Pending Tasks: {pendingCount}</p>
      </aside>

      {/* Todo List and Input */}
      <main className="todo-main">
        <TodoInput onAddTask={addTask} />
        <TodoList
          tasks={tasks}
          onToggleCompletion={toggleCompletion}
          onDeleteTask={deleteTask}
        />
      </main>

      {/* Right Panel */}
      <aside className="right-panel">
        <h2>Motivational Quote</h2>
        <p>"{randomQuote}"</p>
      </aside>

      {/* Bottom Footer */}
      <footer className="app-footer">
        <button>All</button>
        <button>Done</button>
        <button>Pending</button>
      </footer>
    </div>
  );
}

export default App;
