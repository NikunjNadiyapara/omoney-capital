"use client";
import { useState, useEffect, useRef } from "react";
import { Users, Video, TrendingUp, Award } from "lucide-react";

export default function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    investors: 0,
    webinars: 0,
    sips: 0,
    years: 0,
  });

  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateNumbers = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      investors: 15000,
      webinars: 250,
      sips: 8500,
      years: 10,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        investors: Math.floor(targets.investors * progress),
        webinars: Math.floor(targets.webinars * progress),
        sips: Math.floor(targets.sips * progress),
        years: Math.floor(targets.years * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);
  };

  const stats = [
    {
      icon: Users,
      count: counts.investors.toLocaleString(),
      label: "Happy Investors",
      color: "from-blue-400 to-blue-500",
      delay: "0ms",
    },
    {
      icon: Video,
      count: counts.webinars.toLocaleString(),
      label: "Webinars Hosted",
      color: "from-blue-300 to-blue-400",
      delay: "100ms",
    },
    {
      icon: TrendingUp,
      count: counts.sips.toLocaleString(),
      label: "Active SIPs",
      color: "from-blue-400 to-blue-500",
      delay: "200ms",
    },
    {
      icon: Award,
      count: `${counts.years}+`,
      label: "Years of Excellence",
      color: "from-blue-300 to-blue-400",
      delay: "300ms",
    },
  ];

  return (
    <section className="relative w-screen overflow-x-hidden bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 py-16 sm:py-20 lg:py-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-9xl px-4 sm:px-6 lg:px-30">
        {/* Header */}
        <div
          className={`mb-12 text-center transition-all duration-1000 lg:mb-16 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Impact in Numbers
          </h2>
          <p className="mx-auto max-w-2xl text-base text-blue-100 sm:text-lg">
            Trusted by thousands of investors across India
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:bg-white/15 hover:shadow-2xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: stat.delay }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Icon Container */}
                <div className="relative mb-6 flex justify-center">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30">
                    <Icon className="h-10 w-10 text-white transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Pulse Ring */}
                  <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rounded-full bg-white/20 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-0"></div>
                </div>

                {/* Count */}
                <div className="relative mb-2 text-center">
                  <h3 className="text-4xl font-bold text-white transition-all duration-300 group-hover:scale-110 sm:text-5xl">
                    {stat.count}
                  </h3>
                </div>

                {/* Label */}
                <p className="relative text-center text-sm font-medium text-blue-100 sm:text-base">
                  {stat.label}
                </p>

                {/* Bottom Glow Effect */}
                <div
                  className={`absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-linear-to-br ${stat.color} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-50`}
                ></div>

                {/* Top Border Animation */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-linear-to-r from-white/50 to-white/80 transition-all duration-500 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md">
            {/* <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-white bg-linear-to-br from-blue-400 to-blue-600"></div>
              <div className="h-8 w-8 rounded-full border-2 border-white bg-linear-to-br from-green-400 to-green-600"></div>
              <div className="h-8 w-8 rounded-full border-2 border-white bg-linear-to-br from-purple-400 to-purple-600"></div>
            </div> */}
            <span className="text-sm font-semibold text-white">
              Join 15,000+ Happy Investors Today
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
