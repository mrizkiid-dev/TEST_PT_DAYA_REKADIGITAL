import * as transactionModel from '@models/transaction'

export const findAllWithCustomer = async () => {
    const results = await transactionModel.findAllWithCustomer()
    return results
}