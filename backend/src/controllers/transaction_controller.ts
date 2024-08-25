import * as transactionService from '@services/transaction_service'
import { transactionWithCustomerResponse, transactionWithCustomerResponseArray } from '@src/responses/transaction_response'
import { Request, Response } from 'express'

export const findAllWithCustomer = async(req: Request, res: Response) => {
    try {
        const transactions = await transactionService.findAllWithCustomer()
        const response = transactionWithCustomerResponseArray(transactions)
        res.json(response)
    } catch (error) {
        console.log('error findAllWithCustomer = ',JSON.stringify(error));
        
        res.status(500).json({
            error: 'sever error'
        })
    }
}