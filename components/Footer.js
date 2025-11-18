"use client";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products & Services", href: "#products-services" },
    { name: "About Us", href: "#about" },
    { name: "Calculators", href: "#financial-calculators" },
    { name: "Blogs", href: "#latest-blogs" },
  ];

  const services = [
    { name: "Mutual Funds", href: "#" },
    { name: "SIP & SWP Planning", href: "#" },
    { name: "Insurance Solutions", href: "#" },
    { name: "Tax Planning", href: "#" },
    { name: "Retirement Planning", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Disclaimer", href: "#" },
  ];

  return (
    <footer className="bg-linear-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-9xl px-4 py-12 sm:px-6 lg:px-30 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/images/company-logo.png"
                alt="Omoney Capital Logo"
                height={100}
                width={200}
              />
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Your trusted partner in wealth creation and financial planning.
              AMFI Registered & SEBI Compliant.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`group flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all duration-300 hover:scale-110 hover:text-white hover:shadow-lg ${social.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-center text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    <ChevronRight
                      className={`mr-2 h-4 w-4 transition-transform duration-300 ${
                        hoveredLink === `quick-${index}` ? "translate-x-1" : ""
                      }`}
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    onMouseEnter={() => setHoveredLink(`service-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-center text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    <ChevronRight
                      className={`mr-2 h-4 w-4 transition-transform duration-300 ${
                        hoveredLink === `service-${index}`
                          ? "translate-x-1"
                          : ""
                      }`}
                    />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span>
                  335-Jasal Complex, Nanavati Chowk, 150 Feet Ring Road, Rajkot,
                  Gujarat - 360005
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400">
                <Phone className="h-5 w-5 shrink-0 text-blue-400" />
                <a href="tel:+919601290640">+91 96012 90640</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400">
                <Mail className="h-5 w-5 shrink-0 text-blue-400" />
                <a href="mailto:info@omoneycapital.com">
                  info@omoneycapital.com
                </a>
              </li>
            </ul>

            {/* Newsletter Signup (Optional) */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold text-white">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <button className="rounded-lg bg-linear-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-9xl px-4 py-6 sm:px-6 lg:px-30">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © 2025 Omoney Capital. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900/50 p-4">
            <p className="text-center text-xs leading-relaxed text-gray-500">
              AMFI Registered Mutual Fund Distributor. ARN-123456. SEBI
              Registered Investment Adviser. INA000012345. Mutual fund
              investments are subject to market risks. Please read all scheme
              related documents carefully before investing.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="h-1 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600"></div>
    </footer>
  );
}
