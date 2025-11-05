import { Award, Check } from "lucide-react";

const products = [
  {
    name: "AeroLite Pro",
    tagline: "Featherweight. Street-strong.",
    price: "$1,299",
    features: ["5.8kg frame", "Carbon-fiber sidewalls", "Quick-release wheels"],
    color: "from-sky-50 to-white",
  },
  {
    name: "Urban Active",
    tagline: "Agile handling for daily life.",
    price: "$999",
    features: ["Ergo-cushion", "Tight turning radius", "Puncture-guard tires"],
    color: "from-emerald-50 to-white",
  },
  {
    name: "Trail Explorer",
    tagline: "Confidence off the pavement.",
    price: "$1,549",
    features: ["All-terrain wheels", "Suspension fork", "Reinforced frame"],
    color: "from-purple-50 to-white",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Wheelchairs
          </h2>
          <p className="mt-3 text-gray-600">
            Thoughtfully crafted to fit your lifestyle. Each model undergoes rigorous testing for safety and durability.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className={`group relative overflow-hidden rounded-3xl bg-gradient-to-b ${p.color} p-6 ring-1 ring-gray-100 transition`}> 
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.tagline}</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-900 ring-1 ring-gray-200">
                  {p.price}
                </span>
              </div>
              <div className="mt-6 space-y-2">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-emerald-600" /> {f}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <Award className="h-4 w-4 text-amber-500" /> Lifetime frame warranty
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                Request a demo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
