import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleComplete } from "../redux/actions";
import Todo from "../types/Todo";

const TodoList: React.FC<any> = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state:any) => state.todos);

  const handleToggleComplete = (taskId: number) => {
    dispatch(toggleComplete(taskId));
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <h3>Task List</h3>
      <div className="lists">
        {todos.map((task: Todo) => (
          <div className="task-list" key={task.id}>
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
              />
            </div>
            <div className="task-info">
              <h4 className={task.completed ? "completed" : ""}>
                {task.name} : {task.category}
              </h4>
              <p className={task.completed ? "completed" : ""}>
                {task.description}
              </p>
            </div>
            <button
              className="del-btn"
              onClick={() => handleDeleteTask(task.id)}
            >
              <div>&times;</div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
