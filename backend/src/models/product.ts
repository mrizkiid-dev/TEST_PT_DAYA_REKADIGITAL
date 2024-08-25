import db from '@db';
import type { TProduct } from "@src/types/models/product_type";

export const findAll = async() => {
  const result = await db.query<TProduct>('SELECT * FROM products');
  return result.rows;
};
