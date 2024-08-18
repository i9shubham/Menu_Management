import express from 'express';

import categoryRoutes from './categoryRoutes.js';
import subCategoryRoutes from './subCategoryRoutes.js';

const router = express.Router();

router.use('/categories', categoryRoutes);
router.use('/subcategories', subCategoryRoutes);

export default router;
