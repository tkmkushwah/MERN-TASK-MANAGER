import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    API.get("/tasks").then(res => setTasks(res.data));
  }, []);

  const addTask = async () => {
    await API.post("/tasks", { title });
    window.location.reload();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <input placeholder="New Task" onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>Add</button>

      {tasks.map(task => (
        <p key={task._id}>{task.title}</p>
      ))}
    </div>
  );
}

export default Dashboard;