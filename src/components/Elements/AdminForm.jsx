export default function AdminForm({ form, handleChange, handleSubmit, editIndex }) {
  return (
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
        <textarea id="description" className="h-20 border border-black rounded-sm p-1" placeholder="Enter item description" value={form.description} onChange={handleChange} />
        <button type="button" onClick={handleSubmit} className="bg-sky-700 w-20 px-2 py-1 rounded text-white font-semibold">
          {editIndex === null ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
}
