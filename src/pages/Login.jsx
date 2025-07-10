import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Logo from "../utils/logo";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    toast.dismiss();

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signed in successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e0032] to-[#3f0080] relative">
      {/* 🔙 Back link */}
      <Link
        to="/"
        className="absolute top-4 left-4 text-white  text-lg flex items-center gap-1 group"
      >
        {/* Animate arrow left on hover */}
        <ArrowLeft className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-x-1" />
        Back to Home
      </Link>



      {/* 📝 Login Form */}
      <form
        onSubmit={handleLogin}
        className="bg-[#2a004d] p-8 rounded-xl shadow-xl w-full max-w-md text-white "
      >
        <div className="text-center mb-6">
          <div className="flex justify-center py-6"><Logo /></div>

          <div className="text-4xl font-bold mb-1">Welcome Back</div>
          <p className="text-sm text-gray-300">Sign in to your KanbanFlow account</p>
        </div>

        {/* Email */}
        <label className="block mb-2 text-sm font-semibold">Email</label>
        <input
          required
          type="email"
          className="w-full p-2 rounded bg-gray-900 border border-gray-700 mb-4 text-white"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="block mb-2 text-sm font-semibold">Password</label>
        <div className="relative mb-4">
          <input
            required
            type={showPassword ? "text" : "password"}
            className="w-full p-2 pr-10 rounded bg-gray-900 border border-gray-700 text-white"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-3 text-gray-400 hover:text-white"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {/* Link */}
        <p className="text-center mt-4 text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-300 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
