import React, { useState, useCallback, useRef } from "react";
// mui
import { Stack, TextareaAutosize } from "@mui/material";

// component
import DialogComponent from "../../../components/DialogComponent";
import CardComponent from "../../../components/CardComponent";

const OrdersDialogComponent = ({ isShow, ordersList, onClose }) => {
  const [isShowAddOrder, setIsShowAddOrder] = useState(false);
  const addOrderTextRef = useRef("");

  const handleisShowAddOrder = useCallback(
    ({ isShow }) => setIsShowAddOrder(isShow),
    []
  );

  const handleChangeOrderText = useCallback((value) => {
    addOrderTextRef.current = value;
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsShowAddOrder(false);
    addOrderTextRef.current = "";
    onClose();
  }, [onClose]);

  return (
    <DialogComponent
      isShow={isShow}
      title="醫囑列表"
      onClose={handleCloseDialog}
      secondaryTitle="新增"
      onSecondary={() => handleisShowAddOrder({ isShow: true })}
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
        {isShowAddOrder ? (
          <TextareaAutosize
            style={{ resize: "none", width: "20%" }}
            minRows={1}
            placeholder="Type Your Answer Here"
            onChange={(e) => handleChangeOrderText(e.target.value || "")}
          />
        ) : null}
      </Stack>
    </DialogComponent>
  );
};

export default React.memo(OrdersDialogComponent);
