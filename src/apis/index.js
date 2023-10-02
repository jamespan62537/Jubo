import { v4 as uuidv4 } from "uuid";

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
        const id = uuidv4();
        return {
          id,
          message: queries.message,
        };
      default:
        console.log("no match condition");
    }
  } catch (error) {
    console.log("error", error);
  }
};
