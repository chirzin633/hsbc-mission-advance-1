import { useState } from "react";
import { useNavigate } from "react-router";

export default function HeaderDashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login");
  }

  function handleAdmin() {
    navigate("/admin");
  }

  function handleDashboard() {
    navigate("/dashboard");
  }

  return (
    <header className="bg-white shadow-lg xl:shadow-sm sticky">
      <nav className="px-5 flex justify-between items-center md:w-[80%] md:mx-auto md:px-0">
        <img onClick={handleDashboard} className="cursor-pointer" src="../public/img/logo-videobelajar.svg" alt="logo video belajar" />
        <div className="hidden text-slate-500 sm:flex items-center gap-4">
          <button onClick={handleAdmin} className="cursor-pointer">
            Admin
          </button>
          <h1>Kategori</h1>
          <button onClick={handleLogout} className="cursor-pointer">
            Logout
          </button>
          <img src="../public/img/Avatar.svg" alt="Avatar" />
        </div>
        <div onClick={handleToggleMenu} className="sm:hidden relative w-8 h-6 cursor-pointer">
          <span className={`absolute left-0 top-1/2 w-8 h-[2px] bg-black transition-transform duration-300 ${menuOpen ? "rotate-45" : "-translate-y-2"}`}></span>
          <span className={`absolute left-0 top-1/2 w-8 h-[2px] bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`absolute left-0 top-1/2 w-8 h-[2px] bg-black transition-transform duration-300 ${menuOpen ? "-rotate-45" : "translate-y-2"}`}></span>
        </div>

        {menuOpen && (
          <div className="sm:hidden flex flex-col bg-white p-4 shadow-md gap-3 absolute right-3 top-15 ">
            <button onClick={handleAdmin} className="cursor-pointer">
              Admin
            </button>
            <button className="cursor-pointer">Kategori</button>
            <button onClick={handleLogout} className="cursor-pointer">
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
