import React, { useState } from "react";

const AddTeacher = () => {
  const [teacherData, setTeacherData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    email: "",
    classAssigned: "",
    divisionAssigned: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({ ...teacherData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Teacher Data Submitted: ", teacherData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f3f4fe] to-[#d9e4ff] py-20 font-['DM_Sans']">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg w-[500px]">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Add Teacher</h2>
        
        <div className="mb-6">
          <label className="block font-medium text-gray-800 mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={teacherData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your Name"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:shadow-lg hover:shadow-md transition-all duration-300"
            required
          />
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="block font-medium text-gray-800 mb-2">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={teacherData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:shadow-lg hover:shadow-md transition-all duration-300"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium text-gray-800 mb-2">Gender</label>
            <select
              name="gender"
              value={teacherData.gender}
              onChange={handleInputChange}
              className="w-full px-4 pr-8 py-3 rounded-full border border-gray-300 focus:outline-none focus:shadow-lg hover:shadow-md transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[center_right_1rem] bg-no-repeat"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block font-medium text-gray-800 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={teacherData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter Phone Number"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:shadow-lg hover:shadow-md transition-all duration-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium text-gray-800 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={teacherData.email}
            onChange={handleInputChange}
            placeholder="Enter your Email"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:shadow-lg hover:shadow-md transition-all duration-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium text-gray-800 mb-2">Class Assigned</label>
          <div className="flex gap-2">
            <select
              name="classAssigned"
              value={teacherData.classAssigned}
              onChange={handleInputChange}
              className="flex-1 px-4 pr-8 py-3 rounded-full border border-gray-300 focus:outline-none focus:shadow-lg hover:shadow-md transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[center_right_1rem] bg-no-repeat"
              required
            >
              <option value="">Class</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{`Class ${i + 1}`}</option>
              ))}
            </select>
            <select
              name="divisionAssigned"
              value={teacherData.divisionAssigned}
              onChange={handleInputChange}
              className="flex-1 px-4 pr-8 py-3 rounded-full border border-gray-300 focus:outline-none focus:shadow-lg hover:shadow-md transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[center_right_1rem] bg-no-repeat"
              required
            >
              <option value="">Division</option>
              {["A", "B", "C", "D"].map((division) => (
                <option key={division} value={division}>{division}</option>
              ))}
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 bg-[#4A3AFF] hover:bg-[#5848d9] text-white font-bold rounded-full transition-colors duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;


