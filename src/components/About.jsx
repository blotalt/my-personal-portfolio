function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            alt=""
            className="rounded-full w-[350px] h-[350px] object-cover border-[12px] border-[#22e48b]"
          />
        </div>

        <div>
          <p className="uppercase tracking-[4px] text-[#22e48b]">
            About Me
          </p>

          <h2 className="text-6xl font-black mt-4 mb-8">
            Ethical Hacker & Developer
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            Passionate software engineer and cybersecurity enthusiast focused on
            ethical hacking, web development, networking and programming.
          </p>

          <p className="text-gray-400 leading-8 text-lg mt-6">
            I enjoy building modern applications, learning cybersecurity and
            helping people understand technology safely.
          </p>

          <button className="mt-10 bg-[#22e48b] text-black px-8 py-4 rounded-lg font-semibold">
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;