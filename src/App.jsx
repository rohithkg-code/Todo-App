import { useState, useEffect } from 'react'
import './index.css'

function App() {
    const [todos, setTodos] = useState(() => {
        try {
            const saved = localStorage.getItem('todos');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    });
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setTodos([...todos, {
            id: Date.now(),
            text: inputValue,
            completed: false
        }]);
        setInputValue('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="app-container">
            <h1 className="title">My Tasks</h1>

            <form onSubmit={addTodo} className="todo-form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new task..."
                    aria-label="New task"
                />
                <button type="submit" className="add-btn">Add</button>
            </form>

            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className="todo-item">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="checkbox"
                        />
                        <span
                            className={`todo-text ${todo.completed ? 'completed' : ''}`}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="delete-btn"
                            aria-label="Delete task"
                        >
                            Delete
                        </button>
                    </li>
                ))}
                {todos.length === 0 && (
                    <p className="empty-state">No tasks yet. Add one above!</p>
                )}
            </ul>
        </div>
    )
}

export default App
