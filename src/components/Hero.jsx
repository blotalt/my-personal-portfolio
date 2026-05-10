function Hero() {
  return (
  <section
  id="home"
  className="min-h-screen pt-40 pb-24 flex items-center"
>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        <div>
          <p className="uppercase tracking-[4px] text-gray-400 mb-4">
            Hello, I'm a
          </p>

          <h1 className="text-6xl font-black leading-tight">
            Ethical hacker &<span className="text-[#22e48b]">Programmer.</span>
          </h1>

          <p className="text-gray-400 mt-6 leading-8">
           Software enngineer with a passion of programming application to fulfil the society. 
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-[#22e48b] text-black px-8 py-4 rounded-lg font-semibold">
              VIEW PORTFOLIO
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-lg">
              HIRE ME
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-[400px] h-[400px] bg-[#22e48b] opacity-20 blur-3xl rounded-full"></div>

          <img
            src="https://i.pinimg.com/736x/44/84/18/448418b818f6f0c38b77c7ab31fd2a4a.jpg"
            alt=""
            className="relative z-10 rounded-[40px] w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;