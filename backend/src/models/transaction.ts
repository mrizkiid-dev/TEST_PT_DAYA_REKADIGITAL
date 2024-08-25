import db from "@db";
import { TTransactionWithCustomer } from "@src/types/models/transaction_type";


export const findAllWithCustomer = async () => {
    const result = await db.query<TTransactionWithCustomer>(`
        SELECT transactions.id, customers.id as customer_id, customers.name as customer_name, customers.level as customer_level, customers.favorite_menu as customer_favorite_menu
        FROM transactions
        INNER JOIN customers ON transactions.customer_id = customers.id
    `)
    return result.rows
}