import {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useMemo,
} from "react";

// apis
import { getPatients } from "../../../apis/patients";

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

  const handleInit = useCallback(async () => {
    const patients = await getPatients();

    setPatientsList(patients);
  }, []);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  const contextData = useMemo(
    () => ({
      patientsList,
    }),
    [patientsList]
  );

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default PatientsProvider;
