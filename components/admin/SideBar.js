"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Video,
  Calendar,
  Settings,
  Phone,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const tabs = [
    {
      id: "dashboard",
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    { id: "blogs", name: "Manage Blogs", href: "/admin/blogs", icon: FileText },
    { id: "videos", name: "Manage Videos", href: "/admin/videos", icon: Video },
    {
      id: "webinars",
      name: "Manage Webinars",
      href: "/admin/webinars",
      icon: Calendar,
    },
    {
      id: "numbers",
      name: "Manage Numbers",
      href: "/admin/numbers",
      icon: Phone,
    },
    {
      id: "settings",
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Omoney Admin</h1>
        <p className="text-sm text-gray-400">Control Panel</p>
      </div>

      <nav className="space-y-2 px-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon size={20} />
              {tab.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
