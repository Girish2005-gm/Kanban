import { Link } from "react-router-dom"
import "@/styles/shine-animation.css";
import Logo from "../utils/logo";
export default function HomePageHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e0032] to-[#3f0080] text-white flex flex-col justify-between">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">

        <h1 className="text-3xl font-bold flex items-center gap-4">
          <span className="text-purple-300"><Logo /> </span> KanbanFlow
        </h1>
        <div className="space-x-4">
          <Link to="/login" className="bg-white  text-black px-4 py-2 rounded-md transition-all font-semibold">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-all font-semibold"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="text-center px-4 md:px-0 flex-grow flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Organize Your Work,
          <br />
          <span className="shine-text">
            Visualize Success
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          Streamline your workflow with our intuitive Kanban boards. Collaborate
          with your team, track progress, and deliver projects faster than ever
          before.
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Link
            to="/signup"
            className="bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-md text-white text-lg font-semibold"
          >
            Start Free Trial
          </Link>
          <Link
            to="/signup"
            className="bg-white px-6 py-2 rounded-md text-black text-lg font-semibold"
          >
            Log in
          </Link>
        </div>
      </main>

    </div>
  );
}
