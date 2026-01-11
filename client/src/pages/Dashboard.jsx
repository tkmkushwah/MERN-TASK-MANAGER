import { useEffect, useState } from "react";
import { getTasks, updateTask, createTask, deleteTask } from "../api/taskApi";
import "../styles/dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  // Load tasks from backend
  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      alert("Failed to load tasks");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Add task
  const handleAddTask = async () => {
    if (!title) return;
    try {
      await createTask(title);
      setTitle("");
      loadTasks();
    } catch (err) {
      alert("Failed to add task");
    }
  };

  // Delete task
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch (err) {
      alert("Failed to delete task");
    }
  };

  // Start editing
  const handleEditClick = (task) => {
    setEditingId(task._id);
    setEditingTitle(task.title);
  };

  // Save update
  const handleUpdateTask = async () => {
    try {
      await updateTask(editingId, editingTitle);
      setEditingId(null);
      setEditingTitle("");
      loadTasks();
    } catch (err) {
      alert("Failed to update task");
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      {/* Add task */}
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      {/* Task list */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id}>
            {editingId === task._id ? (
              <>
                <input
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  className="edit-input"
                />
                <button onClick={handleUpdateTask} className="save-btn">
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="task-title">{task.title}</span>
                <div className="task-actions">
                  <button onClick={() => handleEditClick(task)} className="edit-btn">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="delete-btn"
                  >
                    ❌
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;