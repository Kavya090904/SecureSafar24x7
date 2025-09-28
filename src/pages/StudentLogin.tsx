import React from "react";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here if needed
    navigate("/student");
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-card rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Student Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">Login</button>
      </form>
      <div className="mt-4 text-center">
        <a href="/student/register" className="text-primary underline">Register as Student</a>
      </div>
    </div>
  );
};

export default StudentLogin;
