import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Appointment from "../schemas/appointment.schema";
import dbConnect from "@/connectdb/connectdb";






export const POST = async (req: NextRequest) => {


    try {
        const { id, status }: any = await req.json();
        if (!id || !status) {
            return NextResponse.json({ message: "Please enter all fields", success: false, status: 400 });
        }
        // Connect to the database
        await dbConnect();
        const updatedAppointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
        if(!updatedAppointment){
            return NextResponse.json({ message: "Appointment not found", success: false, status: 404 });
        }
        return NextResponse.json({ message: "Appointment updated successfully", success: true, status: 200, appointment: updatedAppointment });
    } catch (error: any) {
        return NextResponse.json({ message: error.message, success: false, status: 500 });



    }
}