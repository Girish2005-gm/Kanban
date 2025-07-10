import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Eye, EyeOff } from "lucide-react"; 
import Logo from "../utils/Logo";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    toast.dismiss();

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created! Redirecting...");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e0032] to-[#3f0080] relative">
      <Link
        to="/"
        className="absolute top-4 left-4 text-white  text-lg flex items-center gap-1 group"
      >
        {/* Animate arrow left on hover */}
        <ArrowLeft className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <form
        onSubmit={handleSignup}
        className="bg-[#2a004d] p-8 rounded-xl shadow-xl w-full max-w-md text-white"
      >
        <div className="text-center mb-6">
          <div className="flex justify-center py-6"><Logo /></div>
          <div className="text-4xl font-bold mb-1">Create Account</div>
          <p className="text-sm text-gray-300">
            Sign up to start using KanbanFlow
          </p>
        </div>

        <label className="block mb-2 text-sm font-semibold">Email</label>
        <input
          required
          type="email"
          className="w-full p-2 rounded bg-gray-900 border border-gray-700 mb-4 text-white"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-2 text-sm font-semibold">Password</label>
        <div className="relative">
          <input
            required
            type={showPassword ? "text" : "password"}
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 mb-4 text-white pr-10"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition disabled:opacity-50"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="text-center mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-300 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
