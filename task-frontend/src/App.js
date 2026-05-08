import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Stats from "./components/Stats";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    try {

      const response =
      await axios.get("http://localhost:8080/tasks");

      setTasks(response.data);

    } catch(error) {

      console.log(error);

    }
  };

  const addTask = async (task) => {

    await axios.post(
      "http://localhost:8080/tasks",
      task
    );

    fetchTasks();
  };

  const deleteTask = async (id) => {

    await axios.delete(
      `http://localhost:8080/tasks/${id}`
    );

    fetchTasks();
  };

  const completeTask = async (task) => {

    task.completed = true;

    await axios.put(
      "http://localhost:8080/tasks",
      task
    );

    fetchTasks();
  };

  const filteredTasks = tasks.filter((task)=>{

    const matchSearch =
    task.title.toLowerCase()
    .includes(search.toLowerCase());

    const matchFilter =
    filter==="All" ||
    task.priority===filter;

    return matchSearch && matchFilter;
  });

  return (

    <div className="app">

      <Navbar />

      <Stats tasks={tasks} />

      <TaskForm addTask={addTask} />

      <div className="controls">

        <input
          type="text"
          placeholder="Search Task"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
        >

          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>

        </select>

      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />

    </div>
  );
}

export default App;