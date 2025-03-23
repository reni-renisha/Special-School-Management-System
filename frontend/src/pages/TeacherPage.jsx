import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TeacherPage = () => {
  // Get the teacher ID from URL parameters
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch teacher data from an API
    // For now, we'll use mock data based on the ID
    setTimeout(() => {
      // Mock teacher data based on ID
      const teacherData = getTeacherData(id);
      setTeacher(teacherData);
      setLoading(false);
    }, 500); // Simulate network delay
  }, [id]);

  const getTeacherData = (teacherId) => {
    // Mock data for different teachers
    const teachers = {
      'arjun-jayakumar': {
        name: 'Arjun Jayakumar',
        teacherId: 'TCH2024001',
        dob: '15 January 1985',
        gender: 'Male',
        religion: 'Hinduism',
        caste: 'General',
        mobile: '+91 9876543210',
        email: 'arjun.jayakumar@school.edu',
        address: '123 Teacher Colony, Education Street, Knowledge City - 560001',
        aadhar: 'XXXX-XXXX-1234',
        bloodGroup: 'O+',
        category: 'General',
        rciNumber: 'RCI12345678',
        rciRenewalDate: '10 January 2025',
        qualifications: 'Bachelor of Education (B.Ed) in Special Education from Kerala University. Masters in AI/ML from IIT.',
        subject: 'AI/ML',
        classAssigned: 'X-B',
        classes: [
          { class: 'Class 10-B', subject: 'AI/ML', days: 'Monday, Wednesday, Friday', timing: '10:00 AM - 11:00 AM' },
          { class: 'Class 9-A', subject: 'Computer Science', days: 'Tuesday, Thursday', timing: '11:15 AM - 12:15 PM' }
        ]
      },
      'aditya-s-nair': {
        name: 'Aditya S Nair',
        teacherId: 'TCH2024002',
        dob: '22 March 1990',
        gender: 'Male',
        religion: 'Hinduism',
        caste: 'General',
        mobile: '+91 9876543211',
        email: 'aditya.s.nair@school.edu',
        address: '456 Knowledge Park, Wisdom Lane, Intellect City - 560002',
        aadhar: 'XXXX-XXXX-5678',
        bloodGroup: 'A+',
        category: 'General',
        rciNumber: 'RCI87654321',
        rciRenewalDate: '15 February 2025',
        qualifications: 'Bachelor of Education (B.Ed) from Mumbai University. Masters in Mathematics from IISc Bangalore.',
        subject: 'Mathematics',
        classAssigned: 'X-A',
        classes: [
          { class: 'Class 10-A', subject: 'Mathematics', days: 'Monday, Wednesday, Friday', timing: '9:00 AM - 10:00 AM' },
          { class: 'Class 8-B', subject: 'Mathematics', days: 'Tuesday, Thursday', timing: '10:15 AM - 11:15 AM' }
        ]
      },
      'abhiram-krishna': {
        name: 'Abhiram Krishna',
        teacherId: 'TCH2024003',
        dob: '10 October 1988',
        gender: 'Male',
        religion: 'Hinduism',
        caste: 'General',
        mobile: '+91 9876543212',
        email: 'abhiram.krishna@school.edu',
        address: '789 Educator Homes, Learning Road, Academic City - 560003',
        aadhar: 'XXXX-XXXX-9012',
        bloodGroup: 'B+',
        category: 'General',
        rciNumber: 'RCI24681357',
        rciRenewalDate: '20 March 2025',
        qualifications: 'Bachelor of Special Education from Delhi University. Masters in History from JNU.',
        subject: 'Not Mathematics',
        classAssigned: 'X-A',
        classes: [
          { class: 'Class 10-A', subject: 'History', days: 'Monday, Wednesday', timing: '11:00 AM - 12:00 PM' },
          { class: 'Class 9-B', subject: 'Social Studies', days: 'Tuesday, Thursday, Friday', timing: '1:15 PM - 2:15 PM' }
        ]
      },
      'faheem-mohammed': {
        name: 'Faheem Mohammed',
        teacherId: 'TCH2024004',
        dob: '5 May 1992',
        gender: 'Male',
        religion: 'Islam',
        caste: 'General',
        mobile: '+91 9876543213',
        email: 'faheem.mohammed@school.edu',
        address: '101 Scholar Avenue, Teaching Street, Automotive City - 560004',
        aadhar: 'XXXX-XXXX-3456',
        bloodGroup: 'AB+',
        category: 'General',
        rciNumber: 'RCI13579246',
        rciRenewalDate: '25 April 2025',
        qualifications: 'Bachelor of Education in Automotive Engineering. Masters in Mechanical Engineering from MIT.',
        subject: 'Cars',
        classAssigned: 'X-A',
        classes: [
          { class: 'Class 10-A', subject: 'Automotive Technology', days: 'Monday, Wednesday, Friday', timing: '2:00 PM - 3:00 PM' },
          { class: 'Class 11-B', subject: 'Mechanical Design', days: 'Tuesday, Thursday', timing: '9:15 AM - 10:15 AM' }
        ]
      }
    };

    return teachers[teacherId] || {
      name: 'Teacher Not Found',
      teacherId: 'Unknown',
      dob: 'Unknown',
      gender: 'Unknown',
      religion: 'Unknown',
      caste: 'Unknown',
      mobile: 'Unknown',
      email: 'Unknown',
      address: 'Unknown',
      aadhar: 'Unknown',
      bloodGroup: 'Unknown',
      category: 'Unknown',
      rciNumber: 'Unknown',
      rciRenewalDate: 'Unknown',
      qualifications: 'Unknown',
      subject: 'Unknown',
      classAssigned: 'Unknown',
      classes: []
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f7f7f7]">
        <div className="text-2xl text-[#6366f1]">Loading teacher information...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#f7f7f7] relative overflow-hidden py-20">
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
      
      <div className="w-[90%] max-w-[1200px] mx-4 flex-1 flex flex-col">
        <h1 className="text-3xl font-bold text-[#170F49] mb-8 text-center font-baskervville">
          Teacher Information
        </h1>
        
        {/* Main content container */}
        <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Basic Information Section */}
            <div className="col-span-full">
              <h2 className="text-xl font-semibold text-[#170F49] mb-4">Personal Information</h2>
              <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-white/50 rounded-2xl">
                {/* Teacher Photo */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-white/50 shadow-xl">
                    <img 
                      src={`https://eu.ui-avatars.com/api/?name=${teacher.name.replace(' ', '+')}&size=250`}
                      alt="Teacher"
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

                {/* Teacher Details */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pl-8 md:pl-12">
                  <div>
                    <p className="text-sm text-[#6F6C90]">Full Name</p>
                    <p className="text-[#170F49] font-medium">{teacher.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6F6C90]">Teacher ID</p>
                    <p className="text-[#170F49] font-medium">#{teacher.teacherId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6F6C90]">Date of Birth</p>
                    <p className="text-[#170F49] font-medium">{teacher.dob}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6F6C90]">Gender</p>
                    <p className="text-[#170F49] font-medium">{teacher.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6F6C90]">Religion</p>
                    <p className="text-[#170F49] font-medium">{teacher.religion}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6F6C90]">Caste</p>
                    <p className="text-[#170F49] font-medium">{teacher.caste}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="col-span-full">
              <h2 className="text-xl font-semibold text-[#170F49] mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/50 rounded-2xl">
                <div>
                  <p className="text-sm text-[#6F6C90]">Mobile Number</p>
                  <p className="text-[#170F49] font-medium">{teacher.mobile}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6F6C90]">Email</p>
                  <p className="text-[#170F49] font-medium">{teacher.email}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-[#6F6C90]">Address</p>
                  <p className="text-[#170F49] font-medium">{teacher.address}</p>
                </div>
              </div>
            </div>

            {/* Identification Details Section */}
            <div className="col-span-full">
              <h2 className="text-xl font-semibold text-[#170F49] mb-4">Identification Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/50 rounded-2xl">
                <div>
                  <p className="text-sm text-[#6F6C90]">Aadhar Number</p>
                  <p className="text-[#170F49] font-medium">{teacher.aadhar}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6F6C90]">Blood Group</p>
                  <p className="text-[#170F49] font-medium">{teacher.bloodGroup}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6F6C90]">Category</p>
                  <p className="text-[#170F49] font-medium">{teacher.category}</p>
                </div>
              </div>
            </div>

            {/* Professional Information Section */}
            <div className="col-span-full">
              <h2 className="text-xl font-semibold text-[#170F49] mb-4">Professional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/50 rounded-2xl">
                <div>
                  <p className="text-sm text-[#6F6C90]">RCI Number</p>
                  <p className="text-[#170F49] font-medium">{teacher.rciNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6F6C90]">RCI Renewal Date</p>
                  <p className="text-[#170F49] font-medium">{teacher.rciRenewalDate}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-[#6F6C90]">Qualifications Details</p>
                  <p className="text-[#170F49] font-medium">{teacher.qualifications}</p>
                </div>
              </div>
            </div>

            {/* Classes Assigned Section */}
            <div className="col-span-full">
              <h2 className="text-xl font-semibold text-[#170F49] mb-4">Classes Assigned</h2>
              <div className="p-6 bg-white/50 rounded-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse rounded-xl overflow-hidden">
                    <thead className="bg-[#6366f1]/10">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[#170F49]">Class</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[#170F49]">Subject</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[#170F49]">Days</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[#170F49]">Timing</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white/70">
                      {teacher.classes.map((classItem, index) => (
                        <tr key={index} className={index < teacher.classes.length - 1 ? "border-b border-[#6366f1]/10" : ""}>
                          <td className="px-4 py-3 text-sm text-[#170F49]">{classItem.class}</td>
                          <td className="px-4 py-3 text-sm text-[#170F49]">{classItem.subject}</td>
                          <td className="px-4 py-3 text-sm text-[#170F49]">{classItem.days}</td>
                          <td className="px-4 py-3 text-sm text-[#170F49]">{classItem.timing}</td>
                        </tr>
                      ))}
                      {teacher.classes.length === 0 && (
                        <tr>
                          <td colSpan="4" className="px-4 py-3 text-sm text-center text-[#6F6C90]">No classes assigned</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="col-span-full">
              <h2 className="text-xl font-semibold text-[#170F49] mb-4">Documents</h2>
              <div className="p-6 bg-white/50 rounded-2xl">
                <div className="space-y-4">
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
                        <p className="font-medium text-[#170F49]">RCI Certificate</p>
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
                        <p className="font-medium text-[#170F49]">Educational Certificates</p>
                        <p className="text-sm text-[#6F6C90]">Uploaded on 15 Dec 2023</p>
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
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6 md:mt-8">
            <button className="flex-1 bg-[#6366f1] text-white py-4 rounded-2xl hover:bg-[#4f46e5] hover:-translate-y-1 transition-all duration-200 font-medium shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_4px_8px_rgba(255,255,255,0.2)]">
              Edit Details
            </button>
            <button className="flex-1 bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl p-3 border border-white/20 hover:-translate-y-1 transition-all font-medium duration-200">
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

        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(var(--tx), var(--ty)) scale(0.8); }
        }

        .particle-1, .particle-2, .particle-3 {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          pointer-events: none;
        }

        .particle-1 {
          top: 20%;
          left: 20%;
          --tx: 10px;
          --ty: -10px;
          animation: float-particle 3s infinite ease-in-out;
        }

        .particle-2 {
          top: 50%;
          right: 20%;
          --tx: -15px;
          --ty: 5px;
          animation: float-particle 4s infinite ease-in-out;
        }

        .particle-3 {
          bottom: 20%;
          left: 50%;
          --tx: 5px;
          --ty: 15px;
          animation: float-particle 5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default TeacherPage; 