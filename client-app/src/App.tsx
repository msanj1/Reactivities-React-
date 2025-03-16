import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { List, ListItem, Typography } from "@mui/material";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <>
      <Typography variant="h3">Reactivities</Typography>
      <List>
        {activities.map((activity) => {
          return <ListItem key={activity.id}>{activity.title}</ListItem>;
        })}
      </List>
    </>
  );
}

export default App;
