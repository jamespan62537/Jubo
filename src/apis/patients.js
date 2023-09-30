import { handleFetchData } from '.';

export const getPatients = () => handleFetchData({ url: 'patients' });

export const getOrders = () => handleFetchData({ url: 'orders' });
