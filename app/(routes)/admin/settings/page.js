"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    companyEmail: "info@omoneycapital.com",
    companyPhone: "+91 98765 43210",
    companyAddress: "123 Finance Street, Mumbai",
    totalInvestors: "15000",
    totalAUM: "500",
    totalSIPs: "8500",
  });

  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold mb-6 text-black">Company Settings</h2>

      <div className="border bg-white p-8 rounded-xl shadow text-black">
        <div className="space-y-6">
          <div>
            <label>Email</label>
            <input
              type="email"
              value={settings.companyEmail}
              onChange={(e) =>
                setSettings({ ...settings, companyEmail: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              type="text"
              value={settings.companyPhone}
              onChange={(e) =>
                setSettings({ ...settings, companyPhone: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label>Address</label>
            <textarea
              rows={3}
              value={settings.companyAddress}
              onChange={(e) =>
                setSettings({ ...settings, companyAddress: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label>Total Investors</label>
              <input
                type="text"
                value={settings.totalInvestors}
                onChange={(e) =>
                  setSettings({ ...settings, totalInvestors: e.target.value })
                }
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label>Total AUM (Cr)</label>
              <input
                type="text"
                value={settings.totalAUM}
                onChange={(e) =>
                  setSettings({ ...settings, totalAUM: e.target.value })
                }
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label>Total SIPs</label>
              <input
                type="text"
                value={settings.totalSIPs}
                onChange={(e) =>
                  setSettings({ ...settings, totalSIPs: e.target.value })
                }
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg">
            <Save size={20} />
            Save Settings
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
