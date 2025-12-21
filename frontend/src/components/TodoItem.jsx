import './TodoItem.css';

function TodoItem({ todo, onToggleComplete, onDelete }) {
  const handleToggle = () => {
    onToggleComplete(todo.id, {
      ...todo,
      completed: !todo.completed,
    });
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="todo-checkbox"
        />
        <div className="todo-text">
          <h3 className="todo-title">{todo.title}</h3>
          {todo.description && (
            <p className="todo-description">{todo.description}</p>
          )}
          <span className="todo-date">
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      <button onClick={handleDelete} className="delete-button" aria-label="Delete todo">
        ×
      </button>
    </div>
  );
}

export default TodoItem;

