import React, { useState, useEffect } from "react";

const HeadMaster = () => {
  const [filterOption, setFilterOption] = useState("all");
  const [selectedClass, setSelectedClass] = useState("all");
  const [isSearchFloating, setIsSearchFloating] = useState(false);
  const [activeTab, setActiveTab] = useState("students");

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const searchBarPosition = document.getElementById('search-container')?.getBoundingClientRect().top;
      if (searchBarPosition < 0) {
        setIsSearchFloating(true);
      } else {    
        setIsSearchFloating(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#f7f7f7] relative overflow-x-hidden py-20">
      {/* Logout Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          className="px-6 py-2 bg-[#6366f1] text-white rounded-xl hover:bg-[#4f46e5] transition-all duration-200 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_4px_8px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Logout
        </button>
      </div>

      {/* Header Text */}
      <div className="text-center mb-12 z-10">
        <h1 className="text-4xl font-bold text-[#170F49] font-baskervville">
          Headmaster's Page
        </h1>
        <p className="text-[#6F6C8F] mt-2">
          Manage Students and Teachers
        </p>
      </div>

      {/* Floating Search Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${isSearchFloating ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="backdrop-blur-xl p-4">
          <div className="w-[90%] max-w-[1200px] mx-auto">
            <div className="relative w-full md:w-[443px] mx-auto">
              <input
                type="text"
                placeholder="Search students..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border bg-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all duration-300 placeholder:text-gray-400 hover:placeholder:text-gray-600"
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
          </div>
        </div>
      </div>

      {/* Animated background blobs with fixed positioning */}
      <div className="fixed top-0 -left-40 w-[600px] h-[500px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float z-0" />
      <div className="fixed -bottom-32 right-40 w-[600px] h-[600px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float animation-delay-3000 z-0" />
      <div className="fixed top-1/2 left-1/2 w-[500px] h-[500px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float animation-delay-5000 z-0" />
      <div className="fixed top-0 -left-40 w-[500px] h-[600px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float animation-delay-7000 z-0" />
      
      <div className="w-[90%] max-w-[1200px] mx-4 z-10">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-2 inline-flex gap-2 shadow-lg">
            <button
              onClick={() => setActiveTab("students")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === "students"
                  ? "bg-[#6366f1] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_4px_8px_rgba(255,255,255,0.2)]"
                  : "text-[#170F49] hover:bg-white/50"
              }`}
            >
              Students List
            </button>
            <button
              onClick={() => setActiveTab("teachers")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === "teachers"
                  ? "bg-[#6366f1] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_4px_8px_rgba(255,255,255,0.2)]"
                  : "text-[#170F49] hover:bg-white/50"
              }`}
            >
              Teachers List
            </button>
          </div>
        </div>
        
        {/* Main container */}
        <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-white/20">
          {activeTab === "students" ? (
            <>
              {/* Filter and Search Section */}
              <div className="flex justify-between items-center mb-8">
                {/* Filter Options on left */}
                <div className="flex items-center gap-2">
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
                      className="px-4 pr-8 py-2 rounded-xl border bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all duration-300 text-gray-600 hover:text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[center_right_0.5rem] bg-no-repeat"
                    >
                      <option value="all">All Students</option>
                      <option value="class">Class</option>
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
                        className="px-4 pr-8 py-2 rounded-xl border bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all duration-300 text-gray-600 hover:text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[center_right_0.5rem] bg-no-repeat"
                      >
                        <option value="all">All Classes</option>
                        <option value="X-A">X-A</option>
                        <option value="X-B">X-B</option>
                        <option value="X-C">X-C</option>
                      </select>
                    </div>
                  )}
                </div>
                {/* Original Search Bar */}
                <div id="search-container" className="relative">
                  <input
                    type="text"
                    placeholder="Search students..."
                    className="pl-10 pr-4 py-2 rounded-xl border bg-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all w-[443px] duration-300 placeholder:text-gray-400 hover:placeholder:text-gray-600"
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

                {/* Add Student Button on right */}
                <button
                  className="px-6 py-2 bg-[#6366f1] text-white rounded-xl hover:bg-[#4f46e5] transition-all duration-200 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_4px_8px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:scale-105 flex items-center gap-2">
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
              
              {/* Student List */}
              <div className="grid grid-cols-1 gap-4 px-4">
                {/* Add Malavika's card at the top */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                  <div className="flex items-center space-x-4 text-[#170F49]">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img 
                        src="https://eu.ui-avatars.com/api/?name=Malavika&size=250" 
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
                        src="https://eu.ui-avatars.com/api/?name=Renisha&size=250" 
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
                        src="https://eu.ui-avatars.com/api/?name=Lydia&size=250" 
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
                        src="https://eu.ui-avatars.com/api/?name=Sreedhanya&size=250" 
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
            </>
          ) : (
            <>
              {/* Teachers List Content */}
              {/* Filter and Search Section */}
              <div className="flex justify-between items-center mb-8">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-[443px]">
                  <input
                    type="text"
                    placeholder="Search teachers..."
                    className="w-full pl-10 pr-4 py-2 rounded-xl border bg-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all duration-300 placeholder:text-gray-400 hover:placeholder:text-gray-600"
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

                {/* Add Teacher Button */}
                <button className="px-6 py-2 bg-[#6366f1] text-white rounded-xl hover:bg-[#4f46e5] transition-all duration-200 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_4px_8px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:scale-105 flex items-center gap-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Teacher
                </button>
              </div>

              {/* Teachers List */}
              <div className="grid grid-cols-1 gap-4 px-4">
                {/* Example Teacher Card */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                  <div className="flex items-center space-x-4 text-[#170F49]">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img 
                        src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250" 
                        alt="Teacher"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#170F49]">John Doe</h3>
                      <div className="space-y-1 mt-2">
                        <p className="text-sm text-[#6F6C8F]">
                          <span className="font-medium">Subject:</span> Mathematics
                        </p>
                        <p className="text-sm text-[#6F6C8F]">
                          <span className="font-medium">Class Teacher:</span> X-A
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

                {/* Add more teacher cards here */}
              </div>
            </>
          )}
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

export default HeadMaster;