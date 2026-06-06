"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "機能",     href: "#features" },
  { label: "料金",     href: "#pricing" },
  { label: "活用事例", href: "#usecases" },
  { label: "よくある質問", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm" : "bg-transparent"
    }`}>
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center shadow-sm">
            <CalendarCheck className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-gray-900 tracking-tight text-lg">ReserveFlow</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors px-2">
            ログイン
          </Link>
          <Button
            size="sm"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 rounded-xl shadow-sm transition-all hover:shadow-md"
          >
            無料で始める
          </Button>
        </div>

        <button className="md:hidden p-2 text-gray-500 hover:text-gray-900 transition-colors" onClick={() => setMenuOpen(v => !v)} aria-label="メニュー">
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-sm"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="py-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {l.label}
                </Link>
              ))}
              <div className="pt-3 mt-1 border-t border-gray-100 flex flex-col gap-2">
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full rounded-xl">
                  無料で始める
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
