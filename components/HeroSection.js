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
import OpenDematAccountPopUp from "./OpenDematAccountPopUp";

export default function HeroSection() {
  const [showWebinarBanner, setShowWebinarBanner] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpenAccountPopUp, setIsOpenAccountPopUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
      className="relative bg-linear-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      {webinarData.hasActiveWebinar && showWebinarBanner && isVisible && (
        <div className="relative bg-linear-to-r from-blue-600 to-blue-700 text-white">
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
                <button className=" rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-xl sm:px-6">
                  Join Free Webinar{" "}
                  <ArrowRight className="ml-1 inline" size={16} />
                </button>
                <button
                  onClick={() => setShowWebinarBanner(false)}
                  className="rounded-full p-1 transition-colors hover:bg-white/20"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-9xl px-4 py-12 sm:px-6 lg:px-30 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition-transform duration-300 hover:scale-105">
              <Shield size={18} className="animate-pulse" />
              AMFI Registered & Certified
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your Trusted Partner in{" "}
              <span className="bg-linear-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                Financial Growth
              </span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Build wealth with expert guidance on mutual funds, SIP, insurance,
              and tax planning. Start your investment journey with Omoney
              Capital today.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg">
                Join Free Webinar{" "}
                <ArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </button>
              <button
                onClick={() => setIsOpenAccountPopUp(true)}
                className="rounded-lg border-2 border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
              >
                Start SIP Now
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center transition-all duration-500 hover:scale-110 sm:text-left"
                  >
                    <div className="mb-2 flex justify-center sm:justify-start">
                      <Icon className={stat.color} size={24} />
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

          <div
            className={`relative flex items-center justify-center transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative w-full max-w-md rounded-3xl bg-linear-to-br from-blue-100 via-teal-50 to-yellow-50 p-8 shadow-2xl transition-transform duration-500 hover:scale-105">
              <div className="absolute -top-4 right-8 rounded-xl bg-white px-6 py-3 shadow-lg transition-all duration-500 hover:scale-110 hover:-translate-y-1">
                <p className="text-xs font-medium text-gray-600">Returns</p>
                <p className="text-2xl font-bold text-green-600">+24.5%</p>
              </div>

              <div className="mx-auto mb-6 mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-teal-500 shadow-xl animate-pulse">
                <TrendingUp className="text-white" size={48} />
              </div>

              <h3 className="mb-3 text-center text-2xl font-bold text-gray-900">
                Start Investing Today
              </h3>
              <p className="mb-6 text-center text-gray-600">
                Expert financial guidance for your wealth creation journey
              </p>

              <div className="absolute -bottom-4 left-8 rounded-xl bg-white px-6 py-3 shadow-lg transition-all duration-500 hover:scale-110 hover:-translate-y-1">
                <p className="text-xs font-medium text-gray-600">Daily SIPs</p>
                <p className="text-2xl font-bold text-blue-600">850+</p>
              </div>
            </div>

            <div className="absolute -z-10 h-full w-full pointer-events-none">
              <div className="absolute left-0 top-1/4 h-32 w-32 rounded-full bg-blue-200 opacity-40 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-0 h-40 w-40 rounded-full bg-teal-200 opacity-40 blur-3xl animate-pulse"></div>
            </div>
          </div>
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
