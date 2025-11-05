import { ArrowRight, Phone, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-16 lg:py-32">
        <div className="relative z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-200">
            <Shield className="h-4 w-4" /> ISO-certified manufacturing
          </span>
          <h1 className="mt-6 font-manrope text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Comfort, Control, and Confidence in Every Wheelchair
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We design and build premium mobility solutions that blend ergonomic comfort, durable materials, and modern aesthetics — so you can move freely, every day.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            >
              Explore Wheelchairs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-900 shadow-sm transition hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            >
              <Phone className="mr-2 h-4 w-4" /> Talk to a Specialist
            </a>
          </div>
        </div>
        <div className="relative mt-16 grid flex-1 place-items-center lg:mt-0">
          <div className="relative h-[360px] w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-100 via-white to-purple-100 ring-1 ring-gray-100" />
            <div className="absolute inset-6 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-gray-100" />
            <div className="absolute inset-0 -rotate-6 rounded-3xl bg-gradient-to-tr from-sky-200/60 to-purple-200/60 blur-2xl" />
            <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-tr from-sky-300/20 to-purple-300/20" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="mx-auto max-w-sm px-8 text-center">
                <div className="mx-auto mb-6 h-20 w-20 rounded-2xl bg-sky-600/10 p-5 text-sky-700 ring-1 ring-sky-200">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity=".35" />
                    <path d="M8 13h4l2 4m-6-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 13a4 4 0 0 1 8 0v1h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Engineered for everyday independence</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Lightweight frames, breathable cushions, and precision bearings deliver a smooth ride indoors and out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
