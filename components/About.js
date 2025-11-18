"use client";
import { useState, useEffect } from "react";
import { CheckCircle, Award, Target, Heart, Users } from "lucide-react";

export default function AboutSection() {
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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const whyChooseUs = [
    {
      icon: CheckCircle,
      text: "AMFI Registered and SEBI Compliant",
      color: "text-blue-600",
    },
    {
      icon: CheckCircle,
      text: "Zero Commission Model - Unbiased Advice",
      color: "text-blue-600",
    },
    {
      icon: CheckCircle,
      text: "Personalized Financial Planning",
      color: "text-blue-600",
    },
    {
      icon: CheckCircle,
      text: "24/7 Customer Support",
      color: "text-blue-600",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Trusted Advisor",
      description: "AMFI registered with 10+ years of experience",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      delay: "0ms",
    },
    {
      icon: Target,
      title: "Goal-Focused",
      description: "Personalized investment strategies for your goals",
      color: "text-green-600",
      bgColor: "bg-green-50",
      delay: "100ms",
    },
    {
      icon: Heart,
      title: "Client-First",
      description: "Your financial success is our priority",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      delay: "200ms",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified financial advisors at your service",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      delay: "300ms",
    },
  ];

  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-30">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Heading */}
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              About Omoney Capital
            </h2>

            {/* Description 1 */}
            <p className="mb-6 text-base leading-relaxed text-gray-600 sm:text-lg">
              Omoney Capital is your trusted partner in wealth creation and
              financial planning. With over a decade of experience, we&apos;ve
              helped thousands of investors achieve their financial goals
              through expert guidance and personalized strategies.
            </p>

            {/* Description 2 */}
            <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
              Our mission is to democratize wealth creation by making
              professional financial advisory services accessible to everyone.
              We believe in transparency, trust, and long-term relationships
              with our clients.
            </p>

            {/* Why Choose Us Box */}
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm transition-all duration-500 hover:shadow-lg sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2"
                      style={{
                        transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateX(0)"
                          : "translateX(-20px)",
                      }}
                    >
                      <Icon
                        className={`mt-0.5 h-6 w-6 flex-shrink-0 ${item.color} transition-transform duration-300 hover:scale-110`}
                      />
                      <span className="text-sm text-gray-700 sm:text-base">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                    style={{ transitionDelay: feature.delay }}
                  >
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Icon Container */}
                    <div className="relative mb-4">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <Icon
                          className={`h-6 w-6 ${feature.color} transition-all duration-500 group-hover:scale-110`}
                        />
                      </div>

                      {/* Pulse Ring */}
                      <div
                        className={`absolute left-0 top-0 h-12 w-12 rounded-xl ${feature.bgColor} opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-0`}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors duration-300 sm:text-xl">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {feature.description}
                      </p>
                    </div>

                    {/* Bottom Border Animation */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 group-hover:w-full`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Stats Section */}
            <div
              className={`mt-6 grid grid-cols-3 gap-4 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="text-center transition-transform duration-300 hover:scale-110">
                <p className="mb-1 text-2xl font-bold text-blue-600 sm:text-3xl">
                  15K+
                </p>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Happy Clients
                </p>
              </div>
              <div className="text-center transition-transform duration-300 hover:scale-110">
                <p className="mb-1 text-2xl font-bold text-green-600 sm:text-3xl">
                  ₹500Cr+
                </p>
                <p className="text-xs text-gray-600 sm:text-sm">AUM Managed</p>
              </div>
              <div className="text-center transition-transform duration-300 hover:scale-110">
                <p className="mb-1 text-2xl font-bold text-yellow-600 sm:text-3xl">
                  10+
                </p>
                <p className="text-xs text-gray-600 sm:text-sm">Years Exp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
