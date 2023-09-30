import { handleFetchData } from ".";

export const getPatients = async () =>
  await handleFetchData({ url: "patients" });

export const getOrders = async ({ orderId }) => {
  const orders = await handleFetchData({ url: "orders" });
  return orders[orderId] || [];
};
