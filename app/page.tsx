"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Instagram, Shirt, Sparkles, Mail, Menu } from "lucide-react";

const products = [
  { id: 1, name: "VTW Essentials Tee", price: "Coming soon", tag: "Drop 01", color: "Charcoal Black" },
  { id: 2, name: "VTW Hoodie", price: "Coming soon", tag: "Drop 01", color: "Bone White" },
  { id: 3, name: "VTW Runner Cap", price: "Coming soon", tag: "Core", color: "Night Navy" },
  { id: 4, name: "VTW Heavyweight Tee", price: "Coming soon", tag: "Drop 02", color: "Jet Black" },
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-center">
      <p className="text-2xl font-extrabold">{value}</p>
      <p className="text-xs uppercase tracking-wider text-zinc-400">{label}</p>
    </div>
  );
}

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[40vh] bg-gradient-to-b from-fuchsia-700/20 via-purple-700/10 to-transparent blur-2xl" />
        <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -left-20 top-64 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-fuchsia-500" />
            <span className="font-black tracking-tight">VTW</span>
            <span className="ml-2 hidden text-xs text-zinc-400 sm:inline">vs the world</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-zinc-300 hover:text-white" href="#shop">Shop</a>
            <a className="text-sm text-zinc-300 hover:text-white" href="#lookbook">Lookbook</a>
            <a className="text-sm text-zinc-300 hover:text-white" href="#about">About</a>
            <a className="text-sm text-zinc-300 hover:text-white" href="#contact">Contact</a>
            <a href="#newsletter" className="text-sm flex items-center gap-2 text-zinc-300 hover:text-white">
              Get notified
            </a>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5" />
          </Button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-zinc-800">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
              <a className="py-2 text-zinc-300" href="#shop" onClick={() => setOpen(false)}>Shop</a>
              <a className="py-2 text-zinc-300" href="#lookbook" onClick={() => setOpen(false)}>Lookbook</a>
              <a className="py-2 text-zinc-300" href="#about" onClick={() => setOpen(false)}>About</a>
              <a className="py-2 text-zinc-300" href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <a className="py-2 text-zinc-300" href="#newsletter" onClick={() => setOpen(false)}>Get notified</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black leading-tight sm:text-5xl"
            >
              VTW
              <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-300 to-white bg-clip-text text-transparent">
                vs the world.
              </span>
            </motion.h1>
            <p className="mt-4 max-w-prose text-zinc-300">
              Minimal silhouettes. Heavyweight feel. Designs that speak without shouting. Drop-ready components you can remix into your own look.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="px-6">Shop Drop 01</Button>
              <Button size="lg" variant="secondary" className="px-6">Join Newsletter</Button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
              <Shirt className="h-4 w-4" /> Premium 240gsm tees · 100% cotton · Unisex fit
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-800"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-xl border border-zinc-700 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">VTW</p>
                <p className="mt-2 text-2xl font-bold">Your Drop Image Here</p>
                <p className="mt-1 text-zinc-400">Swap this with your hero photo or video.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">Featured</h2>
            <p className="mt-1 text-sm text-zinc-400">Edit items, prices, and tags below.</p>
          </div>
          <a href="#newsletter" className="gap-2 text-zinc-300 hover:text-white flex items-center text-sm">
            <ShoppingBag className="h-4 w-4" /> Get notified
          </a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Card key={p.id} className="overflow-hidden border-zinc-800 bg-zinc-900/60">
              <div className="aspect-square w-full bg-gradient-to-br from-zinc-800 to-zinc-900" />
              <CardHeader>
                <CardTitle className="text-base">{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between text-sm text-zinc-300">
                <div>
                  <p>{p.price}</p>
                  <p className="text-xs text-zinc-400">{p.color}</p>
                </div>
                <span className="rounded-full border border-zinc-700 px-2 py-1 text-xs text-zinc-300">{p.tag}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Lookbook */}
      <section id="lookbook" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-bold">Lookbook</h2>
        <p className="mt-1 text-sm text-zinc-400">Drop in your photos or IG embeds.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/5] rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-800" />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-zinc-300">
          <Instagram className="h-4 w-4" /> Follow <span className="font-semibold">@vtw.streetwear</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h3 className="text-xl font-bold">Our Story</h3>
          <p className="mt-2 text-zinc-300">
            VTW started with a simple idea: everyone fights a battle the world never sees. Our motto—vs the world—is about resilience and self-belief. We design pieces that feel like armor—clean lines, heavyweight fabrics, and details that hold up to hard days and late nights. Built for the ones who show up.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <Stat label="Heavyweight tees" value="240gsm" />
            <Stat label="Verified cotton" value="100%" />
            <Stat label="New drops" value="Monthly" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="mx-auto max-w-5xl px-4 py-12">
        <Card className="border-zinc-800 bg-zinc-900/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5" /> Get early access</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-300">No spam. Only drops, restocks, and exclusive codes.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Input placeholder="your@email.com" className="bg-zinc-950" />
              <Button>Notify me</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="mx-auto max-w-7xl bg-zinc-800" />

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
        <h3 className="text-xl font-bold">Contact</h3>
        <p className="mt-1 text-sm text-zinc-400">Have wholesale or collab inquiries? Reach out below.</p>
        <form className="mt-4 grid gap-3 sm:grid-cols-2">
          <Input placeholder="Name" className="bg-zinc-950" />
          <Input placeholder="Email" type="email" className="bg-zinc-950" />
          <Input placeholder="Subject" className="bg-zinc-950 sm:col-span-2" />
          <Textarea placeholder="Message" className="bg-zinc-950 sm:col-span-2" rows={5} />
          <div className="sm:col-span-2">
            <Button className="w-full sm:w-auto">Send</Button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} VTW — vs the world.</p>
          <div className="flex items-center gap-3 text-sm text-zinc-300">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
