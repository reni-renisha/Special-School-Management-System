import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import HeadMaster from './pages/HeadMaster.jsx';
import AddTeacher from './pages/AddTeacher.jsx';
import AddStudent from './pages/AddStudent.jsx';
import StudentPage from './pages/StudentPage.jsx';
import TeacherPage from './pages/TeacherPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/headmaster" element={<HeadMaster />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/student/:id" element={<StudentPage />} />
          <Route path="/teacher/:id" element={<TeacherPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
