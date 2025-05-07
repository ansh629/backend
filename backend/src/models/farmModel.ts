import mongoose, { Schema, Document } from 'mongoose';

interface IFarm extends Document {
    name: string;
    location: string;
    description: string;
    owner: string;
    vegetables: string[];
}

const farmSchema: Schema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: String, required: true },
    vegetables: { type: [String], required: true }
});

const Farm = mongoose.model<IFarm>('Farm', farmSchema);

export default Farm;