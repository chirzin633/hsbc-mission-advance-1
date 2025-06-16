import { useEffect, useState } from "react";
import HeaderDashboard from "../components/Elements/HeaderDashboard";

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

  function handleChange(e) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit() {
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
  }

  function handleEdit(index) {
    setForm(items[index]);
    setEditIndex(index);
  }

  function handleDelete(index) {
    if (!confirm("Yakin menghapus item ini?")) return;
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
    if (editIndex === index) {
      setForm({ name: "", description: "" });
      setEditIndex(null);
    }
  }

  return (
    <div className="font-[Lato] min-h-screen bg-[#FFFDF3]">
      <HeaderDashboard />
      <div className="p-4 xl:p-10">
        <h1 className="text-2xl font-extrabold mb-4">Admin Dashboard</h1>
        <p className="mb-4">Welcome to the admin dashboard. Here you can manage item and description</p>
        <div className="bg-white shadow-lg p-4">
          <h1 className="text-xl font-bold mb-5">{editIndex === null ? "Create New Item" : "Edit Item"}</h1>
          <form className="flex flex-col gap-3">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input type="text" id="name" className="border border-black rounded-sm p-1" placeholder="Enter item name" value={form.name} onChange={handleChange} />
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea name="description" id="description" className="h-20 border border-black rounded-sm p-1" placeholder="Enter item description" value={form.description} onChange={handleChange} />
            <button type="button" onClick={handleSubmit} className="bg-sky-700 w-20 px-2 py-1 rounded text-white font-semibold">
              {editIndex === null ? "Create" : "Update"}
            </button>
          </form>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg my-5">
          <h2 className="text-xl font-bold mb-4">Item List</h2>
          {items.length === 0 ? (
            <p className="text-gray-500">No items found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 font-semibold">ID</th>
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Description</th>
                    <th className="px-4 py-3 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {items.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">{item.description}</td>
                      <td className="px-4 py-3 text-center space-x-2">
                        <button onClick={() => handleEdit(index)} className="bg-yellow-400 hover:bg-yellow-500 text-white text-xs font-bold py-1 px-3 rounded">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(index)} className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-3 rounded">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
