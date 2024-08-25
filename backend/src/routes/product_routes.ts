import express from 'express';
import * as productController from '@controllers/product_controller';

const router = express.Router();

router.get('/', productController.findAll);

export default router;
