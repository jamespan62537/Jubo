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

  const handleInit = useCallback(async () => {
    const [patients, orders] = await Promise.all([getPatients(), getOrders()]);

    setPatientsList(patients);
    setOrdersList(orders);
  }, []);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  const contextData = useMemo(
    () => ({
      patientsList,
      ordersList,
    }),
    [ordersList, patientsList]
  );

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default PatientsProvider;
