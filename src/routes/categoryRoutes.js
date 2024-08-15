import express from 'express';
import {
    createCategory,
    deleteCategory,
    getCategories,
    getCategoryById,
    updateCategory,
} from '../controllers/categoryControllers.js';

const router = express.Router();

router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);
router.get('/', getCategories);
router.post('/', createCategory);

export default router;
