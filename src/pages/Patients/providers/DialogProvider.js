import {
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext,
} from "react";

// api
import { getOrders, addOrder } from "../../../apis/patients";

const context = createContext(undefined);

export const useDialog = () => {
  const contextData = useContext(context);

  if (contextData === undefined) {
    throw new Error("usePatients must be used within a PatientsProvider");
  }

  return contextData;
};

const DialogProvider = ({ children }) => {
  const [ordersList, setOrdersList] = useState([]);
  const [currentOrderId, setCurrentOrderId] = useState(null);
  const [isShowOrdersDialog, setIsShowOrdersDialog] = useState(false);

  const handleGetOrdersByOrderId = useCallback(async ({ orderId }) => {
    const orders = await getOrders({ orderId });
    setOrdersList(orders);
  }, []);

  const handleIsShowOrderDialog = useCallback(
    async ({ isShow, orderId }) => {
      if (isShow) await handleGetOrdersByOrderId({ orderId });
      if (!isShow) setCurrentOrderId(null);
      setCurrentOrderId(orderId);
      setIsShowOrdersDialog(isShow);
    },
    [handleGetOrdersByOrderId]
  );

  const handleAddOrder = useCallback(
    async ({ orderId, message }) => {
      const newOrders = await addOrder({ orderId, message });
      setOrdersList([...ordersList, newOrders]);
    },
    [ordersList]
  );

  const contextData = useMemo(
    () => ({
      ordersList,
      currentOrderId,
      isShowOrdersDialog,
      handleIsShowOrderDialog,
      handleAddOrder,
    }),
    [
      ordersList,
      currentOrderId,
      isShowOrdersDialog,
      handleIsShowOrderDialog,
      handleAddOrder,
    ]
  );

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default DialogProvider;
