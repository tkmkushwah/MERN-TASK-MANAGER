import API from "./axios";

// register user
export const registerUser = (formData) => {
  return API.post("/api/auth/register", formData);
};

// login user
export const loginUser = (formData) => {
  return API.post("/api/auth/login", formData);
};