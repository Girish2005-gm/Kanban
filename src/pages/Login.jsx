import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
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
      <Link to="/" className="absolute top-4 left-4 text-white hover:underline text-lg flex items-center gap-1">
        <ArrowLeft className="w-6 h-6"  />
        Back to Home
      </Link>

      <form
        onSubmit={handleLogin}
        className="bg-[#2a004d] p-8 rounded-xl shadow-xl w-full max-w-md text-white"
      >
        <div className="text-center mb-6">
          <div className="text-4xl font-bold mb-1">Welcome Back</div>
          <p className="text-sm text-gray-300">Sign in to your KanbanFlow account</p>
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
        <input
          required
          type="password"
          className="w-full p-2 rounded bg-gray-900 border border-gray-700 mb-4 text-white"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

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
