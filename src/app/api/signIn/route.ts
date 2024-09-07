import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Patient from "../schemas/patient.schema";
import dbConnect from "@/connectdb/connectdb";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

export const POST = async (req: NextRequest) => {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({
                message: "Please enter all fields",
                success: false,
                status: 400,
            });
        }

        await dbConnect();

        const user = await Patient.findOne({ email });
        if (!user) {
            return NextResponse.json({
                message: "User not found",
                success: false,
                status: 404,
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({
                message: "Invalid credentials",
                success: false,
                status: 401,
            });
        }

        // Create and sign the JWT using jose
        const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY!); // Replace "basil" with your actual secret key
        const token = await new SignJWT({ id: user._id, email })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("1h") // Token expires in 1 hour
            .sign(secret);

        // Set token in cookies
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            status: 200,
        });
        response.cookies.set('token', token, {
            httpOnly: true, // Helps prevent XSS attacks
            // secure: process.env.NODE_ENV === 'production', // Ensures cookie is sent over HTTPS in production
            maxAge: 3600, // 1 hour
            path: '/',
        });

        return response;

    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json({
            message: "Internal server error",
            success: false,
            status: 500,
        });
    }
};
