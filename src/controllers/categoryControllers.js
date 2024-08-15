import { Category } from '../models/categoryModel.js';

export const createCategory = async (req, res) => {
    try {
        const { name, image, description, taxApplicable, taxNumber, taxType } =
            req.body;
        const newCategory = new Category({
            name,
            image,
            description,
            taxApplicable,
            taxNumber,
            taxType,
        });
        await newCategory.save();

        if (!newCategory) {
            return res.status(400).json({ message: 'Category not created' });
        }

        return res
            .status(201)
            .json({ message: 'Category created', data: newCategory });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        if (!categories) {
            return res.status(404).json({ message: 'Categories not found' });
        }
        return res.status(200).json({
            message: 'Categories found',
            data: categories,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.status(200).json({
            message: 'Category found',
            data: category,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const { name, image, description, taxApplicable, taxNumber, taxType } =
            req.body;
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            { name, image, description, taxApplicable, taxNumber, taxType },
            { new: true }
        );
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.status(200).json({
            message: 'Category updated',
            data: category,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.status(200).json({ message: 'Category deleted' });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};
