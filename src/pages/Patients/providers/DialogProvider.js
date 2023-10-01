import {
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext,
} from "react";

// api
import { getOrders } from "../../../apis/patients";

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
  const [isShowOrdersDialog, setIsShowOrdersDialog] = useState(false);

  const handleGetOrdersByOrderId = useCallback(async ({ orderId }) => {
    const orders = await getOrders({ orderId });
    setOrdersList(orders);
  }, []);

  const handleIsShowOrderDialog = useCallback(
    async ({ isShow, orderId }) => {
      if (isShow) await handleGetOrdersByOrderId({ orderId });
      setIsShowOrdersDialog(isShow);
    },
    [handleGetOrdersByOrderId]
  );

  const contextData = useMemo(
    () => ({
      ordersList,
      isShowOrdersDialog,
      handleIsShowOrderDialog,
    }),
    [ordersList, isShowOrdersDialog, handleIsShowOrderDialog]
  );

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default DialogProvider;
