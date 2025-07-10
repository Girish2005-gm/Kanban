import {
  CheckCircle,
  LayoutList,
  Zap,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <LayoutList className="w-8 h-8 text-purple-700 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-purple-200",
    title: "Visual Task Management",
    description:
      "Organize your workflow with drag-and-drop cards, custom lists, and easy task editing.",
    bullets: ["Drag & drop cards", "Tags & due dates", "Custom lists"],
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-yellow-200",
    title: "Fast & Responsive",
    description:
      "Experience smooth animations, real-time search, and instant updates — no reloads.",
    bullets: ["Zero lag UI", "Instant updates", "Real-time search"],
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-700 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-green-200",
    title: "Secure & Reliable",
    description:
      "Your data is stored securely in the cloud with Firebase Auth and backups.",
    bullets: ["Private boards", "Firebase Auth", "Cloud backups"],
  },
];

export default function Features() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1e0032] to-[#3f0080] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
        <p className="text-lg text-purple-200 mb-16">
          Speed, clarity, and productivity — tailor-made for developers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-[#2a004d] rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.025] transition-all duration-300"
            >
              <div className="flex flex-col items-start text-left space-y-4 justify-center">
                <div className={`p-5 rounded-xl mt-7 ${feature.iconBg}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white pt-4">{feature.title}</h3>
                <p className="text-md text-purple-200">{feature.description}</p>
                <ul className="text-base space-y-2 text-green-300 mt-2">
                  {feature.bullets.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
