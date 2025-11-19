"use client";
import { useState, useEffect } from "react";
import { MessageCircle, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function SupportSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("support");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support via WhatsApp",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      delay: "0ms",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      delay: "100ms",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Write to us anytime",
      color: "from-yellow-500 to-yellow-600",
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-600",
      delay: "200ms",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Support whenever you need",
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      delay: "300ms",
    },
  ];

  return (
    <section
      id="support"
      className="bg-linear-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24"
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
            Need Help? We&apos;re Here for You
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            Our support team is ready to assist you with any questions or
            concerns
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-xl sm:p-8 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: option.delay }}
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${option.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />

                {/* Icon Container */}
                <div className="relative mb-6 flex justify-center">
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${option.iconBg} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon
                      className={`h-8 w-8 ${option.iconColor} transition-all duration-500 group-hover:scale-110`}
                    />
                  </div>

                  {/* Pulse Ring */}
                  <div
                    className={`absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 rounded-2xl ${option.iconBg} opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-0`}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>

                {/* Bottom Border Animation */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r{option.color} transition-all duration-500 group-hover:w-full`}
                />
              </div>
            );
          })}
        </div>

        {/* WhatsApp CTA Card */}
        <div
          className={`mx-auto max-w-4xl transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl border-2 border-green-100 bg-linear-to-br from-green-50 via-white to-green-50 p-8 shadow-xl sm:p-12">
            {/* Decorative Elements */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-200 opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-green-300 opacity-20 blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Animated Badge */}
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-gray-700">
                  Experts Online Now
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                Chat with Our Experts
              </h3>
              <p className="mx-auto mb-8 max-w-xl text-base text-gray-600 sm:text-lg">
                Get instant answers to your investment questions on WhatsApp
              </p>

              {/* WhatsApp Button */}
              <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative z-10">
                  {" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=9601290640&text=Hello,%20I%20need%20assistance%20with%20my%20investment."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 z-0 bg-linear-to-r from-green-600 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </button>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Instant Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Expert Advisors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span>Free Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Info (Optional) */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="group text-center transition-transform duration-300 hover:scale-105">
                <Phone className="mx-auto mb-2 h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:rotate-12" />
                <p className="text-xs font-medium text-gray-600">Phone</p>
                <p className="text-sm font-bold text-gray-900">
                  +91 96012 90640
                </p>
              </div>
              <div className="group text-center transition-transform duration-300 hover:scale-105">
                <Mail className="mx-auto mb-2 h-6 w-6 text-yellow-600 transition-transform duration-300 group-hover:rotate-12" />
                <p className="text-xs font-medium text-gray-600">Email</p>
                <p className="text-sm font-bold text-gray-900">
                  support@omoney.com
                </p>
              </div>
              <div className="group text-center transition-transform duration-300 hover:scale-105">
                <Clock className="mx-auto mb-2 h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:rotate-12" />
                <p className="text-xs font-medium text-gray-600">
                  Working Hours
                </p>
                <p className="text-sm font-bold text-gray-900">
                  24/7 Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
