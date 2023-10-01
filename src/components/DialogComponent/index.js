import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const DialogComponent = ({
  isShow,
  title,
  onClose,
  onOk,
  onSecondary,
  isDisableOk,
  secondaryTitle,
  children,
}) => {

  return (
    <Dialog open={isShow} onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle id="customized-dialog-title" sx={{ m: 0, p: 2 }}>
        {title}
      </DialogTitle>
      {onSecondary && (
        <Button
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          onClick={onSecondary}
        >
          {secondaryTitle}
        </Button>
      )}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>關閉</Button>
        <Button onClick={onOk} disabled={isDisableOk}>
          儲存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(DialogComponent);
