import { Link, useNavigate } from "react-router-dom";
import "@/styles/shine-animation.css";
import Logo from "../utils/Logo";
import { Github } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
export default function HomePageHero() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out");
      navigate("/");
    } catch (err) {
      toast.error("Logout failed");
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-white relative overflow-hidden">
      {/* Background Grid with Radial Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-6">
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="text-purple-300"><Logo /></span>
            <span>KanbanFlow</span>
          </h1>
          <div className="flex flex-wrap gap-3">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold transition hover:opacity-90"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex flex-1 items-center justify-center px-4 text-center w-full">
          <div className="w-full max-w-3xl">
            {/* GitHub Button */}
            <a
              href="https://github.com/Girish2005-gm/Kanban"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-sparkle mx-auto mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/90 text-white text-sm font-semibold shadow-lg backdrop-blur hover:bg-zinc-800/90 transition-all duration-300 group"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <span className="inline-flex items-center gap-1 relative z-10">
                Star on GitHub – Support This Project
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">👉</span>
              </span>
            </a>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Organize Your Work,
              <br />
              <span className="shine-text">Visualize Success</span>
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-8">
              Streamline your workflow with our intuitive Kanban boards. Collaborate
              with your team, track progress, and deliver projects faster than ever before.
            </p>

            {/* Call to Action */}
            {!user && (
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link
                  to="/signup"
                  className="cta-glow-wrapper bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-md text-white text-base font-semibold relative z-10"
                >
                  <span className="relative z-10">Start Free Trial</span>
                </Link>
                <Link
                  to="/login"
                  className="bg-white px-6 py-2 rounded-md text-black text-base font-semibold transition hover:opacity-90"
                >
                  Log in
                </Link>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
