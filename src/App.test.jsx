import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from './App';

describe('Todo App', () => {
    beforeEach(() => {
        // Clear localStorage before each test
        localStorage.clear();
    });

    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText('My Tasks')).toBeInTheDocument();
    });

    it('can add a new todo', () => {
        render(<App />);
        const input = screen.getByPlaceholderText('Add a new task...');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'Test Task' } });
        fireEvent.click(addButton);

        expect(screen.getByText('Test Task')).toBeInTheDocument();
    });

    it('can mark a todo as completed', () => {
        render(<App />);
        const input = screen.getByPlaceholderText('Add a new task...');
        const addButton = screen.getByText('Add');

        // Add task
        fireEvent.change(input, { target: { value: 'Task to Complete' } });
        fireEvent.click(addButton);

        // Find checkbox and click it
        const checkbox = screen.getAllByRole('checkbox')[0]; // Assuming it's the first one
        fireEvent.click(checkbox);

        // Check if it has completed class or style
        const taskText = screen.getByText('Task to Complete');
        expect(taskText).toHaveClass('completed');
    });

    it('can delete a todo', () => {
        render(<App />);
        const input = screen.getByPlaceholderText('Add a new task...');
        const addButton = screen.getByText('Add');

        // Add task
        fireEvent.change(input, { target: { value: 'Task to Delete' } });
        fireEvent.click(addButton);

        expect(screen.getByText('Task to Delete')).toBeInTheDocument();

        // Find delete button
        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);

        expect(screen.queryByText('Task to Delete')).not.toBeInTheDocument();
    });
});
