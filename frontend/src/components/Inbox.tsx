import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function TaskList() {
  const tasks = [
    {
      title: "Browse the Todoist Inspiration Hub",
      date: "28 Aug",
      project: "Inbox",
      overdue: true,
    },
    {
      title: "Review upcoming exam dates and plan ahead",
      date: "30 Aug",
      project: "Education",
      label: "Routines",
      overdue: true,
    },
    {
      title: "Do a weekly review of my tasks and goals",
      date: "1 Sep",
      project: "Home",
      label: "Routines",
      overdue: true,
    },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
      {/* Today section */}
      <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
        Today
      </Typography>

      {/* Task Count */}
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        3 tasks
      </Typography>

      {/* Overdue section */}
      <Typography variant="h6" color="error" sx={{ mb: 1 }}>
        Overdue
      </Typography>

      {/* Task List */}
      <List>
        {tasks.map((task, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <Checkbox edge="start" tabIndex={-1} disableRipple />
              <ListItemText
                primary={task.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.secondary", display: "block" }}
                    >
                      {task.date}
                    </Typography>
                    {task.project && (
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.secondary", display: "block" }}
                      >
                        {task.project}
                      </Typography>
                    )}
                    {/* Display labels */}
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                      {task.label && <Chip label={task.label} size="small" />}
                    </Stack>
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < tasks.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>

      {/* Add Task */}
      <Typography
        variant="body2"
        sx={{ mt: 2, color: "primary.main", cursor: "pointer" }}
      >
        + Add task
      </Typography>
    </Box>
  );
}
