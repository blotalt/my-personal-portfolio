import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
function Services() {
    const navigate = useNavigate();

const [loading, setLoading] = useState(false);
const handleNavigate = (path) => {
  setLoading(true);

  setTimeout(() => {
    navigate(path);
  }, 250);
};
  const services = [
    {
      title: "Security Foundation",
      desc: "Learning cybersecurity fundamentals, ethical hacking and system protection.",
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop",
      color: "from-green-400 to-emerald-600",
    },

    {
      title: "CCNA & Networking",
      desc: "Routing, switching, subnetting and understanding network infrastructure.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      color: "from-cyan-400 to-blue-600",
    },

    {
      title: "Web Programming",
      desc: "Building responsive modern websites using React and Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      color: "from-purple-400 to-pink-600",
    },
  ];

  return (
    <>
     {loading && <LoadingScreen />}
    
    <section
      id="services"
      className="min-h-screen py-24 flex items-center bg-[#0d1320]"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-[#22e48b]">
            Services
          </p>

          <h2 className="text-6xl font-black mt-4 text-white">
            What I Do
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            My main focus areas in technology.
          </p>
        </div>

        {/* 3D CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div
  key={index}
  className="group relative h-[500px] rounded-[35px] overflow-hidden bg-[#111827] border border-white/10 transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,228,139,0.25)]"
  onMouseMove={(e) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 8) * -1;
    const rotateY = (x - centerX) / 8;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.08,1.08,1.08)
    `;
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = `
      perspective(700px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1,1,1)
    `;
  }}
>

              {/* IMAGE */}
              <img
                src={service.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1320]/40 to-[#0d1320]"></div>

              {/* GLOW */}
              <div
                className={`absolute -top-20 left-1/2 -translate-x-1/2 w-[250px] h-[250px] rounded-full blur-3xl opacity-30 bg-gradient-to-r ${service.color}`}
              ></div>

              {/* GLASS */}
              <div className="absolute bottom-0 w-full backdrop-blur-xl bg-white/5 border-t border-white/10 p-8">

                <h3 className="text-3xl font-black text-white">
                  {service.title}
                </h3>

                <p className="text-gray-300 mt-5 leading-8">
                  {service.desc}
                </p>

                <Link
  to={
    index === 0
      ? "/security"
      : index === 1
      ? "/ccna"
      : "/webdev"
  }
>
<button
  onClick={() =>
    handleNavigate(
      index === 0
        ? "/security"
        : index === 1
        ? "/ccna"
        : "/webdev"
    )
  }
  className="mt-8 px-6 py-3 rounded-xl bg-[#22e48b] text-black font-bold hover:scale-105 transition"
>
  Explore
</button>
</Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
    </>
  );
}

export default Services;