import { TProduct } from "@src/types/models/product_type"
import { TProductResponse } from "@src/types/responses/product_type_response"

export const productResponse = (product: TProduct): TProductResponse => {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
    }
} 

export const productResponseArray = (products: TProduct[]): TProductResponse[] => {
    let results: TProductResponse[] = []
    products.forEach(product => {
        results.push({
            id: product.id,
            name: product.name,
            price: product.price,
            stock: product.stock,
        })
    });
    return results
}