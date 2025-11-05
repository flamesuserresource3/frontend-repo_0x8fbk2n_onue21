import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ava R.",
    role: "Physiotherapist",
    quote:
      "The ergonomic design genuinely reduces fatigue for my patients. Adjustments are easy and precise.",
  },
  {
    name: "Marcus T.",
    role: "Everyday rider",
    quote:
      "It feels sturdy yet incredibly light. Curb climbs and tight corners are a breeze now.",
  },
  {
    name: "Lin C.",
    role: "Caregiver",
    quote:
      "The quick-release wheels and foldable frame save my back. Transport is simple and fast.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-extrabold text-gray-900 sm:text-4xl">Loved by riders and clinicians</h2>
          <p className="mt-3 text-gray-600">Real feedback from people who rely on our wheelchairs every day.</p>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-gradient-to-b from-slate-50 to-white p-6 ring-1 ring-gray-100"
            >
              <Stars />
              <blockquote className="mt-4 text-gray-700">“{testimonials[index].quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-500">
                <span className="font-medium text-gray-900">{testimonials[index].name}</span> · {testimonials[index].role}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-sky-600" : "bg-gray-300 hover:bg-gray-400"}`}
              />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
