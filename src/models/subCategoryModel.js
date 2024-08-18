import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema(
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
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
    },
    { timestamps: true }
);

export const SubCategory = mongoose.model('SubCategory', subCategorySchema);
