import express from 'express';
import {
    createSubCategory,
    deleteSubCategory,
    getAllSubCategories,
    getSubCategoriesByFilter,
    getSubCategoryById,
    updateSubCategory,
} from '../controllers/subCategoryControllers.js';

const router = express.Router();

router.get('/', getAllSubCategories);
router.get('/filters', getSubCategoriesByFilter); //search under categories or other filters
router.get('/:id', getSubCategoryById);
router.put('/:id', updateSubCategory);
router.delete('/:id', deleteSubCategory);
router.post('/', createSubCategory);


export default router;