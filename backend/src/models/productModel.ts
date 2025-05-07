import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    quantity: number;
    farmId: string; // Reference to the farm
    createdAt: Date;
    updatedAt: Date;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    farmId: { type: Schema.Types.ObjectId, ref: 'Farm', required: true },
}, {
    timestamps: true,
});

export const Product = mongoose.model<IProduct>('Product', productSchema);