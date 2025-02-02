// src/App.js
import React from "react";
import Add from "./add"; // Importing your Add component

const App = () => {
  return (
    <div>
      <Add /> {/* Only render the Add component */}
    </div>
  );
};

export default App;
