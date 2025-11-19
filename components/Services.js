"use client";
import { useState, useEffect } from "react";
import {
  TrendingUp,
  PiggyBank,
  RefreshCw,
  Shield,
  FileText,
  Home,
} from "lucide-react";
import OpenDematAccountPopUp from "./OpenDematAccountPopUp";

export default function ProductsServices() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpenAccountPopUp, setIsOpenAccountPopUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("products-services");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description:
        "Diversify your portfolio with expertly curated mutual fund schemes for optimal returns.",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      delay: "0ms",
    },
    {
      icon: PiggyBank,
      title: "Systematic Investment Plan (SIP)",
      description:
        "Start investing with as low as ₹500/month and build wealth systematically.",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      delay: "100ms",
    },
    {
      icon: RefreshCw,
      title: "Systematic Withdrawal Plan (SWP)",
      description:
        "Generate regular income from your investments with smart withdrawal strategies.",
      color: "from-yellow-500 to-yellow-600",
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-600",
      delay: "200ms",
    },
    {
      icon: Shield,
      title: "Insurance Planning",
      description:
        "Secure your family's future with comprehensive life and health insurance solutions.",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      delay: "300ms",
    },
    {
      icon: FileText,
      title: "Tax Planning",
      description:
        "Maximize your savings with tax-efficient investment strategies under 80C.",
      color: "from-yellow-500 to-yellow-600",
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-600",
      delay: "400ms",
    },
    {
      icon: Home,
      title: "Retirement Planning",
      description:
        "Plan your golden years with our retirement-focused investment solutions.",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      delay: "500ms",
    },
  ];

  return (
    <section
      id="products-services"
      className="bg-linear-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-30">
        {/* Header */}
        <div
          className={`mb-12 text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Products & Services
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg">
            Comprehensive financial solutions tailored to help you achieve your
            investment goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: service.delay }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.iconBg} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon
                      className={`${service.iconColor} h-7 w-7 transition-all duration-500 group-hover:scale-110`}
                    />
                  </div>

                  {/* Animated Pulse Ring */}
                  <div
                    className={`absolute left-0 top-0 h-14 w-14 rounded-xl ${service.iconBg} opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-0`}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Border Animation */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r ${service.color} transition-all duration-500 group-hover:w-full`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-6 text-gray-600">
            Ready to start your investment journey?
          </p>
          <button
            onClick={() => setIsOpenAccountPopUp(true)}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-linear-to-r from-blue-600 to-blue-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">Get Started Today</span>
            <TrendingUp className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 z-0 bg-linear-to-r from-blue-700 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </div>
      </div>
      {isOpenAccountPopUp && (
        <OpenDematAccountPopUp
          open={isOpenAccountPopUp}
          onClose={() => setIsOpenAccountPopUp(false)}
        />
      )}
    </section>
  );
}
