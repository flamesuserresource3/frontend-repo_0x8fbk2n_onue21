import { Star } from "lucide-react";

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
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-extrabold text-gray-900 sm:text-4xl">Loved by riders and clinicians</h2>
          <p className="mt-3 text-gray-600">Real feedback from people who rely on our wheelchairs every day.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-gradient-to-b from-slate-50 to-white p-6 ring-1 ring-gray-100">
              <Stars />
              <blockquote className="mt-4 text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-500">
                <span className="font-medium text-gray-900">{t.name}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
