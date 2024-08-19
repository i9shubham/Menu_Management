import { Item } from '../models/itemModel.js';

export const createItem = async (req, res) => {
    try {
        const {
            name,
            image,
            description,
            taxApplicable,
            taxNumber,
            baseAmount,
            discount,
            totalAmount,
            category,
            subCategory,
        } = req.body;
        const newItem = new Item({
            name,
            image,
            description,
            taxApplicable,
            taxNumber,
            baseAmount,
            discount,
            totalAmount,
            category,
            subCategory,
        });
        await newItem.save();

        if (!newItem) {
            return res.status(400).json({ message: 'Item not created' });
        }

        return res.status(201).json({ message: 'Item created', data: newItem });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        if (!items) {
            return res.status(404).json({ message: 'Items not found' });
        }
        return res.status(200).json({
            message: 'Items found',
            data: items,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const getItemById = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        return res.status(200).json({
            message: 'Item found',
            data: item,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const getItemsByFilter = async (req, res) => {
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
        if (req.query.subCategory) {
            filter.$and.push({ subCategory: req.query.subCategory });
        }
        if (req.query.taxApplicable) {
            filter.$and.push({ taxApplicable: req.query.taxApplicable });
        }

        const items = await Item.find(filter);
        if (!items) {
            return res.status(404).json({ message: 'Items not found' });
        }
        return res.status(200).json({
            message: 'SubCategories found',
            data: items,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const updateItem = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            name,
            image,
            description,
            taxApplicable,
            taxNumber,
            baseAmount,
            discount,
            totalAmount,
            category,
            subCategory,
        } = req.body;
        const item = await Item.findByIdAndUpdate(
            id,
            {
                name,
                image,
                description,
                taxApplicable,
                taxNumber,
                baseAmount,
                discount,
                totalAmount,
                category,
                subCategory,
            },
            { new: true }
        );
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        return res.status(200).json({
            message: 'SubCategory updated',
            data: item,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};

export const deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        return res.status(200).json({ message: 'Item deleted' });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', error: error.message });
    }
};
