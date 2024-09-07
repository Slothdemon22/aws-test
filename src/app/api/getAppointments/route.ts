import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Appointment from "../schemas/appointment.schema";
import dbConnect from "@/connectdb/connectdb";

export const GET = async (req: NextRequest) => {
    try {
        // Connect to the database
        await dbConnect();

        // Fetch appointments and categorize based on status
        const [pendingAppointments, completedAppointments, cancelledAppointments] = await Promise.all([
            Appointment.find({ status: "Pending" }),
            Appointment.find({ status: "Confirmed" }),
            Appointment.find({ status: "Cancelled" })
        ]);

        return NextResponse.json({
            message: "Appointments fetched successfully",
            success: true,
            status: 200,
            pendingAppointments,
            completedAppointments,
            cancelledAppointments
        });
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false,
            status: 500,
        });
    }
};
