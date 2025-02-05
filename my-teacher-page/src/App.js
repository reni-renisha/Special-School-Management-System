import React from "react";
import StudentPage from "./StudentPage";
import "./index.css"; // Changed from "./App.css" since we're using Tailwind now

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <StudentPage />
    </div>
  );
};

export default App;

