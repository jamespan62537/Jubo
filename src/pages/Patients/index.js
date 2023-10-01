// mui
import { Box, Stack } from "@mui/material";

// hook
import { usePatients } from "./providers/PatientsProviders";
import { useDialog } from "./providers/DialogProvider";
// component
import CardComponent from "../../components/CardComponent";
import OrdersDialogComponent from "./components/OrdersDialogComponent";

const Patients = () => {
  const { patientsList } = usePatients();
  const { ordersList, isShowOrdersDialog, handleIsShowOrderDialog } =
    useDialog();

  return (
    <Box sx={{ width: "100%", height: "100%", py: "20px" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        {patientsList.map((patient) => (
          <CardComponent
            key={patient.id}
            content={patient?.name || ""}
            onClick={() =>
              handleIsShowOrderDialog({
                isShow: true,
                orderId: patient.orderId,
              })
            }
          />
        ))}
      </Stack>
      <OrdersDialogComponent
        isShow={isShowOrdersDialog}
        onClose={() => handleIsShowOrderDialog({ isShow: false })}
        ordersList={ordersList}
      />
    </Box>
  );
};

export default Patients;
