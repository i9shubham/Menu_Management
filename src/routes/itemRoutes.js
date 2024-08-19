import express from 'express';
import {
    createItem,
    deleteItem,
    getAllItems,
    getItemById,
    getItemsByFilter,
    updateItem,
} from '../controllers/itemControllers.js';

const router = express.Router();

router.get('/', getAllItems);
router.get('/filters', getItemsByFilter); // search item under categories or subcategories or with filters
router.get('/:id', getItemById);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);
router.post('/', createItem);

export default router;
