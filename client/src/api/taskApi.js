import API from "./axios";

// get all tasks
export const getTasks = () => API.get("/api/tasks");

// create task
export const createTask = (title) =>
  API.post("/api/tasks", { title });

// delete task
export const deleteTask = (id) =>
  API.delete(`/api/tasks/${id}`);

// update task
export const updateTask = (id, title) =>
  API.put(`/api/tasks/${id}`, { title });