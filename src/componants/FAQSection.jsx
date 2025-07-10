import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I use KanbanFlow for personal projects?",
    answer:
      "Absolutely! KanbanFlow is perfect for both personal productivity and managing solo side projects. Keep everything organized in one place.",
  },
  {
    question: "Does KanbanFlow work on mobile?",
    answer:
      "Yes, KanbanFlow is fully responsive and works great on mobile, tablet, and desktop. Stay productive wherever you go.",
  },
  {
    question: "How do I invite my team?",
    answer:
      "Currently, KanbanFlow is optimized for solo users. Team collaboration features are coming soon with shared boards and real-time updates.",
  },
  {
    question: "Can I back up my data?",
    answer:
      "Yes. Your data is stored securely in the cloud, and regular backups are maintained. Export features are also planned in upcoming updates.",
  },
  {
    question: "What makes KanbanFlow different?",
    answer:
      "KanbanFlow combines clean UI, smart filters, and real-time updates with the simplicity of drag-and-drop—built for focused daily work, not complexity.",
  },
];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-[#1e0032] to-[#3f0080] py-16 px-4 sm:px-6 lg:px-8 text-white min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-6 tracking-tight mt-8">Frequently Asked Questions</h2>
        <p className="text-gray-200 text-lg">
          Have questions? We’ve got the answers to help you get started with KanbanFlow.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              layout
              key={index}
              initial={false}
              animate={{
                backgroundColor: isOpen ? "#2a1e5a" : "#221c4b",
                borderColor: isOpen ? "#c084fc" : "rgba(255,255,255,0.1)",
              }}
              transition={{ duration: 0.5, ease: [0.6, 0.05, 0.25, 0.95] }}
              className="rounded-xl border overflow-hidden shadow-md"
            >
              <motion.button
                layout
                className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-white/10 transition-colors duration-500"
                onClick={() => toggle(index)}
              >
                <span className="text-xl font-medium text-white group-hover:text-purple-200 transition-colors duration-500">
                  {faq.question}
                </span>
                <span className="text-purple-200">
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </motion.button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    layout
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-4 text-base text-gray-200 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
