import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Details from "../schemas/details.schema";
import dbConnect from "@/connectdb/connectdb";
import { DetailInterface } from "../schemas/details.schema";

export const POST = async (req: NextRequest) => {
    try {
        const body: DetailInterface = await req.json();

        

        // Create an object dynamically based on the presence of optional fields
        const detailedUserData: Partial<DetailInterface> = {
            dateOfBirth: body.dateOfBirth,
            address: body.address,
            phoneNumber: body.phoneNumber,
            gender: body.gender,
            bloodGroup: body.bloodGroup,
            identificationNo: body.identificationNo,
            image: body.image,
        };

        // Conditionally add optional fields if they are present
        if (body.allergies) {
            detailedUserData.allergies = body.allergies;
        }
        if (body.medicalHistory) {
            detailedUserData.medicalHistory = body.medicalHistory;
        }
        if (body.currentMedications) {
            detailedUserData.currentMedications = body.currentMedications;
        }
        if (body.appointments) {
            detailedUserData.appointments = body.appointments;
        }
        await dbConnect();
        // Create the detailed user in the database
        const createdDetailedUser = await Details.create(detailedUserData);

        return NextResponse.json({
            message: "Detailed user created successfully",
            success: true,
            status: 200,
            data: createdDetailedUser,
        });

    } catch (error: any) {
        return NextResponse.json({
            message: "Internal Server Error",
            success: false,
            status: 500,
            error: error.message,
        });
    }
};
