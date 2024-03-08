import React, { useState } from "react";
import { addTodo, setTodos } from "../redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";

const AddTodo: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleAddTodo = async () => {
    if (description.trim() !== "" && category.trim() !== "") {
      dispatch(addTodo(name, description, category));
      try {
        const response = await axios.post("http://localhost:8080/api/tasks", {
          name,
          description,
          category,
          completed
        });

        console.log("Task added successfully to the server!", response.data);
      } catch (error) {
        console.error("Failed to add task to the server:", error);
      }

      setName("");
      setDescription("");
      setCategory("");
      setCompleted(false)
    }
  };

  const categoryOptions = ["Work", "Personal"];

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Task name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled>
          Choose category
        </option>
        {categoryOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="New Task ..."
        id="task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        id="addTask"
        onClick={handleAddTodo}
        disabled={!name.trim() || !description.trim() || !category.trim()}
      >
        &#43;
      </button>
    </div>
  );
};



export default AddTodo;