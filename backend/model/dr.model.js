import mongoose from 'mongoose';

// Define the availability schema
const availabilitySchema = new mongoose.Schema({
    days: {
        type: [String],
        default: ["Monday", "Wednesday", "Friday"]
    },
    hours: {
        type: String,
        default: "11:00 AM - 3:00 PM"
    }
});

// Define the doctor schema
const drSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    years_of_experience: {
        type: Number,
        default: 8
    },
    contact_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    clinic_address: {
        type: String,
        default: "789 Skin Blvd, Sector 15, Gurgaon, HR 122001"
    },
    location: {
        city: {
            type: String,
            default: "Gurgaon"
        },
        state: {
            type: String,
            default: "Haryana"
        }
    },
    availability: {
        type: availabilitySchema,
    },
    consultation_fee: {
        type: String,
    }
});

// Create the model
const DrModel = mongoose.model('Doctors', drSchema);

export default DrModel;
