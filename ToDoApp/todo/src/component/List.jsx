import React, { useState, useEffect } from "react";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [complete, setcomplete] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8086/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  const addTask = () => {
    fetch("http://localhost:8086/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTask,
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([...tasks, data]);
        setNewTask("");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  const haldledelete = (id) => {
    fetch(`http://localhost:8086/tasks/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>To-Do App</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => alert("Toggle complete")}
            />

            <span>{task.title}</span>
            <button onClick={() => haldledelete(task.id)}>Delete </button>
            <button
              onClick={() => setcomplete(!complete)}
              style={{ color: complete ? "inherit" : "red" }}
            >
              {complete ? "Completed" : "Incomplete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
