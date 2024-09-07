import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Appointment from "../schemas/appointment.schema";
import dbConnect from "@/connectdb/connectdb";
import { AppointmentInterface } from "../schemas/appointment.schema";
import { Resend } from 'resend';
import EmailTemplate from "@/comp/EmailTemplate";
import Patient from "../schemas/patient.schema";

const resend = new Resend("re_7Efe9VUV_MNJcunLJG7kQycruNAhgf6RU");

export const POST = async (req: NextRequest) => {
    try {
        const { patient, doctorName, datetime, appointmentReasons, comments }: AppointmentInterface = await req.json();

        // Validate required fields
        if (!patient || !doctorName || !datetime || !appointmentReasons) {
            return NextResponse.json({
                message: "Please provide all required fields",
                success: false,
                status: 400,
            });
        }

        // Connect to the database
        await dbConnect();

        // Create the appointment
        const createdAppointment = await Appointment.create({
            patient,
            doctorName,
            datetime,
            appointmentReasons,
            comments, // This field is optional and will only be included if provided
            status: "Pending",
        });
        console.log(patient)
        const user =await  Patient.findById(patient);
        console.log(user)

       console.log(user.email)
        const { data, error } = await resend.emails.send({
            from: 'noReply@tradenexusonline.com',
            to: [user.email], // Assuming patient object has an email field
            subject: 'Appointment Confirmation',
            react: EmailTemplate({ 
                firstName: user.name,  // Replace 'userName' with the actual key from your user object
                doctorName,
                datetime,
                status: createdAppointment.status
            }),
            
        });

        if (error) {
            return NextResponse.json({
                message: "Appointment created, but failed to send confirmation email",
                emailError: error,
                success: false,
                status: 500,
            });
        }

        return NextResponse.json({
            message: "Appointment created successfully and confirmation email sent",
            success: true,
            status: 200,
            appointment: createdAppointment,
            //emailResponse: data,
        });
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false,
            status: 500,
        });
    }
};
