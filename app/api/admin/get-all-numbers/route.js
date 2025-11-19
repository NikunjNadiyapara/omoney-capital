import PhoneNumber from "@/models/PhoneNumber";

export async function GET(request) {
  try {
    await connectDB();

    // Add authentication check here
    // const session = await getServerSession(authOptions);
    // if (!session || session.user.role !== 'admin') {
    //   return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    // }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const source = searchParams.get("source");

    const query = source ? { source } : {};
    const skip = (page - 1) * limit;

    const phoneNumbers = await PhoneNumber.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await PhoneNumber.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: phoneNumbers,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching phone numbers:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
