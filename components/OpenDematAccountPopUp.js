"use client";
import { useForm } from "react-hook-form";

export default function OpenDematAccountPopUp({ open, onClose }) {
  const { register, handleSubmit } = useForm();

  if (!open) return null;

  const onSubmitNumber = (data) => {
    console.log("Submitted phone number:", data.phone);
    alert(`Submitted phone number: ${data.phone}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-center mb-4 text-black">
          Enter Your Mobile Number
        </h2>

        <form onSubmit={handleSubmit(onSubmitNumber)} className="space-y-4">
          <input
            type="tel"
            {...register("phone", { required: true })}
            placeholder="Enter number"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
