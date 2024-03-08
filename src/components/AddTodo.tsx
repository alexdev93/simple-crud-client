import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const AddTodo: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleAddTodo = () => {
    if (description.trim() !== "" && category.trim() !== "") {
      dispatch(addTodo(name, description, category));
      setName("");
      setDescription("");
      setCategory("");
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