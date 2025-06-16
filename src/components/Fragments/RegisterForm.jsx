import Divider from "../Elements/Divider";
import GoogleLoginButton from "../Elements/GoogleLoginButton";
import PasswordInput from "../Elements/PasswordInput";
import PhoneInput from "../Elements/PhoneInput";
import SelectInput from "../Elements/SelectInput";
import TextInput from "../Elements/TextInput";
import { useNavigate } from "react-router";

export default function RegisterForm() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/login");
  }

  return (
    <form className="flex flex-col gap-3">
      <TextInput label="Nama Lengkap" id="name" />
      <TextInput label="Email" id="email" type="email" />
      <SelectInput
        label="Jenis Kelamin"
        id="jk"
        name="jk"
        options={[
          { value: "pria", label: "Pria" },
          { value: "wanita", label: "Wanita" },
        ]}
      />
      <PhoneInput />
      <PasswordInput label="Kata Sandi " id="password" />
      <PasswordInput label="Konfirmasi Kata Sandi " id="confirmPassword" />

      <div className="w-full flex flex-col gap-3">
        <button onClick={handleNavigate} type="button" className="py-2 bg-green-500 text-white rounded-xl font-semibold">
          Masuk
        </button>

        <button type="submit" className="py-2 bg-[#E2FCD9CC] text-[#3ECF4C] rounded-xl font-semibold">
          Daftar
        </button>

        <Divider />
        <GoogleLoginButton />
      </div>
    </form>
  );
}
