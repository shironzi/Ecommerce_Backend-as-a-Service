import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface FormDialogProps {
  open: boolean;
  handleClose: () => void;
}

export default function AddTask({ open, handleClose }: FormDialogProps) {
  const [taskName, setTaskName] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [description, setDescription] = React.useState("");

  // Get the theme and check if the screen size is small (mobile)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const taskData = {
      taskName,
      description,
      priority,
    };
    console.log(taskData);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
        sx: {
          padding: { xs: "15px", sm: "25px" },
          borderRadius: "10px",
        },
      }}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          Add New Task
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box component="div" sx={{ mb: 2 }}>
          <TextField
            autoFocus
            required
            id="taskName"
            label="Task Name"
            type="text"
            fullWidth
            variant="outlined"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            sx={{ marginTop: 1, fontSize: { xs: "0.875rem", sm: "1rem" } }}
          />
        </Box>

        <Box component="div" sx={{ mb: 2 }}>
          <TextField
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
          />
        </Box>

        <Box component="div" sx={{ mb: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="task-priority-label">Task Priority</InputLabel>
            <Select
              labelId="task-priority-label"
              id="task-priority"
              value={priority}
              label="Task Priority"
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "space-between", padding: { xs: 1, sm: 2 } }}>
        <Button onClick={handleClose} color="primary" variant="outlined" sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  );
}
