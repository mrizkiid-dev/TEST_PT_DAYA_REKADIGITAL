import { create } from 'zustand';
import { getTransactionWithCustomer } from '@/data/getTransactionCustomer';

const useCustomerStore = create((set) => ({
  data: null,
  loading: false,
  error: null,

  storeGetTransactionWithCustomer: async () => {
    set({ loading: true, error: null, data: null });
    const {success, failed} = await getTransactionWithCustomer()

    if(success) {
        set({data: success.data})
    }
    if(failed) {
        set({error: failed})
    }
    set({loading: false})
  },
}));

export default useCustomerStore;