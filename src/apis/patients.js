import { handleFetchData } from ".";

export const getPatients = async () =>
  await handleFetchData({ url: "patients" });

export const getOrders = async ({ orderId }) => {
  const orders = await handleFetchData({ url: "orders" });
  return orders[orderId] || [];
};

export const addOrder = async ({ orderId, message }) => {
  const orders = await handleFetchData({
    url: "addOrder",
    queries: { orderId, message },
  });
  return orders[orderId] || [];
};
