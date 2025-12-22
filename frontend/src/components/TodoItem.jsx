import { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleComplete, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description || '');

  const handleToggle = () => {
    onToggleComplete(todo.id, {
      ...todo,
      completed: !todo.completed,
    });
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedTitle(todo.title);
    setEditedDescription(todo.description || '');
  };

  const handleSave = () => {
    if (editedTitle.trim()) {
      onUpdate(todo.id, {
        ...todo,
        title: editedTitle.trim(),
        description: editedDescription.trim(),
      });
      setIsEditing(false);
    } else {
      setEditedTitle(todo.title);
      setEditedDescription(todo.description || '');
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditedTitle(todo.title);
    setEditedDescription(todo.description || '');
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
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
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                onKeyDown={handleTitleKeyDown}
                className="todo-title-edit"
                placeholder="To do title"
                autoFocus
              />
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                onKeyDown={handleKeyDown}
                className="todo-description-edit"
                placeholder="Description (optional)"
                rows="3"
              />
              <div className="edit-actions">
                <button
                  type="button"
                  onClick={handleSave}
                  className="save-button"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="cancel-button"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="todo-title">
                {todo.title}
              </h3>
              {todo.description && (
                <p className="todo-description">{todo.description}</p>
              )}
              <span className="todo-date">
                {new Date(todo.createdAt).toLocaleDateString()}
              </span>
            </>
          )}
        </div>
      </div>
      <div className="todo-actions">
        {!isEditing && (
          <button 
            onClick={handleEdit} 
            className="edit-button" 
            aria-label="Edit to do"
            title="Edit to do"
          >
            ✎
          </button>
        )}
        <button onClick={handleDelete} className="delete-button" aria-label="Delete to do">
          ×
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
