import React from "react";
import { useNavigate } from "react-router-dom";
import mainfront from "../images/mainfront.jpg";
import vision from "../images/vision.jpg";
import mission from "../images/mission.jpg";
import teachers from "../images/teachers.jpg";
import logo from "../images/logo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col bg-white relative overflow-hidden"> {/* Changed background to white */}
      {/* Removed Animated background blobs for cleaner look like the example */}

      {/* Header Section - Replaces Navigation */}
      {/* Further reduced horizontal padding for edge alignment */}
      <header className="absolute top-0 left-0 right-0 z-20 px-2 py-6 sm:px-4">
        <div className="flex justify-between items-center w-full"> {/* Ensure full width */}
          {/* Logo and School Name - Top Left */}
          <div className="flex items-center gap-3"> {/* Reduced gap slightly */}
            <img src={logo} alt="School Logo" className="h-10 w-10 sm:h-12 sm:w-12" /> {/* Further reduced logo size */}
            {/* Further reduced text size */}
            <span className="text-xl sm:text-2xl font-semibold text-[#170F49] font-baskervville">St. Martha's Special School</span>
          </div>

          {/* Login Button - Top Right - Final Adjusted Style */}
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 text-base bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition-all duration-200 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_4px_8px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:scale-105 flex items-center gap-2" // Final adjustment: py-3, text-base, px-12, rounded-lg
          >
            {/* Added Login Icon (Arrow entering door) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Login
          </button>
        </div>
      </header>

      {/* Main Image and Hero Text Container */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden"> {/* Full screen height */}
        {/* Background Image with Blur and Gradient */}
        <div className="absolute inset-0 z-0 transform scale-105"> {/* Added scale-105 here */}
          <img
            src={mainfront}
            alt="St. Martha's Special School Background"
            className="w-full h-full object-cover filter blur-sm" // Blur remains on image
          />
          {/* Gradient Overlay: Image to White - Adjusted start opacity */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white z-10"></div> {/* Changed from-transparent to from-white/10 */}
        </div>

        {/* Centered Hero Text - Updated Structure and Styling */}
        <div className="relative z-10 text-center max-w-3xl px-4"> {/* Increased max-width slightly */}
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#170F49] mb-6 font-baskervville leading-tight"> {/* Applied Baskerville font and color */}
            Every Child Matters,<br/>Every Moment Counts.
          </h2>
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#6F6C90] leading-relaxed"> {/* Adjusted size and color */}
            St. Martha's Special School provides a caring, inclusive environment for children with mild general learning disabilities. We believe in nurturing each child's unique potential through individualized education and support.
          </p>
        </div>
      </div>

      {/* Content Below the Fold (Vision, Mission, etc.) */}
      {/* Added mx-auto and max-w-7xl to center the content container */}
      <div className="relative z-10 bg-white pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision and Mission Blocks */}
        {/* Removed max-w-7xl and horizontal padding from inner divs as the parent now handles it */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">
          <div className="bg-white/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:bg-white/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
            <div className="h-48 overflow-hidden">
              <img
                src={vision}
                alt="Our Vision"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="text-3xl text-left font-bold text-[#170F49] mb-3 font-baskervville group-hover:text-[#3730a3]">Our Vision</h3>
              <p className="text-[#6F6C90] text-lg leading-relaxed group-hover:text-[#514f7d]">
                Our vision is the holistic development of the mentally challenged children and to empower them to live a self-reliant and dignified life, fully and happily integrated into their communities.
              </p>
            </div>
          </div>
          <div className="bg-white/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:bg-white/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
            <div className="h-48 overflow-hidden">
              <img
                src={mission}
                alt="Our Mission"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="text-3xl text-left font-bold text-[#170F49] mb-3 font-baskervville group-hover:text-[#3730a3]">Our Mission</h3>
              <p className="text-[#6F6C90] text-lg leading-relaxed group-hover:text-[#514f7d]">
                Our mission is to identify and build the capacities of the mentally challenged children entrusted to our care, empower them with curriculum and vocational training, uplift them as self-reliant and dignified persons who contribute their share in nation-building.
              </p>
            </div>
          </div>
        </div>

        {/* Services and Features */}
        <h2 className="text-3xl font-bold text-[#170F49] mb-8 font-baskervville text-center">Our Services & Facilities</h2>
        {/* Removed max-w-7xl and horizontal padding from inner divs as the parent now handles it */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full mb-16">
          {[
            {
              title: "Special Education",
              description: "Based on the individual strengths and abilities, the children are divided into different groups. We cater the needs of each child. The children are periodically evaluated and assessed by the professionals."
            },
            {
              title: "Physiotherapy",
              description: "Department of physiotherapy center is one of the highlights of this institution. We are equipped with an advanced physiotherapy lab and two physiotherapists are working as full time staffs."
            },
            {
              title: "Speech Therapy",
              description: "The speech therapist give regular training to all and this is always in tune with one's need."
            },
            {
              title: "Behavioural Therapy",
              description: "A Clinical Psychologist is working here as staff member, catering the counseling needs of the students and the parents."
            },
            {
              title: "Computer Lab",
              description: "Computer lab is well equipped with very recent software, benefiting the staff in teaching and the students in learning."
            },
            {
              title: "Audio-Visual Room",
              description: "We have a well developed audio-visual lab. Students enjoy the sessions and the staff paves the way for fast learning."
            },
            {
              title: "Arts & Sports",
              description: "Comprehensive coaching in both arts and sports by experienced teachers. Students participate in various cultural activities, music, arts, and sports competitions at district and state levels, contributing to their overall development and building confidence through creative expression and physical activities."
            },
            {
              title: "Vocational Training Centre",
              description: "Students get training in a variety of items and they interestingly participate in horticulture, tailoring and making candles, agarbathy, envelops and paper bags."
            },
            {
              title: "Sensory Integration",
              description: "Our school has thw facility of sensory therapy to clam down the autistic children who has the sensory issues."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl hover:bg-white/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-[#170F49] mb-4 group-hover:text-[#3730a3] transition-colors duration-300">{feature.title}</h3>
              <p className="text-[#6F6C90] group-hover:text-[#514f7d] transition-colors duration-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Teachers Image Section - Moved inside the centered container */}
        <div className="relative w-full h-[900px] overflow-hidden group my-16 bg-gray-100"> {/* Added margin top/bottom */}
          <img
            src={teachers}
            alt="Our Teachers"
            className="w-full h-full object-contain transform scale-100 group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div> {/* This now correctly closes the centered container AFTER the Teachers image */}

      {/* Footer - Remains outside the main content centered div */}
      <footer className="relative z-10 bg-white/30 backdrop-blur-xl border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="text-[#6F6C90] text-base space-y-3">
              <p className="text-xl font-bold text-[#170F49]">If you wish to extend your helping hands, Please contact us.</p>
              <p className="text-lg font-medium">Donations to our institution are eligible for tax exemption under section 80G. Please make your contributions in the name of "St. Martha's Special School"</p>
              <div className="mt-4">
                <p className="text-lg font-bold text-[#170F49]">Bank Details: The Catholic Syrian Bank Ltd. Kazhakuttom</p>
                <p className="text-lg font-medium">Account number: 0179-00454017-190001</p>
                <p className="text-lg font-medium">IFSC Code: CSBK0000179</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-[#170F49] mb-6 text-left">Contact Us</h3>
              <div className="text-[#6F6C90] text-base space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z M8 5a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                </svg>
                <span>Address: Kalpana road Chittattumukku P.O Menamkulam</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>Phone: 9388084403, 9388084401</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>Email: stmarthaspecialschool@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"/>
                </svg>
                <span>WhatsApp: 9388084403</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.29 14.29a1 1 0 001.41 1.41l5-5a1 1 0 000-1.41l-5-5a1 1 0 00-1.41 1.41L12.59 10l-4.3 4.29z"/>
                </svg>
                <span>Facebook: stmarthaspecialschool@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"/>
                </svg>
                <span>Telegram: 9388084403</span>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-[#6F6C90] text-sm border-t border-white/20 pt-4">
          <p>© 2025 St. Martha's Special School. All rights reserved.</p>
          <p className="mt-2">Providing Quality Special Education Since 1960</p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
