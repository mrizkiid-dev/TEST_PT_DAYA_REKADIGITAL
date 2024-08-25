import express from 'express';
import * as transactionController from '@controllers/transaction_controller'

const router = express.Router();

router.get('/', transactionController.findAllWithCustomer);

export default router;
