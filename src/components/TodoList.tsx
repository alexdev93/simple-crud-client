import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, setTodos, toggleComplete } from "../redux/actions";
import Todo from "../types/Todo";
import axios from "axios";

const TodoList: React.FC<any> = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/tasks");

        if (isMounted) {
          dispatch(setTodos(response.data));
        }
      } catch (error) {
        console.error("Failed to fetch tasks from the server:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const handleToggleComplete = async (taskId: number, taskName: string) => {
    try {
      await axios.put(`http://localhost:8080/api/tasks/${taskName}/complete`);
      dispatch(toggleComplete(taskId));
    } catch (error) {
      console.error(
        `Failed to update task ${taskId} completion status:`,
        error
      );
    }
  };

  const handleDeleteTask = async (taskId: number, taskName: string) => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${taskName}`);
      dispatch(deleteTask(taskId));
    } catch (error) {
      console.error(`Failed to delete task ${taskId}:`, error);
    }
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
                onChange={() => handleToggleComplete(task.id, task.name)}
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
              onClick={() => handleDeleteTask(task.id, task.name)}
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
