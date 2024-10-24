import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";

interface FormDialogProps {
  open: boolean;
  handleClose: () => void;
}

export default function SearchTask({ open, handleClose }: FormDialogProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClose();
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen is mobile

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullScreen={fullScreen}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
          sx: fullScreen
            ? { height: "100%" }
            : { width: "80%", maxWidth: "800px", height: "fit-content" },
        }}
      >
        <DialogTitle>Search Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="search"
            name="search"
            label="Search Task"
            type="search"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Search</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
