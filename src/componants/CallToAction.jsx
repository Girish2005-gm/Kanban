import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-[#1e0032] to-[#3f0080] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xlxl mx-auto text-center bg-[#2a004d] rounded-2xl p-10 shadow-xl border border-white/10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Join thousands of developers who’ve streamlined their productivity with{" "}
          <span className="font-semibold text-white">KanbanFlow</span>.
        </p>

        <Link
          to="/signup"
          className="group cta-glow-wrapper bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-md text-white text-lg font-semibold relative z-10 inline-flex items-center"
        >
          <span className="relative z-10 flex items-center justify-center">
            Start Your Free Trial
            <ArrowRight
              className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </Link>

        <p className="text-green-400 font-medium text-center mt-6 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base px-4">
          <span className="text-lg sm:text-xl">✅</span>
          No need to pay any kind of money 😉
        </p>

      </div>

      <footer className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} KanbanFlow. Built with passion for productivity.
      </footer>
    </div>
  );
}
