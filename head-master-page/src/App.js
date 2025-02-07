import React from "react";
import HeadMaster from "./HeadMaster";
import "./index.css"; // Changed from "./App.css" since we're using Tailwind now

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeadMaster />
    </div>
  );
};

export default App;

