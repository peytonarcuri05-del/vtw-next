"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvpjnnn"; // <— your endpoint

export default function Home() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // stop page navigation
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (res.ok) {
        setSent(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setSent(false), 4000);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(
          (data?.error && String(data.error)) ||
            "Something went wrong sending your message."
        );
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* HERO */}
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

        {/* Success / Error banners */}
        <AnimatePresence>
          {sent && (
            <motion.div
              key="sent"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="bg-green-600/20 text-green-400 border border-green-600 rounded-md px-4 py-3 max-w-lg mx-auto mb-6"
            >
              ✅ Message sent successfully! We’ll get back to you soon.
            </motion.div>
          )}
          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="bg-red-600/20 text-red-400 border border-red-600 rounded-md px-4 py-3 max-w-lg mx-auto mb-6"
            >
              ❌ {error}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-zinc-900 rounded-md px-3 py-2 sm:col-span-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-zinc-900 rounded-md px-3 py-2 sm:col-span-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-zinc-900 rounded-md px-3 py-2 sm:col-span-2"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="bg-zinc-900 rounded-md px-3 py-2 sm:col-span-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <div className="sm:col-span-2">
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-white text-black hover:bg-zinc-300 disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
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
