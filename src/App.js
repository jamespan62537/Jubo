import PatientsProvider from './pages/Patients/providers/PatientsProviders';
import Patients from './pages/Patients';

function App() {
  return (
    <PatientsProvider>
      <Patients />
    </PatientsProvider>
  );
}

export default App;
