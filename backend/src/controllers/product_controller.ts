import * as productSerivce from "@services/product_service";
import { productResponse, productResponseArray } from "@src/responses/product_response";
import { TProductResponse } from "@src/types/responses/product_type_response";
import { Request, Response } from 'express';

export const findAll = async (req: Request, res: Response) => {
    try {
        const products = await productSerivce.findAll()
        const results = productResponseArray(products)
        res.json(results)
    } catch (error) {
        res.status(500).json({
            error: JSON.stringify(error)
        })
    }
}