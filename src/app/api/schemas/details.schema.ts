import mongoose, { Schema, Document, model, models } from 'mongoose';

// 1. Define the interface representing a document in MongoDB.
export interface DetailInterface extends Document {
    dateOfBirth: Date;
    address: string;
    phoneNumber: string;
    allergies?: string;
    gender: 'Male' | 'Female' | 'Other';
    bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    medicalHistory?: string;
    currentMedications?: string;
    identificationNo: string;
    image: string;
    appointments?: mongoose.Schema.Types.ObjectId[];  // Array to reference multiple appointments
    
}

// 2. Create the schema corresponding to the interface.
const Detail: Schema<DetailInterface> = new Schema({
    // Personal info
    dateOfBirth: {
        type: Date,
        required: [true, "Date of birth is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{10,15}$/, "Phone number must be between 10 and 15 digits"],
    },
    // Medical info
    allergies: {
        type: String,
        default: "",  // Set default if not provided
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: [true, "Gender is required"],
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: [true, "Blood group is required"],
    },
    medicalHistory: {
        type: String,
        default: "",  // Set default if not provided
    },
    currentMedications: {
        type: String,
        default: "",  // Set default if not provided
    },
    // Identification info
    identificationNo: {
        type: String,
        required: [true, "Identification number is required"],
    },
    image: {
        type: String,
        required: [true, "Identification document image is required"],
    },
    // Appointment info
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
    }],
   
});

// 3. Check if the model already exists, otherwise create it.
const Details = models.Details || model<DetailInterface>('Details', Detail);
export default Details;
