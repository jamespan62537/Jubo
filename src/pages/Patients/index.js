import { usePatients } from "./providers/PatientsProviders";

const Patients = () => {
  const { patientsList, ordersList } = usePatients();

  return <>Patients</>;
};

export default Patients;
