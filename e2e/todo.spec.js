import { test, expect } from '@playwright/test';

test.describe('Todo App', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Clear localStorage before each test via evaluate
        await page.evaluate(() => localStorage.clear());
        await page.reload();
    });

    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle(/Todo App/);
        await expect(page.getByRole('heading', { name: 'My Tasks' })).toBeVisible();
    });

    test('should allow me to add todo items', async ({ page }) => {
        const newTodo = page.getByPlaceholder('Add a new task...');
        await newTodo.fill('Buy milk');
        await newTodo.press('Enter');

        await expect(page.getByText('Buy milk')).toBeVisible();
    });

    test('should mark items as complete', async ({ page }) => {
        // Add item
        const newTodo = page.getByPlaceholder('Add a new task...');
        await newTodo.fill('Read a book');
        await page.getByRole('button', { name: 'Add' }).click();

        // Check item
        const checkbox = page.getByRole('checkbox');
        await checkbox.check();

        // Verify style
        const todoText = page.getByText('Read a book');
        await expect(todoText).toHaveClass(/completed/);
    });

    test('should delete items', async ({ page }) => {
        // Add item
        const newTodo = page.getByPlaceholder('Add a new task...');
        await newTodo.fill('Delete me');
        await newTodo.press('Enter');

        // Delete item
        await page.getByRole('button', { name: 'Delete task' }).click();

        await expect(page.getByText('Delete me')).not.toBeVisible();
    });

    test('should persist items on reload', async ({ page }) => {
        // Add item
        const newTodo = page.getByPlaceholder('Add a new task...');
        await newTodo.fill('Persist me');
        await newTodo.press('Enter');

        await page.reload();
        await expect(page.getByText('Persist me')).toBeVisible();
    });
});
