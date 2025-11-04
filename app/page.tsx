"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [sent, setSent] = useState(false);

  // Detect success redirect (?sent=1) and auto-hide after 4s
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("sent=1")) {
      setSent(true);
      const timer = setTimeout(() => setSent(false), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="text-center pt-24 pb-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold tracking-tight"
        >
          VTW — <span className="text-purple-400">vs the world</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 text-zinc-400 max-w-xl mx-auto"
        >
          Streetwear built for the comeback.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://instagram.com/vtw.clothing"
            target="_blank"
            className="flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            <Instagram className="w-5 h-5" /> Follow @vtw.clothing
          </a>
        </motion.div>
      </section>

      {/* LOOKBOOK */}
      <section id="lookbook" className="w-full bg-zinc-950 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Lookbook</h2>
        <p className="text-zinc-400">Coming soon — new drops in progress.</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="w-full bg-zinc-950 py-20 px-6 text-center relative">
        <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
        <p className="text-zinc-400 mb-6">
          Have a question or collab idea? Drop us a message below.
        </p>

        {/* Animated success alert */}
        <AnimatePresence>
          {sent && (
            <motion.div
              key="sent-banner"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="bg-green-600/20 text-green-400 border border-green-600 rounded-md px-4 py-3 max-w-lg mx-auto mb-6"
            >
              ✅ Message sent successfully! We’ll get back to you soon.
            </motion.div>
          )}
        </AnimatePresence>

        <form
          action="https://formspree.io/f/https://formspree.io/f/xgvpjnnn"
          method="POST"
          className="max-w-lg mx-auto grid gap-3 sm:grid-cols-2"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-zinc-900 rounded-md px-3 py-2 sm:col-span-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-zinc-900 rounded-md px-3 py-2 sm:col-span-2"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="bg-zinc-900 rounded-md px-3 py-2 sm:col-span-2"
            required
          />
          {/* spam honeypot */}
          <input type="text" name="_gotcha" className="hidden" />
          {/* redirect back with success flag */}
          <input type="hidden" name="_redirect" value="https://vtw.clothing/?sent=1" />
          <div className="sm:col-span-2">
            <Button type="submit" className="w-full sm:w-auto bg-white text-black hover:bg-zinc-300">
              Send Message
            </Button>
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} VTW — vs the world. All rights reserved.
      </footer>
    </main>
  );
}
