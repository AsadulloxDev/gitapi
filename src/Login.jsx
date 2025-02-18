import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const Login = async (e) => {
    e.preventDefault();

    if (!phone || !password) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    try {
      const res = await axios.post("https://realauto.limsa.uz/api/auth/signin", {
        phone_number: phone.trim(),
        password: password.trim(),
      });

      localStorage.setItem("token", res.data.data.tokens.accessToken.token);
      toast.success("Tizimga muvaffaqiyatli kirdingiz!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Kirishda xatolik yuz berdi!");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Ro'yxatdan o'tish</h2>
        <form onSubmit={Login}>
          <div className="mb-4">
            <label className="block text-gray-700">Foydalanuvchi nomi</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Parol</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Ro'yxatdan o'tish
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
