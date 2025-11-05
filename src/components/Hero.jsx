import { ArrowRight, Phone, Shield } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-16 lg:py-32">
        <motion.div
          className="relative z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-200"
          >
            <Shield className="h-4 w-4" /> ISO-certified manufacturing
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-manrope text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            Comfort, Control, and Confidence in Every Wheelchair
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-lg leading-8 text-gray-600">
            We design and build premium mobility solutions that blend ergonomic comfort, durable materials, and modern
            aesthetics — so you can move freely, every day.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <motion.a
              whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(2,132,199,0.25)" }}
              whileTap={{ scale: 0.98 }}
              href="#products"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            >
              Explore Wheelchairs
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-900 shadow-sm transition hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            >
              <Phone className="mr-2 h-4 w-4" /> Talk to a Specialist
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="relative mt-16 grid flex-1 place-items-center lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[360px] w-full max-w-[520px]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-100 via-white to-purple-100 ring-1 ring-gray-100" />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute inset-6 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-gray-100"
            />
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-3xl"
              style={{ background: "radial-gradient(120% 80% at 0% 0%, rgba(14,165,233,0.25), transparent), radial-gradient(120% 80% at 100% 100%, rgba(147,51,234,0.2), transparent)" }}
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mx-auto max-w-sm px-8 text-center"
              >
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
