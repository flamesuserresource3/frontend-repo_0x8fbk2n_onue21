import { Heart, Shield, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Ergonomic comfort",
    icon: Heart,
    desc: "Pressure-mapped cushions and posture-first geometry reduce strain while improving circulation.",
  },
  {
    title: "Built to protect",
    icon: Shield,
    desc: "Impact-tested frames, fire-retardant fabrics, and rigorous QA keep you safe and secure.",
  },
  {
    title: "Service that stays",
    icon: Wrench,
    desc: "Nationwide partners for fittings, tune-ups, and repairs — on your schedule.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Benefits() {
  return (
    <section className="bg-gradient-to-b from-white to-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-extrabold text-gray-900 sm:text-4xl">Why choose us</h2>
          <p className="mt-3 text-gray-600">Everything we make is rooted in real-world insights from clinicians and riders.</p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map(({ title, icon: Icon, desc }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-gray-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600/10 text-sky-700 ring-1 ring-sky-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-sky-600/10 blur-xl"
                animate={{ x: [0, -6, 6, 0], y: [0, 6, -4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
