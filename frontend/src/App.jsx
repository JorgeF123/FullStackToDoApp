import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { todoService } from './services/todoService';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    // Load from localStorage or default to false
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Fetch all todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await todoService.getAllTodos();
      setTodos(data);
    } catch (err) {
      setError('Failed to load to dos. Make sure the backend is running.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (newTodo) => {
    try {
      const createdTodo = await todoService.createTodo(newTodo);
      setTodos([...todos, createdTodo]);
    } catch (err) {
      setError('Failed to create todo');
      console.error('Error creating todo:', err);
    }
  };

  const handleToggleComplete = async (id, updatedTodo) => {
    try {
      const todo = await todoService.updateTodo(id, updatedTodo);
      setTodos(todos.map((t) => (t.id === id ? todo : t)));
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await todoService.deleteTodo(id);
      setTodos(todos.filter((t) => t.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  const handleUpdate = async (id, updatedTodo) => {
    try {
      const todo = await todoService.updateTodo(id, updatedTodo);
      setTodos(todos.map((t) => (t.id === id ? todo : t)));
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <header className="app-header">
          <div className="header-content">
            <div>
              <h1>My To Do List</h1>
              <p className="subtitle">Stay organized and get things done</p>
            </div>
            <button 
              onClick={toggleDarkMode} 
              className="theme-toggle"
              aria-label="Toggle dark mode"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </header>

        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError(null)} className="dismiss-button">
              ×
            </button>
          </div>
        )}

        <TodoForm onAddTodo={handleAddTodo} />

        {loading ? (
          <div className="loading">Loading to dos...</div>
        ) : (
          <TodoList
            todos={todos}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        )}

        {!loading && todos.length > 0 && (
          <div className="todo-stats">
            <span>
              {todos.filter((t) => t.completed).length} of {todos.length} completed
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
