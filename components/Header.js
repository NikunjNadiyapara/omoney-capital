"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products & Services", href: "#products-services" },
    { name: "About", href: "#about" },
    { name: "Calculators", href: "#financial-calculators" },
    { name: "Blogs", href: "#latest-blogs" },
    { name: "Webinars", href: "##webinars" },
    { name: "Videos", href: "#educational-videos" },
    { name: "Support", href: "#support" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="mx-auto flex max-w-9xl items-center justify-between px-4 py-3 lg:px-30">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#home">
            <img
              src="/images/company-logo.png"
              alt="Omoney Capital Logo"
              height={100}
              width={100}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
            Open Demat Account
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="mt-2 w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
              Open Demat Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
