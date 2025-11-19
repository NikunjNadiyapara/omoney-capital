"use client";

import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

export default function WebinarsPage() {
  const [webinars, setWebinars] = useState([
    {
      id: 1,
      title: "Master SIP Strategy",
      date: "2025-01-25",
      time: "7:00 PM",
      registered: 2847,
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Tax Planning 2025",
      date: "2025-01-28",
      time: "6:00 PM",
      registered: 1543,
      status: "Upcoming",
    },
  ]);

  return (
    <AdminLayout>
      <div className="flex justify-between mb-6 text-black">
        <h2 className="text-3xl font-bold">Manage Webinars</h2>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={20} />
          Add New Webinar
        </button>
      </div>

      <div className="space-y-4">
        {webinars.map((webinar) => (
          <div
            key={webinar.id}
            className="border rounded-xl bg-white p-6 shadow-sm hover:shadow-lg"
          >
            <div className="flex justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-black">
                    {webinar.title}
                  </h3>
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                    {webinar.status}
                  </span>
                </div>

                <div className="flex gap-6 text-sm text-gray-600">
                  <span>📅 {webinar.date}</span>
                  <span>🕐 {webinar.time}</span>
                  <span>👥 {webinar.registered} registered</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Edit size={18} />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
