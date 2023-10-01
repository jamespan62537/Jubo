import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const DialogComponent = ({
  isShow,
  title,
  onClose,
  onSecondary,
  secondaryTitle,
  children,
}) => {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    height: "100% !important",
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  return (
    <BootstrapDialog open={isShow} onClose={onClose} fullWidth maxWidth="lg">
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
      </DialogActions>
    </BootstrapDialog>
  );
};

export default React.memo(DialogComponent);
