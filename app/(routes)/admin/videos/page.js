"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

export default function VideosPage() {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "What is SIP?",
      duration: "12:45",
      views: 15000,
      status: "Active",
    },
    {
      id: 2,
      title: "How to Choose Mutual Funds",
      duration: "18:30",
      views: 12000,
      status: "Active",
    },
  ]);

  return (
    <AdminLayout>
      <div className="flex justify-between mb-6 text-black">
        <h2 className="text-3xl font-bold">Manage Videos</h2>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={20} />
          Add New Video
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="border rounded-xl bg-white p-6 shadow hover:shadow-lg"
          >
            <div className="flex justify-between mb-3">
              <div className="flex gap-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Edit size={18} />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <h3 className="font-bold text-lg text-black">{video.title}</h3>

            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>{video.duration}</span>
              {/* <span className="flex items-center gap-1">
                <Eye size={16} />
                {video.views.toLocaleString()}
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
