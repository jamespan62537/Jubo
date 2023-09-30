// mui
import { Box, Stack } from "@mui/material";

// hook
import { usePatients } from "./providers/PatientsProviders";
// component
import CardComponent from "../../components/CardComponent";
import DialogComponent from "../../components/DialogComponent";

const Patients = () => {
  const {
    patientsList,
    ordersList,
    isShowOrdersDialog,
    handleIsShowOrderDialog,
  } = usePatients();

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
      <DialogComponent
        isShow={isShowOrdersDialog}
        title="Orders"
        onClose={() => handleIsShowOrderDialog({ isShow: false })}
        secondaryTitle="新增"
        onSecondary={() => {}}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          {ordersList.map((order) => (
            <CardComponent key={order.id} content={order?.message || ""} />
          ))}
        </Stack>
      </DialogComponent>
    </Box>
  );
};

export default Patients;
