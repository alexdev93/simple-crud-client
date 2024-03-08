// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <div className="todo-app">
          <div>
            <h2>Todo List</h2>
            <AddTodo />
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
