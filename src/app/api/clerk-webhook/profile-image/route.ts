import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, name, image } = body;  // Receive the user info to update (name, image, etc.)

    // Update the user record in the database
    const updatedUser = await db.user.update({
      where: { clerkId: userId }, // Match by Clerk's userId
      data: { 
        name: name || undefined, // Update name if provided
        profileImage: image || undefined, // Update profileImage if provided
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update user information" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { userId } = body;

    const updatedUser = await db.user.update({
      where: { clerkId: userId },
      data: { profileImage: "" },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to remove profile image" }, { status: 500 });
  }
}

