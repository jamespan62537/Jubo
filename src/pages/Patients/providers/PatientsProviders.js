import {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useMemo,
} from "react";

// apis
import { getPatients, getOrders } from "../../../apis/patients";

const context = createContext(undefined);

export const usePatients = () => {
  const contextData = useContext(context);

  if (contextData === undefined) {
    throw new Error("usePatients must be used within a PatientsProvider");
  }

  return contextData;
};

const PatientsProvider = ({ children }) => {
  const [patientsList, setPatientsList] = useState([]);
  const [ordersList, setOrdersList] = useState([]);
  const [isShowOrdersDialog, setIsShowOrdersDialog] = useState(false);

  const handleInit = useCallback(async () => {
    const patients = await getPatients();

    setPatientsList(patients);
  }, []);

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

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  const contextData = useMemo(
    () => ({
      patientsList,
      ordersList,
      isShowOrdersDialog,
      handleIsShowOrderDialog,
    }),
    [ordersList, patientsList, isShowOrdersDialog, handleIsShowOrderDialog]
  );

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default PatientsProvider;
