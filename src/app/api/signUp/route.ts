import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Patient from "../schemas/patient.schema";
import dbConnect from "@/connectdb/connectdb";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { PatientInterface } from "../schemas/patient.schema";

export const POST = async (req: NextRequest) => {
    try {
        const { name, email, password }: PatientInterface = await req.json();

        // Validate required fields
        if (!name || !email || !password) {
            return NextResponse.json({
                message: "Please enter all fields",
                success: false,
                status: 400,
            });
        }

        // Connect to the database
        await dbConnect();

        // Check if the user already exists
        const existedUser = await Patient.findOne({ email });
        if (existedUser) {
            return NextResponse.json({
                message: "User already exists",
                success: false,
                status: 400,
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate JWT token using jose
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'yourSecretKey');
        const token = await new SignJWT({ email })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('1h')
            .sign(secret);

        // Create the user
        const createdUser = await Patient.create({
            name,
            email,
            password: hashedPassword,
            token,  // Save the generated token
            isComplete: false,  // Assuming the registration process is not complete yet
        });

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            status: 200,
            user: createdUser,
            token,  // Include the token in the response
        });
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false,
            status: 500,
        });
    }
};
