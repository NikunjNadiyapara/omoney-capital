"use client";

import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Top 5 Investment Strategies",
      author: "Amit Verma",
      date: "2025-01-15",
      status: "Published",
      views: 1250,
    },
    {
      id: 2,
      title: "Understanding Market Corrections",
      author: "Sneha Patel",
      date: "2025-01-12",
      status: "Draft",
      views: 0,
    },
  ]);

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Manage Blogs</h2>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            Add New Blog
          </button>
        </div>

        <div className="rounded-xl border bg-white text-black shadow-sm">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Author</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Views</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{blog.title}</td>
                  <td className="px-6 py-4">{blog.author}</td>
                  <td className="px-6 py-4">{blog.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        blog.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{blog.views}</td>

                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
