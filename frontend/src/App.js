import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HeadMaster from './pages/HeadMaster.jsx';
import AddTeacher from './pages/AddTeacher.jsx';
import StudentPage from './pages/StudentPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/headmaster" element={<HeadMaster />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="/student/:id" element={<StudentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
