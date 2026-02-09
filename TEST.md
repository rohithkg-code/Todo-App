# Test Setup

I have configured **Vitest** with **React Testing Library** to provide automated verification without needing a browser.

## How to Run Tests
In the terminal, run:
```bash
npm test
```

## Test Coverage
The test suite `src/App.test.jsx` verifies:
1. **Rendering**: Application loads without crashing.
2. **Adding Tasks**: Entering text and clicking "Add" updates the list.
3. **Completing Tasks**: Clicking the checkbox marks the task as completed.
4. **Deleting Tasks**: Clicking "Delete" removes the task from the list.
