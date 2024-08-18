import express from 'express';

import categoryRoutes from './categoryRoutes.js';
import subCategoryRoutes from './subCategoryRoutes.js';
import itemRoutes from './itemRoutes.js';

const router = express.Router();

router.use('/categories', categoryRoutes);
router.use('/subcategories', subCategoryRoutes);
router.use('/items', itemRoutes);

export default router;
