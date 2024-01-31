import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaTrash } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [filter, setFilter] = useState('all');

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const clearCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  const filterTasks = (filter) => {   
    setFilter(filter);
  };
  
  

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <h1>To Do List</h1>
        <div className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
      </header>
      <div className="container">
        <div className="task-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}> Add </button>
        </div>
        <ul className="task-list">
          {filteredTasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
              />
              <span className={`task-name ${task.completed ? 'completed' : ''}`}>
                {task.text}
              </span>
              <button onClick={() => deleteTask(index)}>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
        <div className="task-filters">
  <button
    onClick={() => filterTasks('all')}
    className={filter === 'all' ? 'active' : ''}
  >
    All
  </button>
  <button
    onClick={() => filterTasks('active')}
    className={filter === 'active' ? 'active' : ''}
  >
    Active
  </button>
  <button
    onClick={() => filterTasks('completed')}
    className={filter === 'completed' ? 'active' : ''}
  >
    Completed
  </button>
</div>
        <div className="clear-completed">
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
        <div className="task-count">
          {tasks.filter((task) => !task.completed).length} Tasks remaining
        </div>
      </div>
    </div>
  );
};

export default App;
