import { Loader2 } from "lucide-react";

export default function Loader() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e0032] to-[#3f0080] text-white">
            <div className="flex items-center gap-3 text-6xl animate-pulse">
                <Loader2 className="w-16 h-16 animate-spin text-purple-300" />
                Loading...
            </div>
        </div>
    );
}
