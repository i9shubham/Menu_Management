import { SubCategory } from '../models/subCategoryModel.js';

export const createSubCategory = async (req, res) => {
    try {
        const { name, image, description, taxApplicable, taxNumber, category } =
            req.body;
        const newSubCategory = new SubCategory({
            name,
            image,
            description,
            taxApplicable,
            taxNumber,
            category,
        });
        await newSubCategory.save();

        if (!newSubCategory) {
            return res.status(400).json({ message: 'SubCategory not created' });
        }

        return res
            .status(201)
            .json({ message: 'SubCategory created', data: newSubCategory });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        if (!subCategories) {
            return res.status(404).json({ message: 'SubCategories not found' });
        }
        return res.status(200).json({
            message: 'SubCategories found',
            data: subCategories,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const getSubCategoryById = async (req, res) => {
    try {
        const id = req.params.id;
        const subCategory = await SubCategory.findById(id);
        if (!subCategory) {
            return res.status(404).json({ message: 'SubCategory not found' });
        }
        return res.status(200).json({
            message: 'SubCategory found',
            data: subCategory,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const getSubCategoriesByFilter = async (req, res) => {
    try {
        let filter = {
            $and: [],
        };
        if (req.query.id) {
            filter.$and.push({ _id: req.query.id });
        }
        if (req.query.name) {
            filter.$and.push({ name: req.query.name });
        }
        if (req.query.taxNumber) {
            filter.$and.push({ taxNumber: req.query.taxNumber });
        }
        if (req.query.category) {
            filter.$and.push({ category: req.query.category });
        }
        if (req.query.taxApplicable) {
            filter.$and.push({ taxApplicable: req.query.taxApplicable });
        }

        const subCategories = await SubCategory.find(filter);
        if (!subCategories) {
            return res.status(404).json({ message: 'SubCategories not found' });
        }
        return res.status(200).json({
            message: 'SubCategories found',
            data: subCategories,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const updateSubCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, image, description, taxApplicable, taxNumber, category } =
            req.body;
        const subCategory = await SubCategory.findByIdAndUpdate(
            id,
            { name, image, description, taxApplicable, taxNumber, category },
            { new: true }
        );
        if (!subCategory) {
            return res.status(404).json({ message: 'SubCategory not found' });
        }
        return res.status(200).json({
            message: 'SubCategory updated',
            data: subCategory,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const deleteSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
        if (!subCategory) {
            return res.status(404).json({ message: 'SubCategory not found' });
        }
        return res.status(200).json({ message: 'SubCategory deleted' });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};