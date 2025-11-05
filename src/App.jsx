import Hero from "./components/Hero.jsx";
import ProductShowcase from "./components/ProductShowcase.jsx";
import Benefits from "./components/Benefits.jsx";
import Testimonials from "./components/Testimonials.jsx";
import { Mail, MapPin, Phone } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top navigation */}
      <header className="sticky top-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-sky-600 text-white">WC</div>
            <span className="font-manrope text-lg font-extrabold tracking-tight">WheelCare</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
            <a href="#products" className="hover:text-gray-900">Products</a>
            <a href="#why" className="hover:text-gray-900">Why us</a>
            <a href="#reviews" className="hover:text-gray-900">Reviews</a>
            <a href="#contact" className="rounded-lg bg-gray-900 px-3 py-1.5 font-medium text-white hover:bg-gray-800">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ProductShowcase />
        <div id="why">
          <Benefits />
        </div>
        <div id="reviews">
          <Testimonials />
        </div>

        {/* Contact section */}
        <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-manrope text-3xl font-extrabold sm:text-4xl">Talk to our mobility specialists</h2>
              <p className="mt-3 text-gray-600">
                Have questions about fit, features, or delivery? Tell us a bit about your needs and we’ll reach out.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-sky-600" /> +1 (555) 012-3456</li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-sky-600" /> hello@wheelcare.co</li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-sky-600" /> 120 Market St, San Francisco, CA</li>
              </ul>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-gray-700">First name</label>
                  <input type="text" required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Last name</label>
                  <input type="text" required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-gray-700">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-gray-700">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" placeholder="Tell us about your goals..." />
                </div>
              </div>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-4 py-2.5 font-medium text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                Send message
              </button>
              <p className="mt-3 text-center text-xs text-gray-500">We usually respond within one business day.</p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} WheelCare, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#products" className="hover:text-gray-900">Products</a>
            <a href="#why" className="hover:text-gray-900">Why us</a>
            <a href="#reviews" className="hover:text-gray-900">Reviews</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
