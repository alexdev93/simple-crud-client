export const addTodo = (name, description, category) => ({
    type: 'ADD_TODO',
    payload: { name, description, category },
  });
  
  export const toggleComplete = (taskId) => ({
    type: 'TOGGLE_COMPLETE',
    payload: taskId,
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId,
  });
  