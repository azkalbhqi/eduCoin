"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Project", href: "/project" },
  { label: "Coin", href: "/coin" },
  { label: "Register", href: "/register" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all",
        scrolled ? "backdrop-blur bg-white/70 shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-emerald-400 hover:text-gray-950 transition">
          EduCoin
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-900 hover:text-emerald-400 transition font-medium relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
