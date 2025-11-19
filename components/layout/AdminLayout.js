"use client";

import Sidebar from "../admin/SideBar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="ml-64 p-8 w-full">{children}</main>
    </div>
  );
}
