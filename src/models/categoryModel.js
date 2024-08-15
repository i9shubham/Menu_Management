import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
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
        taxType: {
            type: String,
            enum: [
                'Direct tax',
                'Indirect tax',
                'Business tax',
                'Property and Sales Tax',
                'Capital Gains Tax',
                'Inheritance Tax',
                'Corporate Tax',
                'Customs Duty',
                'Excise Duty',
                'Value Added Tax',
                'Service Tax',
                'Sales Tax',
            ],
        },
    },
    { timestamps: true }
);

export const Category = mongoose.model('Category', categorySchema);
