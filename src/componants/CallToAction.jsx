import { useNavigate } from "react-router-dom";

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

        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-flex items-center"
          onClick={() => navigate("/login")}
        >
          Start Your Free Trial
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <p className="text-green-400 font-medium text-center mt-6 flex items-center justify-center gap-2">
          <span className="text-xl">✅</span> No need to pay any kind of money 😉
        </p>

      </div>

      <footer className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} KanbanFlow. Built with passion for productivity.
      </footer>
    </div>
  );
}
