"use client";

import AdminLayout from "@/components/layout/AdminLayout";
import { Users, FileText, Video, Calendar } from "lucide-react";

export default function DashboardPage() {
  const dashboardStats = [
    {
      icon: FileText,
      label: "Published Blogs",
      value: "45",
      change: "+5",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Video,
      label: "Total Videos",
      value: "120",
      change: "+8",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Calendar,
      label: "Upcoming Webinars",
      value: "6",
      change: "+2",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <AdminLayout>
      <h2 className="mb-6 text-3xl font-bold text-gray-900">
        Dashboard Overview
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg"
            >
              <div className="mb-4 flex justify-between items-center">
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <Icon className={stat.color} size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black">{stat.value}</h3>
              <p className="text-sm text-gray-800">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </AdminLayout>
  );
}
