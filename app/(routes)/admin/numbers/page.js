"use client";
import AdminLayout from "@/components/layout/AdminLayout";
import { useEffect, useState } from "react";

export default function PhoneNumberList() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetchPhoneNumbers();
  //   }, []);

  //   const fetchPhoneNumbers = async () => {
  //     try {
  //       //   const response = await fetch("/api/phone?page=1&limit=50");
  //       const response = await fetch(
  //         "/api/admin/get-all-numbers?page=1&limit=50"
  //       );

  //       const data = await response.json();

  //       if (data.success) {
  //         setPhoneNumbers(data.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching phone numbers:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (loading) return <div>Loading...</div>;

  return (
    <AdminLayout>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm text-black">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Phone Number
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Source
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* {phoneNumbers.map((phone) => (
              <tr key={phone._id}>
                <td className="px-6 py-4 font-medium">
                  {phone.countryCode} {phone.phoneNumber}
                </td>
                <td className="px-6 py-4">{phone.source}</td>
                <td className="px-6 py-4">
                  {new Date(phone.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {phone.status}
                  </span>
                </td>
              </tr>
            ))} */}

            {/* Static Ui */}
            <tr>
              <td className="px-6 py-4 font-medium">+91 9876543210</td>
              <td className="px-6 py-4">webinar</td>
              <td className="px-6 py-4">2024-06-15</td>
              <td className="px-6 py-4">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  active
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium">+91 9123456780</td>
              <td className="px-6 py-4">newsletter</td>
              <td className="px-6 py-4">2024-06-10</td>
              <td className="px-6 py-4">
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                  blocked
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
