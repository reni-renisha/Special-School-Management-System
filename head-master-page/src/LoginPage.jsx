import React, { useState } from "react";

const LoginPage = () => {
  const [filterOption, setFilterOption] = useState("all");
  const [selectedClass, setSelectedClass] = useState("all");
  const [rollNumber, setRollNumber] = useState("");

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f7f7f7] relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 -left-40 w-[600px] h-[500px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float" />
      <div className="absolute -bottom-32 right-40 w-[600px] h-[600px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float animation-delay-3000" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float animation-delay-5000" />
      <div className="absolute top-0 -left-40 w-[500px] h-[600px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float animation-delay-7000" />
      
      <div className="w-full max-w-[1199px] mx-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          {/* Filter Options on left - moved right by 5px */}
          <div className="flex items-center gap-2 ml-5">
            {/* Filter Options */}
            <div className="flex items-center gap-2">
              <label 
                htmlFor="filterType" 
                className="text-sm font-medium text-[#170F49]"
              >
                Filter by
              </label>
              <select
                id="filterType"
                value={filterOption}
                onChange={(e) => setFilterOption(e.target.value)}
                className="px-4 py-2 rounded-full border bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all duration-300 text-gray-600 hover:text-gray-900"
              >
                <option value="all">All Students</option>
                <option value="class">Class</option>
                <option value="rollNumber">Roll Number</option>
              </select>
            </div>

            {filterOption === 'class' && (
              <div className="flex items-center gap-2">
                <label 
                  htmlFor="classFilter" 
                  className="text-sm font-medium text-[#170F49]"
                >
                  Class
                </label>
                <select
                  id="classFilter"
                  className="px-4 py-2 rounded-full border bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all duration-300 text-gray-600 hover:text-gray-900"
                >
                  <option value="all">All Classes</option>
                  <option value="X-A">X-A</option>
                  <option value="X-B">X-B</option>
                  <option value="X-C">X-C</option>
                </select>
              </div>
            )}

            {filterOption === 'rollNumber' && (
              <div className="flex items-center gap-2">
                <label 
                  htmlFor="rollNumberFilter" 
                  className="text-sm font-medium text-[#170F49]"
                >
                  Roll No.
                </label>
                <input
                  id="rollNumberFilter"
                  type="number"
                  placeholder="Enter roll number"
                  className="px-4 py-2 w-32 rounded-full border bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all duration-300 text-gray-600 hover:text-gray-900 placeholder:text-gray-400 hover:placeholder:text-gray-600"
                />
              </div>
            )}
          </div>

          {/* Search Bar centered */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search students..."
              className="pl-10 pr-4 py-2 rounded-full border bg-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all w-[443px] duration-300 placeholder:text-gray-400 hover:placeholder:text-gray-600"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Add Student Button on right - moved left by 5px */}
          <button
            className="px-6 py-2 bg-[#6366f1] text-white rounded-full hover:bg-[#4f46e5] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 flex items-center gap-2 -ml-5"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Student
          </button>
        </div>
        
        {/* Filter container */}
        <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-white/20">
          {/* Student List with wider scrollbar */}
          <div className="max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#6366f1] scrollbar-track-transparent">
            <div className="grid grid-cols-1 gap-4 px-4">
              {/* Add Malavika's card at the top */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex items-center space-x-4 text-[#170F49]">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img 
                      src="https://i.pravatar.cc/150?img=1" 
                      alt="Student"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/64?text=Student";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#170F49]">Malavika</h3>
                    <div className="space-y-1 mt-2">
                      <p className="text-sm text-[#6F6C8F]">
                        <span className="font-medium">Class:</span> X-A
                      </p>
                      <p className="text-sm text-[#6F6C8F]">
                        <span className="font-medium">Roll No:</span> 33
                      </p>
                    </div>
                  </div>
                  <button className="text-[#6366f1] hover:text-[#4f46e5] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add Renisha's card */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex items-center space-x-4 text-[#170F49]">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img 
                      src="https://i.pravatar.cc/150?img=2" 
                      alt="Student"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/64?text=Student";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#170F49]">Renisha</h3>
                    <div className="space-y-1 mt-2">
                      <p className="text-sm text-[#6F6C8F]">
                        <span className="font-medium">Class:</span> X-B
                      </p>
                      <p className="text-sm text-[#6F6C8F]">
                        <span className="font-medium">Roll No:</span> 44
                      </p>
                    </div>
                  </div>
                  <button className="text-[#6366f1] hover:text-[#4f46e5] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add Lydia's card */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex items-center space-x-4 text-[#170F49]">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img 
                      src="https://i.pravatar.cc/150?img=3" 
                      alt="Student"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/64?text=Student";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#170F49]">Lydia</h3>
                    <div className="space-y-1 mt-2">
                      <p className="text-sm text-[#6F6C8F]">
                        <span className="font-medium">Class:</span> X-C
                      </p>
                      <p className="text-sm text-[#6F6C8F]">
                        <span className="font-medium">Roll No:</span> 32
                      </p>
                    </div>
                  </div>
                  <button className="text-[#6366f1] hover:text-[#4f46e5] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add Sreedhanya's card */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex items-center space-x-4 text-[#170F49]">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img 
                      src="https://i.pravatar.cc/150?img=4" 
                      alt="Student"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/64?text=Student";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#170F49]">Sreedhanya</h3>
                    <div className="space-y-1 mt-2">
                      <p className="text-sm text-[#6F6C8F]">
                        <span className="font-medium">Class:</span> X-A
                      </p>
                      <p className="text-sm text-[#6F6C8F]">
                        <span className="font-medium">Roll No:</span> 51
                      </p>
                    </div>
                  </div>
                  <button className="text-[#6366f1] hover:text-[#4f46e5] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
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
        .rainbow-blob {
          background: conic-gradient(
            from 0deg,
            #ff0000,
            #ff8000,
            #ffff00,
            #00ff00,
            #00ffff,
            #0000ff,
            #8000ff,
            #ff0080,
            #ff0000
          );
          animation: float 15s infinite ease-in-out, spin 15s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Wider Scrollbar Styles */
        .scrollbar-thin::-webkit-scrollbar {
          width: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #6366f1;
          border-radius: 5px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #4f46e5;
        }

        /* Firefox */
        .scrollbar-thin {
          scrollbar-width: auto;
          scrollbar-color: #6366f1 transparent;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;