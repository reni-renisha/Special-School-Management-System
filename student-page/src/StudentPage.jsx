import React from "react";

const StudentPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f7f7f7] relative overflow-hidden py-20">
      {/* Back button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-8 left-8 bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl p-3 border border-white/20 hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 z-10"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      {/* Animated background blobs */}
      <div className="absolute top-0 -left-40 w-[600px] h-[500px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float z-0" />
      <div className="absolute -bottom-32 right-40 w-[600px] h-[600px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float animation-delay-3000 z-0" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float animation-delay-5000 z-0" />
      <div className="absolute top-0 -left-40 w-[500px] h-[600px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float animation-delay-7000 z-0" />
      
      <div className="w-[90%] max-w-[1200px] mx-4 flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-[#170F49] mb-8 text-center font-baskervville">
          Student Details
        </h1>
        
        {/* Container with adjusted padding */}
        <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Basic Information Section */}
            <div className="col-span-full">
              <h2 className="text-xl font-semibold text-[#170F49] mb-4">Basic Information</h2>
              <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-white/50 rounded-2xl">
                {/* Student Photo */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-white/50 shadow-xl">
                    <img 
                      src="https://img.freepik.com/free-photo/portrait-cute-little-boy-white-t-shirt_23-2148445671.jpg" // Placeholder student image
                      alt="Student Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="text-sm text-[#6366f1] hover:text-[#4f46e5] transition-colors duration-200 flex items-center gap-1">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    Update Photo
                  </button>
                </div>

                {/* Student Details */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pl-8 md:pl-12">
                  <div>
                    <p className="text-sm text-[#6F6C90]">Full Name</p>
                    <p className="text-[#170F49] font-medium">John Doe</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6F6C90]">Student ID</p>
                    <p className="text-[#170F49] font-medium">#STU2024001</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6F6C90]">Date of Birth</p>
                    <p className="text-[#170F49] font-medium">15 March 2010</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6F6C90]">Gender</p>
                    <p className="text-[#170F49] font-medium">Male</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="col-span-full">
              <h2 className="text-xl font-semibold text-[#170F49] mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/50 rounded-2xl">
                <div>
                  <p className="text-sm text-[#6F6C90]">Phone Number</p>
                  <p className="text-[#170F49] font-medium">+1 234 567 8900</p>
                </div>
                <div>
                  <p className="text-sm text-[#6F6C90]">Email</p>
                  <p className="text-[#170F49] font-medium">john.doe@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-[#6F6C90]">Address</p>
                  <p className="text-[#170F49] font-medium">123 School Street, City</p>
                </div>
              </div>
            </div>

            {/* Academic Information Section */}
            <div className="col-span-full">
              <h2 className="text-xl font-semibold text-[#170F49] mb-4">Academic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/50 rounded-2xl">
                <div>
                  <p className="text-sm text-[#6F6C90]">Class</p>
                  <p className="text-[#170F49] font-medium">Class 8</p>
                </div>
                <div>
                  <p className="text-sm text-[#6F6C90]">Division</p>
                  <p className="text-[#170F49] font-medium">Division A</p>
                </div>
                <div>
                  <p className="text-sm text-[#6F6C90]">Roll Number</p>
                  <p className="text-[#170F49] font-medium">24</p>
                </div>
                <div>
                  <p className="text-sm text-[#6F6C90]">Academic Year</p>
                  <p className="text-[#170F49] font-medium">2023-2024</p>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="col-span-full">
              <h2 className="text-xl font-semibold text-[#170F49] mb-4">Certificates</h2>
              <div className="p-6 bg-white/50 rounded-2xl">
                {/* Upload Section */}
                <div className="mb-6">
                  <label 
                    htmlFor="certificate-upload" 
                    className="block w-full p-4 border-2 border-dashed border-[#6366f1] rounded-xl text-center cursor-pointer hover:bg-white/50 transition-all duration-200"
                  >
                    <svg 
                      className="mx-auto mb-2" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    <span className="text-[#6366f1] font-medium">Click to upload certificate</span>
                    <span className="block text-sm text-[#6F6C90] mt-1">Supported formats: PDF, JPG, PNG</span>
                  </label>
                  <input 
                    type="file" 
                    id="certificate-upload" 
                    className="hidden" 
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </div>

                {/* Certificates List */}
                <div className="space-y-4">
                  {/* Example certificates - replace with actual data */}
                  <div className="flex items-center justify-between p-4 bg-white/70 rounded-xl">
                    <div className="flex items-center gap-3">
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#6366f1" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <line x1="10" y1="9" x2="8" y2="9"/>
                      </svg>
                      <div>
                        <p className="font-medium text-[#170F49]">Academic Excellence Certificate</p>
                        <p className="text-sm text-[#6F6C90]">Uploaded on 15 Jan 2024</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-white/80 rounded-lg transition-all duration-200">
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-white/80 rounded-lg transition-all duration-200">
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/70 rounded-xl">
                    <div className="flex items-center gap-3">
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#6366f1" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <line x1="10" y1="9" x2="8" y2="9"/>
                      </svg>
                      <div>
                        <p className="font-medium text-[#170F49]">Medical Certificate</p>
                        <p className="text-sm text-[#6F6C90]">Uploaded on 10 Jan 2024</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-white/80 rounded-lg transition-all duration-200">
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-white/80 rounded-lg transition-all duration-200">
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Therapies Section */}
            <div className="col-span-full">
              <h2 className="text-xl font-semibold text-[#170F49] mb-4">Therapies</h2>
              
              {/* Current Therapies */}
              <div className="mb-6 p-6 bg-white/50 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-[#170F49]">Current Therapies</h3>
                  <button className="bg-white/30 backdrop-blur-xl rounded-xl shadow-sm p-2 px-4 border border-white/20 hover:-translate-y-1 transition-all duration-200 flex items-center gap-2">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9"/>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                    <span className="text-sm font-medium">Edit Progress</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Speech Therapy Card */}
                  <div className="p-4 bg-white/70 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="relative w-20 h-20">
                        {/* Circular Progress */}
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle
                            className="text-gray-200"
                            strokeWidth="5"
                            stroke="currentColor"
                            fill="transparent"
                            r="35"
                            cx="40"
                            cy="40"
                          />
                          <circle
                            className="text-[#6366f1]"
                            strokeWidth="5"
                            strokeDasharray={220}
                            strokeDashoffset={66} // 220 - (220 * percentageComplete)
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="35"
                            cx="40"
                            cy="40"
                          />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="text-sm font-medium text-[#170F49]">70%</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-[#170F49] font-medium mb-1">Speech Therapy</h4>
                        <p className="text-sm text-[#6F6C90] mb-2">Sessions: 15/20</p>
                        <div className="flex items-center gap-2 text-sm text-[#6F6C90]">
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                          Next Session: Tomorrow, 10:00 AM
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Occupational Therapy Card */}
                  <div className="p-4 bg-white/70 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="relative w-20 h-20">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle
                            className="text-gray-200"
                            strokeWidth="5"
                            stroke="currentColor"
                            fill="transparent"
                            r="35"
                            cx="40"
                            cy="40"
                          />
                          <circle
                            className="text-[#6366f1]"
                            strokeWidth="5"
                            strokeDasharray={220}
                            strokeDashoffset={132} // 220 - (220 * percentageComplete)
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="35"
                            cx="40"
                            cy="40"
                          />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="text-sm font-medium text-[#170F49]">40%</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-[#170F49] font-medium mb-1">Occupational Therapy</h4>
                        <p className="text-sm text-[#6F6C90] mb-2">Sessions: 8/20</p>
                        <div className="flex items-center gap-2 text-sm text-[#6F6C90]">
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                          Next Session: Friday, 2:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Completed Therapies */}
              <div className="p-6 bg-white/50 rounded-2xl">
                <h3 className="text-lg font-medium text-[#170F49] mb-4">Completed Therapies</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/70 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-[#170F49] font-medium mb-1">Physical Therapy</h4>
                        <p className="text-sm text-[#6F6C90]">Completed on: 15 Dec 2023</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Completed</span>
                        <button className="p-2 hover:bg-white/80 rounded-lg transition-all duration-200">
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <line x1="10" y1="9" x2="8" y2="9"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Action Buttons with adjusted margin */}
          <div className="flex gap-4 mt-6 md:mt-8">
            <button className="flex-1 bg-[#6366f1] text-white py-4 rounded-2xl hover:bg-[#4f46e5] hover:-translate-y-1 transition-all duration-200 font-medium shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_4px_8px_rgba(255,255,255,0.2)]">
              Edit Details
            </button>
            <button className="flex-1  bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl p-3 border border-white/20 hover:-translate-y-1 transition-all font-medium duration-200">
              Download Profile
            </button>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(100px, -100px) scale(1.2);
          }
          50% {
            transform: translate(0, 100px) scale(0.9);
          }
          75% {
            transform: translate(-100px, -50px) scale(1.1);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
        .animation-delay-3000 {
          animation-delay: -5s;
        }
        .animation-delay-5000 {
          animation-delay: -10s;
        }
        .animation-delay-7000 {
          animation-delay: -15s;
        }
      `}</style>
    </div>
  );
};

export default StudentPage;