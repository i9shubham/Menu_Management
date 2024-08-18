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
router.get('/:id', getSubCategoryById);
router.put('/:id', updateSubCategory);
router.delete('/:id', deleteSubCategory);
router.get('/filters', getSubCategoriesByFilter);
router.post('/', createSubCategory);


export default router;