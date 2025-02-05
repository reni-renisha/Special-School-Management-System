import React from "react";
import AddTeacher from './AddTeacher';
import "./index.css"; // Changed from "./App.css" since we're using Tailwind now

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <AddTeacher />
    </div>
  );
};

export default App;

