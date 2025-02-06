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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6 bg-white/50 rounded-2xl">
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