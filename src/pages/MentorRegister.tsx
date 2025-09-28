import React from "react";
import { useNavigate } from "react-router-dom";
const MentorRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here if needed
    navigate("/mentor");
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-card rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Mentor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className="w-full mb-2 p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">Register</button>
      </form>
      <div className="mt-4 text-center">
        <a href="/mentor/login" className="text-primary underline">Already have an account? Login</a>
      </div>
    </div>
  );
};
export default MentorRegister;
