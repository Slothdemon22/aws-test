import mongoose, { Schema, Document, model, models } from 'mongoose';

// Define the interface representing a document in MongoDB.
export interface PatientInterface extends Document {
    name: string;
    email: string;
    password: string;
    token?: string; // Make token optional
    patientDetails?: mongoose.Schema.Types.ObjectId;
    isComplete: boolean;
}

// Create the schema corresponding to the interface.
const patientSchema: Schema<PatientInterface> = new Schema({
    // Login info
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    token: {
        type: String,
        // No `required` field makes token optional
    },
    patientDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Details",
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
    
});

// Check if the model already exists, otherwise create it.
const Patient = models.Patient || model<PatientInterface>('Patient', patientSchema);

export default Patient;
