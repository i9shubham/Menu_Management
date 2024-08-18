import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        taxApplicable: {
            type: Boolean,
            default: false,
        },
        taxNumber: {
            type: String,
        },
        baseAmount: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            default: 0,
        },
        totalAmount: {
            type: Number,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
        subCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubCategory',
            required: true,
        },
    },
    { timestamps: true }
);

export const Item = mongoose.model('Item', itemSchema);
