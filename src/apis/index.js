// mock data
import { patientsMockData } from "../mockData/patients";
import { ordersMockData } from "../mockData/orders";

export const handleFetchData = async ({ url, queries }) => {
  try {
    switch (url) {
      case "patients":
        return patientsMockData;

      case "orders":
        return ordersMockData;
      case "addOrder":
        return {
          ...ordersMockData,
          [queries.orderId]: [
            ...ordersMockData[queries.orderId],
            {
              id: `${ordersMockData[queries.orderId].length + 1}`,
              message: queries.message,
            },
          ],
        };
      default:
        console.log("no match condition");
    }
  } catch (error) {
    console.log("error", error);
  }
};
