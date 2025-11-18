"use client";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Users,
  Play,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Video,
  Sparkles,
  Eye,
  ChevronRight,
} from "lucide-react";

export default function ContentSections() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeWebinarTab, setActiveWebinarTab] = useState("live");

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 1.2;
      if (window.scrollY + triggerPoint > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Webinar Data
  const liveWebinars = [
    {
      title: "Master SIP Investment Strategy",
      date: "Nov 25, 2025",
      time: "7:00 PM IST",
      registered: 2847,
      status: "live",
      speaker: "Rajesh Kumar",
      topic: "Investment Strategies",
    },
    {
      title: "Tax Planning for 2025-26",
      date: "Nov 28, 2025",
      time: "6:00 PM IST",
      registered: 1543,
      status: "upcoming",
      speaker: "Priya Sharma",
      topic: "Tax Planning",
    },
  ];

  const pastWebinars = [
    {
      title: "Mutual Funds Masterclass",
      date: "Nov 10, 2025",
      views: 5234,
      duration: "45 min",
    },
    {
      title: "Retirement Planning Guide",
      date: "Nov 5, 2025",
      views: 4128,
      duration: "50 min",
    },
    {
      title: "Understanding Market Volatility",
      date: "Oct 28, 2025",
      views: 3876,
      duration: "40 min",
    },
  ];

  // Educational Videos
  const videos = [
    {
      title: "What is SIP? Complete Guide",
      thumbnail: "bg-gradient-to-br from-blue-400 to-blue-600",
      duration: "12:45",
      views: "15K",
      category: "Beginner",
    },
    {
      title: "How to Choose Mutual Funds",
      thumbnail: "bg-gradient-to-br from-green-400 to-green-600",
      duration: "18:30",
      views: "12K",
      category: "Intermediate",
    },
    {
      title: "Portfolio Diversification Tips",
      thumbnail: "bg-gradient-to-br from-purple-400 to-purple-600",
      duration: "15:20",
      views: "10K",
      category: "Advanced",
    },
    {
      title: "Tax Saving Investments",
      thumbnail: "bg-gradient-to-br from-orange-400 to-orange-600",
      duration: "14:10",
      views: "18K",
      category: "Expert",
    },
  ];

  // Blog Data
  const blogs = [
    {
      title: "Top 5 Investment Strategies for 2025",
      excerpt:
        "Discover the most effective investment strategies to maximize your returns in the current market scenario.",
      author: "Amit Verma",
      date: "Nov 15, 2025",
      category: "Investment",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      title: "Understanding Market Corrections",
      excerpt:
        "Learn how to navigate market corrections and turn them into opportunities for wealth creation.",
      author: "Sneha Patel",
      date: "Nov 12, 2025",
      category: "Market Analysis",
      image: "bg-gradient-to-br from-green-400 to-green-600",
    },
    {
      title: "SIP vs Lump Sum: Which is Better?",
      excerpt:
        "A comprehensive comparison to help you decide the best investment approach for your goals.",
      author: "Karan Singh",
      date: "Nov 8, 2025",
      category: "Planning",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: WEBINARS */}
      <section
        id="webinars"
        className="bg-linear-to-b from-white via-blue-50 to-white py-16 sm:py-20 lg:py-24"
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
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-red-100 to-orange-100 px-4 py-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
              <span className="text-sm font-semibold text-gray-700">
                Live & Upcoming
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Join Our Webinars
            </h2>
            <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg">
              Learn from industry experts and stay updated with the latest
              investment strategies
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex justify-center gap-4">
            <button
              onClick={() => setActiveWebinarTab("live")}
              className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
                activeWebinarTab === "live"
                  ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Live & Upcoming
            </button>
            <button
              onClick={() => setActiveWebinarTab("past")}
              className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
                activeWebinarTab === "past"
                  ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Past Webinars
            </button>
          </div>

          {/* Live/Upcoming Webinars */}
          {activeWebinarTab === "live" && (
            <div className="grid gap-6 sm:grid-cols-2">
              {liveWebinars.map((webinar, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl sm:p-8"
                >
                  {/* Status Badge */}
                  <div className="absolute right-4 top-4">
                    {webinar.status === "live" ? (
                      <span className="flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-red-600"></div>
                        LIVE
                      </span>
                    ) : (
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600">
                        UPCOMING
                      </span>
                    )}
                  </div>

                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-100 to-blue-200">
                    <Video className="h-7 w-7 text-blue-600" />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                    {webinar.title}
                  </h3>

                  <div className="mb-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>{webinar.registered} registered</span>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center gap-4 text-sm">
                    <span className="font-medium text-gray-900">
                      {webinar.speaker}
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                      {webinar.topic}
                    </span>
                  </div>

                  <button className="group/btn w-full rounded-xl bg-linear-to-r from-blue-600 to-blue-700 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    {webinar.status === "live" ? "Join Now" : "Register Free"}
                    <ArrowRight className="ml-2 inline h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Past Webinars */}
          {activeWebinarTab === "past" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastWebinars.map((webinar, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-48 bg-linear-to-br from-gray-700 to-gray-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-lg bg-black/70 px-2 py-1 text-xs font-semibold text-white">
                      {webinar.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-lg font-bold text-gray-900">
                      {webinar.title}
                    </h3>
                    <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
                      <span>{webinar.date}</span>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{webinar.views}</span>
                      </div>
                    </div>
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-blue-600 py-2 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50">
                      Watch Recording
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: EDUCATIONAL VIDEOS */}
      <section
        id="educational-videos"
        className="bg-linear-to-b from-white via-green-50 to-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-30">
          <div
            className={`mb-12 text-center transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-green-100 to-blue-100 px-4 py-2">
              <Play className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">
                Learn & Grow
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Educational Videos
            </h2>
            <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg">
              Master the art of investing with our comprehensive video tutorials
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Thumbnail */}
                <div className={`relative h-48 ${video.thumbnail}`}>
                  <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:scale-125 group-hover:bg-white">
                      <Play className="h-8 w-8 fill-blue-600 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 rounded-lg bg-black/70 px-2 py-1 text-xs font-semibold text-white">
                    {video.duration}
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-900">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views} views</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-green-600 to-green-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              View All Videos
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: LATEST BLOGS */}
      <section
        id="latest-blogs"
        className="bg-linear-to-b from-white via-purple-50 to-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-30">
          <div
            className={`mb-12 text-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-100 to-pink-100 px-4 py-2">
              <BookOpen className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">
                Stay Updated
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Latest Financial Insights
            </h2>
            <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg">
              Expert analysis and actionable insights to help you make informed
              investment decisions
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className={`relative h-56 ${blog.image}`}>
                  <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/30"></div>
                  <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-900">
                    {blog.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-white px-6 py-3 font-semibold text-gray-900 shadow-lg">
                      Read Article
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-purple-600">
                    {blog.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {blog.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-600">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {blog.author}
                      </p>
                      <p className="text-xs">{blog.date}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Border Animation */}
                <div className="h-1 w-0 bg-linear-to-r from-purple-600 to-pink-600 transition-all duration-500 group-hover:w-full"></div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-purple-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              View All Articles
              <TrendingUp className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
