import { NextResponse } from "next/server";
import User from "@/app/models/user";
import connectdb from "@/connectdb/connectdb";
export const POST = async (req: Request) => {
  try {
    // Parse the request body
    const { name } = await req.json();
    console.log(name);

      // Create a new user
    await connectdb();
    const user = new User({ name });
    await user.save();

    // Log the user object
    console.log(user);

    // Set a cookie (e.g., for a session or token)
    const response = NextResponse.json({ message: "User created successfully", user });
    response.cookies.set("userName", user.name, {
      httpOnly: true, // Makes the cookie inaccessible via JavaScript
      path: "/",      // Cookie is available throughout the site
      maxAge: 60 * 60 * 24 * 7, // Cookie expires in 7 days
    });

    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "An error occurred while creating the user" }, { status: 500 });
  }
};
