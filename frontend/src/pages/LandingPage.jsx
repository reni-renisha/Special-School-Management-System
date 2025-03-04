import React from "react";
import { useNavigate } from "react-router-dom";
import mainfront from "../images/mainfront.jpg";
import vision from "../images/vision.jpg";
import mission from "../images/mission.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#f7f7f7] relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 -left-40 w-[600px] h-[500px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float" />
      <div className="absolute -bottom-32 right-40 w-[600px] h-[600px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float animation-delay-3000" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#3730a3] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float animation-delay-5000" />

      {/* Navigation */}
      <nav className="relative z-10 w-full bg-white/30 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-[#170F49] font-baskervville">St. Martha's Special School</h1>
            <button
              onClick={() => navigate('/login')}
              className="bg-[#6366f1] text-white px-6 py-2 rounded-xl hover:bg-[#4f46e5] transition-all duration-200 font-medium shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Main Front Image */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={mainfront}
          alt="St. Martha's Special School Front View"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#170F49] mb-6 font-baskervville leading-tight">
            Every Child Matters, Every Moment Counts
          </h2>
          <p className="text-lg text-[#6F6C90] mb-8 max-w-2xl mx-auto">
            St. Martha's Special School provides a caring, inclusive environment for children with mild general learning disabilities. We believe in nurturing each child's unique potential through individualized education and support.
          </p>
        </div>

        {/* Vision and Mission Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
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
              title: "Sports",
              description: "Best coaching is provided to the children in sports, music and arts by experienced and qualified teachers. Our students regularly participate in district and state level competitions and this exposure positively contribute to the overall formation of our students."
            },
            {
              title: "Vocational Training Centre",
              description: "Students get training in a variety of items and they interestingly participate in horticulture, tailoring and making candles, agarbathy, envelops and paper bags."
            },
            {
              title: "Sensory Integration",
              description: "Our school has thw facility of sensory therapy to clam down the autistic children who has the sensory issues."
            },
            {
              title: "Arts",
              description: "The cocurrilular activities like arts and music which enable the children to grow in their ability also to find the ability."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="text-xl font-bold text-[#170F49] mb-3">{feature.title}</h3>
              <p className="text-[#6F6C90]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-white/30 backdrop-blur-xl border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-[#6F6C90] text-sm">
            <p>© 2025 St. Martha's Special School. All rights reserved.</p>
            <p className="mt-2">Providing Quality Special Education Since 1960</p>
          </div>
        </div>
      </footer>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, -100px) scale(1.2); }
          50% { transform: translate(0, 100px) scale(0.9); }
          75% { transform: translate(-100px, -50px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
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
      `}</style>
    </div>
  );
};

export default LandingPage;
