import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1e0032] to-[#3f0080] text-white p-6 text-center">
      <AlertTriangle className="w-16 h-16 text-yellow-400 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-purple-200 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white px-6 py-2 rounded-md font-semibold transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}
