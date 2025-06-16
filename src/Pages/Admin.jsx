import { useEffect, useState } from "react";
import HeaderDashboard from "../components/Elements/HeaderDashboard";
import AdminForm from "../components/Elements/AdminForm";
import AdminItemList from "../components/Elements/AdminItemList";

export default function Admin() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("adminItems") || "[]");
    setItems(savedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("adminItems", JSON.stringify(items));
  }, [items]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.description) {
      alert("Nama dan deskripsi harus diisi");
      return;
    }
    if (editIndex === null) {
      setItems((prev) => [...prev, form]);
    } else {
      const updated = [...items];
      updated[editIndex] = form;
      setItems(updated);
      setEditIndex(null);
    }
    setForm({ name: "", description: "" });
  };

  const handleEdit = (index) => {
    setForm(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (!confirm("Yakin menghapus item ini?")) return;
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
    if (editIndex === index) {
      setForm({ name: "", description: "" });
      setEditIndex(null);
    }
  };

  return (
    <div className="font-[Lato] min-h-screen bg-[#FFFDF3]">
      <HeaderDashboard />
      <div className="p-4 xl:p-10">
        <h1 className="text-2xl font-extrabold mb-4">Admin Dashboard</h1>
        <p className="mb-4">Welcome to the admin dashboard. Here you can manage item and description</p>
        <AdminForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} editIndex={editIndex} />
        <AdminItemList items={items} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
