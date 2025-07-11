import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BorderBeam } from "@stianlarsen/border-beam";

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-br from-[#1e0032] to-[#3f0080] py-20 px-4 sm:px-6 lg:px-8 min-h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Container with beam */}
      <div className="w-full max-w-4xl relative overflow-hidden">
        {/* CTA Content Box */}
        <div className="relative z-10 text-center bg-[#2a004d] rounded-2xl p-10 sm:p-12 shadow-xl border border-white/10">
          {/* BorderBeam with custom colors */}
          <BorderBeam
            size={300}
            duration={10}
            colorFrom="#ffff"
            colorTo="#9c40ff"
          />

          <h2 className="text-4xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-md text-gray-300 mb-6">
            Join thousands of developers who’ve streamlined their productivity with
            <span className="font-semibold text-white"> KanbanFlow</span>.
          </p>

          <Link
            to="/signup"
            className="group bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-md text-white text-lg font-semibold inline-flex items-center transition duration-300"
            aria-label="Start your free trial with KanbanFlow"
          >
            <span className="flex items-center justify-center">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:-rotate-[30deg]" />
            </span>
          </Link>

          <p className="text-green-400 font-medium mt-6 flex items-center justify-center gap-2 text-sm sm:text-base px-4">
            <span className="text-lg sm:text-xl" aria-hidden="true">✅</span>
            <span>No need to pay any kind of money</span>
          </p>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="mt-20 text-gray-200 text-sm text-center">
        © {new Date().getFullYear()} KanbanFlow. Built with passion for productivity.
      </div>
    </div>
  );
}
