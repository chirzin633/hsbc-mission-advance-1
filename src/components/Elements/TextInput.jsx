export default function TextInput(props) {
  const { label, id, type = "text", required = true } = props;
  return (
    <label htmlFor={id}>
      <span className={required ? "after:content-['*'] after:text-red-500" : ""}>{label} </span>
      <input type={type} id={id} name={id} placeholder={label} className="block w-full p-2 border rounded border-slate-200" />
    </label>
  );
}
