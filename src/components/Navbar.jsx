import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d1320]/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <div className="bg-[#22e48b] w-10 h-10 rounded flex items-center justify-center text-black font-bold">
            C
          </div>

          <h1 className="font-bold text-xl">hhayhour</h1>
        </div>

       <nav className="hidden md:flex gap-10 text-gray-300">

  <a href="#home" className="hover:text-[#22e48b] transition">
    Home
  </a>

  <a href="#about" className="hover:text-[#22e48b] transition">
    About
  </a>

  <a href="#services" className="hover:text-[#22e48b] transition">
    Services
  </a>

  <a href="#portfolio" className="hover:text-[#22e48b] transition">
    Portfolio
  </a>

  <a href="#contact" className="hover:text-[#22e48b] transition">
    Contact
  </a>

</nav>

        <button className="hidden md:block border border-[#22e48b] px-6 py-3 rounded-lg hover:bg-[#22e48b] hover:text-black transition">
          LET'S TALK
        </button>

        <Menu className="md:hidden"/>
      </div>
    </header>
  );
}

export default Navbar;