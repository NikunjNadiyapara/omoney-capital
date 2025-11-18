"use client";
import { useState, useEffect } from "react";
import {
  Shield,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  X,
  Calendar,
  Clock,
} from "lucide-react";

export default function HeroSection() {
  const [showWebinarBanner, setShowWebinarBanner] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  // Webinar data - set hasActiveWebinar to true when there's a live webinar
  const webinarData = {
    hasActiveWebinar: true,
    title: "Master SIP Investment Strategy",
    date: "Nov 25, 2025",
    time: "7:00 PM IST",
    registeredCount: 2847,
  };

  const stats = [
    {
      icon: Users,
      label: "Happy Investors",
      value: "15K+",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      label: "AUM Managed",
      value: "₹500Cr+",
      color: "text-green-600",
    },
    {
      icon: Award,
      label: "Secure & Safe",
      value: "100%",
      color: "text-yellow-600",
    },
  ];

  return (
    <section
      id="home"
      className="relative bg-linear-to-br from-gray-50 to-blue-50"
    >
      {/* Webinar Banner - Shows when active */}
      {webinarData.hasActiveWebinar && showWebinarBanner && (
        <div className="relative animate-slideDown bg-linear-to-r from-blue-600 to-blue-700 text-white">
          <div className="mx-auto max-w-9xl px-4 py-3 sm:px-6 lg:px-30">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 animate-pulse items-center justify-center rounded-full bg-white/20">
                    <Calendar size={16} />
                  </div>
                  <span className="text-xs font-medium sm:text-sm">
                    UPCOMING WEBINAR
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold sm:text-base">
                    {webinarData.title}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center justify-center gap-3 text-xs text-blue-100 sm:justify-start">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {webinarData.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {webinarData.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} /> {webinarData.registeredCount}{" "}
                      registered
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-lg transition-all hover:scale-105 hover:bg-blue-50 hover:shadow-xl sm:px-6">
                  Join Free Webinar{" "}
                  <ArrowRight className="ml-1 inline" size={16} />
                </button>
                <button
                  onClick={() => setShowWebinarBanner(false)}
                  className="rounded-full p-1 hover:bg-white/20"
                  aria-label="Close banner"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="mx-auto max-w-9xl px-4 py-12 sm:px-6 lg:px-30 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition-transform hover:scale-105">
              <Shield size={18} className="animate-pulse" />
              AMFI Registered & Certified
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your Trusted Partner in{" "}
              <span className="animate-gradient bg-linear-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent bg-size-[200%_auto]">
                Financial Growth
              </span>
            </h1>

            {/* Description */}
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Build wealth with expert guidance on mutual funds, SIP, insurance,
              and tax planning. Start your investment journey with Omoney
              Capital today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-lg">
                Join Free Webinar
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </button>
              <button className="rounded-lg border-2 border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 transition-all hover:scale-105 hover:bg-blue-50">
                Start SIP Now
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center transition-transform hover:scale-110 sm:text-left"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                    }}
                  >
                    <div className="mb-2 flex justify-center sm:justify-start">
                      <Icon
                        className={`${stat.color} animate-float`}
                        size={24}
                      />
                    </div>
                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Main Card */}
            <div className="relative w-full max-w-md rounded-3xl bg-linear-to-br from-blue-100 via-teal-50 to-yellow-50 p-10 shadow-2xl transition-transform hover:scale-105">
              {/* Returns Badge */}
              <div className="absolute -top-4 right-8 animate-float rounded-xl bg-white px-6 py-3 shadow-lg transition-transform hover:scale-110">
                <p className="text-xs font-medium text-gray-600">Returns</p>
                <p className="text-2xl font-bold text-green-600">+24.5%</p>
              </div>

              {/* Center Icon */}
              <div className="mx-auto mb-6 mt-8 flex h-24 w-24 animate-pulse-slow items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-teal-500 shadow-xl">
                <TrendingUp
                  className="animate-bounce-slow text-white"
                  size={48}
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-center text-2xl font-bold text-gray-900">
                Start Investing Today
              </h3>
              <p className="mb-6 text-center text-gray-600">
                Expert financial guidance for your wealth creation journey
              </p>

              {/* Daily SIPs Badge */}
              <div
                className="absolute -bottom-4 left-8 animate-float rounded-xl bg-white px-6 py-3 shadow-lg transition-transform hover:scale-110"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="text-xs font-medium text-gray-600">Daily SIPs</p>
                <p className="text-2xl font-bold text-blue-600">850+</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 h-full w-full">
              <div className="absolute left-0 top-1/4 h-32 w-32 animate-pulse-slow rounded-full bg-blue-200 opacity-40 blur-3xl"></div>
              <div
                className="absolute bottom-1/4 right-0 h-40 w-40 animate-pulse-slow rounded-full bg-teal-200 opacity-40 blur-3xl"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  );
}
