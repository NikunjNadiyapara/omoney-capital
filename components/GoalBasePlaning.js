"use client";
import { useState, useEffect } from "react";
import {
  GraduationCap,
  Home,
  Plane,
  Briefcase,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function GoalBasedPlanning() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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

    const section = document.getElementById("goal-planning-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const goals = [
    {
      icon: GraduationCap,
      title: "Child Education",
      description:
        "Secure your child's future with education-focused investment plans",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      delay: "0ms",
      accentColor: "bg-blue-500",
    },
    {
      icon: Home,
      title: "Dream Home",
      description: "Plan your home purchase with systematic savings strategies",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      delay: "100ms",
      accentColor: "bg-green-500",
    },
    {
      icon: Plane,
      title: "Vacation Planning",
      description: "Save for your dream vacation with dedicated travel funds",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      delay: "200ms",
      accentColor: "bg-purple-500",
    },
    {
      icon: Briefcase,
      title: "Retirement",
      description:
        "Build a comfortable retirement corpus for your golden years",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      delay: "300ms",
      accentColor: "bg-orange-500",
    },
  ];

  return (
    <section
      id="goal-planning-section"
      className="relative overflow-hidden bg-linear-to-b from-white via-gray-50 to-white py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 h-80 w-80 rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-30">
        {/* Header */}
        <div
          className={`mb-12 text-center transition-all duration-1000 lg:mb-16 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-100 to-purple-100 px-4 py-2">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">
              Plan Your Future
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Goal-Based Financial Planning
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg">
            Set your financial goals and let us help you achieve them with
            personalized investment strategies
          </p>
        </div>

        {/* Goals Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-2xl border-2 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl sm:p-8 ${
                  hoveredCard === index
                    ? "border-transparent"
                    : "border-gray-100"
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: goal.delay }}
              >
                {/* Gradient Border on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${goal.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  style={{ padding: "2px" }}
                >
                  <div className="h-full w-full rounded-2xl bg-white"></div>
                </div>

                {/* Accent Bar */}
                <div
                  className={`absolute left-0 top-0 h-1 w-0 ${goal.accentColor} transition-all duration-500 group-hover:w-full`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${goal.bgColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}
                    >
                      <Icon
                        className={`h-8 w-8 ${goal.iconColor} transition-transform duration-500 group-hover:scale-110`}
                      />
                    </div>

                    {/* Pulse Ring */}
                    <div
                      className={`absolute left-0 top-0 h-16 w-16 rounded-2xl ${goal.bgColor} opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-0`}
                    ></div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`mb-3 text-xl font-bold transition-colors duration-300 sm:text-2xl ${
                      hoveredCard === index ? goal.iconColor : "text-gray-900"
                    }`}
                  >
                    {goal.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {goal.description}
                  </p>

                  {/* Arrow Indicator */}
                  <div className="flex items-center gap-2 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span
                      className={
                        hoveredCard === index ? goal.iconColor : "text-gray-600"
                      }
                    >
                      Learn More
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 ${
                        hoveredCard === index ? goal.iconColor : "text-gray-600"
                      }`}
                    />
                  </div>
                </div>

                {/* Background Glow */}
                <div
                  className={`absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-linear-to-br ${goal.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-linear-to-br from-white via-blue-50 to-purple-50 p-8 shadow-xl sm:p-12 lg:p-16">
            {/* Decorative Elements */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-200 opacity-30 blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-gray-700">
                  Expert Advisors Available
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                Ready to Plan Your Financial Future?
              </h3>
              <p className="mx-auto mb-8 max-w-2xl text-base text-gray-600 sm:text-lg">
                Our expert advisors will help you create a personalized roadmap
                to achieve your financial goals
              </p>

              {/* Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="group relative overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <span className="relative z-10 flex items-center gap-2">
                    Book Free Consultation
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 z-0 bg-linear-to-r from-blue-700 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>

                <button className="group rounded-xl border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-lg">
                  <span className="flex items-center gap-2">
                    Explore Goals
                    <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Personalized Plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span>Expert Advisors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
