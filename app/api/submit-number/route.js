import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import PhoneNumber from "@/models/PhoneNumber";

// POST - Add new phone number
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { phoneNumber, source } = body;

    // Validate phone number
    if (!phoneNumber) {
      return NextResponse.json(
        { success: false, message: "Phone number is required" },
        { status: 400 }
      );
    }

    // Remove any spaces or special characters
    const cleanNumber = phoneNumber.replace(/\s|-|\(|\)/g, "");

    // Check if number already exists
    const existingNumber = await PhoneNumber.findOne({
      phoneNumber: cleanNumber,
    });

    if (existingNumber) {
      return NextResponse.json(
        { success: false, message: "Phone number already registered" },
        { status: 409 }
      );
    }

    // Create new phone number entry
    const newPhoneNumber = await PhoneNumber.create({
      phoneNumber: cleanNumber,
      source: source || "general",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Phone number registered successfully",
        data: {
          id: newPhoneNumber._id,
          phoneNumber: newPhoneNumber.phoneNumber,
          createdAt: newPhoneNumber.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving phone number:", error);

    if (error.name === "ValidationError") {
      return NextResponse.json(
        { success: false, message: "Invalid phone number format" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
