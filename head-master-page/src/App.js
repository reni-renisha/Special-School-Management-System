import React from "react";
import LoginPage from "./LoginPage"; // Changed from { LoginPage }
import "./index.css"; // Changed from "./App.css" since we're using Tailwind now

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <LoginPage />
    </div>
  );
};

export default App;

