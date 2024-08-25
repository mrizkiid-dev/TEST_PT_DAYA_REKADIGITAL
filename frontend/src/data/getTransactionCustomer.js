import axiosInstance from "./axios";

export const getTransactionWithCustomer = async() => {
    let success;
    let failed;
    try {
        const response = await axiosInstance.get('/transactions')
        success = response
    } catch (err) {
        failed = JSON.stringify(err)
    }

    return {success, failed}
}