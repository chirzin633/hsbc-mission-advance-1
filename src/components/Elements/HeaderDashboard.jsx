import { useNavigate } from "react-router";

export default function HeaderDashboard() {
  const navigate = useNavigate();

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
        <div className="sm:hidden">
          <span className="block w-[30px] h-[2px] bg-black my-2"></span>
          <span className="block w-[30px] h-[2px] bg-black my-2"></span>
          <span className="block w-[30px] h-[2px] bg-black my-2"></span>
        </div>
      </nav>
    </header>
  );
}
