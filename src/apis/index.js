// mock data
import { patientsMockData } from '../mockData/patients';
import { ordersMockData } from '../mockData/orders';

export const handleFetchData = async ({ url, queries }) => {
  try {
    switch (url) {
      case 'patients':
        return patientsMockData;

      case 'orders':
        return ordersMockData;
      default:
        console.log('no match condition');
    }
  } catch (error) {
    console.log('error', error);
  }
};
