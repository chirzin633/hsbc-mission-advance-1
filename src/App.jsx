import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Admin from "./Pages/Admin";
import SearchUser from "./Pages/SearchUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/search-user" element={<SearchUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
