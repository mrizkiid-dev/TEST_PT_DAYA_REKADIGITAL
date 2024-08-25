import express from 'express';
import productRoutes from '@routes/product_routes';
import transactionRoutes from "@routes/transaction_route";
import { errorHandler } from './middleware/error_middleware';

const app = express();

//global middleware
app.use(express.json());

//local middleware
app.use('/api/products', productRoutes);
app.use('/api/transactions', transactionRoutes);

//error logging
app.use(errorHandler)

export default app;