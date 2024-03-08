const initialState = {
    todos: [],
    id: 1,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { ...action.payload, id: state.id }],
          id: state.id + 1,
        };
  
      case 'TOGGLE_COMPLETE':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          ),
        };
  
      case 'DELETE_TASK':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  