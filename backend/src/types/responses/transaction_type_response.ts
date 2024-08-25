export type TTransactionWithCustomerResponse = {
    readonly type?: 'TTransactionWithCustomerResponse',
    id: number
    customer_id: number
    customer_name: string,
    customer_level: string,
    customer_favoriteMenu: string
}