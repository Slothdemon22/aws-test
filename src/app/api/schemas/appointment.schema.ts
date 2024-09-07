import mongoose, { Schema, Document, model, models } from 'mongoose';

// Define the interface for the Appointment document
export interface AppointmentInterface extends Document {
    patient: mongoose.Schema.Types.ObjectId;
    doctorName: string;
    datetime: Date; // Combined date and time
    appointmentReasons: string;
    comments?: string;
    status: "Pending" | "Confirmed" | "Cancelled"; // Optional with default
}

// Create the schema corresponding to the interface
const appointmentSchema: Schema<AppointmentInterface> = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
    },
    doctorName: {
        type: String,
        required: [true, "Doctor name is required"],
    },
    datetime: {
        type: Date,
        required: [true, "Date and time are required"], // Combined field
    },
    appointmentReasons: {
        type: String,
        required: [true, "Appointment reasons are required"],
    },
    comments: {
        type: String,
        default: "", // Optional
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Cancelled"],
        default: "Pending",
    },
});

// Create and export the model
const Appointment = models.Appointment || model<AppointmentInterface>('Appointment', appointmentSchema);

export default Appointment;
