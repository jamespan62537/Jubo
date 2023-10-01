import PatientsProvider from "./pages/Patients/providers/PatientsProviders";
import DialogProvider from "./pages/Patients/providers/DialogProvider";
import Patients from "./pages/Patients";

function App() {
  return (
    <PatientsProvider>
      <DialogProvider>
        <Patients />
      </DialogProvider>
    </PatientsProvider>
  );
}

export default App;
