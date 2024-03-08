# Todo List App

This is a simple Todo List application built with React and TypeScript. It allows users to manage tasks, mark them as completed, and categorize them.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Technologies Used](#technologies-used)
- [Issues](#issues)
- [Challenges](#challenges)

## Features

- Add new tasks with a category (e.g., Work, Personal).
- Mark tasks as completed with a checkbox.
- Delete tasks from the list.
- LocalStorage persistence for tasks.
- Responsive design for various screen sizes.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   ```

   ```bash
   cd todo-list-app
   ```

```bash
 yarn install
````

```bash
 yarn start
```

The app will be accessible at http://localhost:3000.

## Usage

- Add tasks using the "Add Task" form.
- Mark tasks as completed by checking the checkbox.
- Delete tasks by clicking the "Delete" button.
- Tasks are saved to LocalStorage and persist across page refreshes.

## Future Improvements

- Enhance the layout for smaller devices.
- Implement device-specific optimizations for a better user experience on known devices.
- Consider improving the design aesthetics to achieve a more luxurious feel. Note: Due to tight deadlines, the current design may not fully reflect intended aesthetics.
- If encountering any issues with app usage, try reloading the page or restarting the app for a smoother experience.

## Technologies Used

- React
- TypeScript
- CSS (styles)
- LocalStorage (persistence)

## Issues

- If you encounter any issues during usage, try reloading the page or restarting the app.

# Improved Approach: Persistent and Unique Task IDs

## Challenges

In my initial implementation, I encountered challenges with managing unique task IDs, especially when tasks were deleted, and add task, leading to inconsistencies. To address this, I introduced a more robust solution by utilizing local storage to persist and manage task IDs.

## Implementation Details

I utilized the following approach in my code:

```javascript
const initialId = parseInt(JSON.parse(localStorage.getItem("id") ?? "1"));
const initialTodos = JSON.parse(localStorage.getItem("todos") ?? "[]");
const [todos, setTodos] = useState(initialTodos);
let [id, setId] = useState(initialId);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("id", JSON.stringify(id));
}, [todos, id]);

const handleAddTodo = (name: string, description: string, category: string) => {
  const newTodo = {
    id: id,
    name,
    description,
    completed: false,
    category,
  };
  setId((id) => id + 1);
  setTodos((prevTodos) => [...prevTodos, newTodo]);
};
```

# Key Points:

- Initialization: I initialize the task ID (id) and the list of todos (todos) by retrieving their values from local -storage. If these values are not present, default values are used (1 for ID and an empty array for todos).

- State Management: The id state is used to track the last used ID for task creation. The todos state maintains the list of tasks.

- Use of useEffect: I use the useEffect hook to update local storage whenever there is a change in the todos or id state. This ensures that the latest data is persisted.

- Generating Unique IDs: The handleAddTodo function generates a new unique ID for each task, ensuring that the IDs are sequential and unique. The new ID is then used for the newly created task.

# Benefits

- Consistency: This approach ensures consistent and unique IDs, even when tasks are added or deleted.

- Persistence: Task data and the last used ID are persistently stored in local storage, allowing the application to recover its state after a page refresh or reopening.

- Improved Robustness: The use of local storage provides a reliable and simple mechanism for managing IDs, enhancing the overall robustness of the application.
