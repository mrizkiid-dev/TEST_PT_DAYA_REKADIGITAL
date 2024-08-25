import { TTransactionWithCustomer } from "@src/types/models/transaction_type";
import { TTransactionWithCustomerResponse } from "@src/types/responses/transaction_type_response";

export const transactionWithCustomerResponse = (transaction: TTransactionWithCustomer): TTransactionWithCustomerResponse => {
    return {
        id: transaction.id,
        customer_id: transaction.customer_id,
        customer_name: transaction.customer_name,
        customer_level: transaction.customer_level,
        customer_favoriteMenu: transaction.customer_favorite_menu
    }
}

export const transactionWithCustomerResponseArray = (transactions: TTransactionWithCustomer[]): TTransactionWithCustomerResponse[] => {
    const response: TTransactionWithCustomerResponse[] = []
    transactions.forEach(transaction => {
        response.push({
            id: transaction.id,
            customer_id: transaction.customer_id,
            customer_name: transaction.customer_name,
            customer_level: transaction.customer_level,
            customer_favoriteMenu: transaction.customer_favorite_menu
        })
    });
    return response
}