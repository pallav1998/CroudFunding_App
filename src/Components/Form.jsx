import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Form() {
  return (
    <Card style={{ maxWidth: "80%", margin: "auto", padding: "2%" }}>
      <div style={{ display: "flex", gap: "4%", margin: "auto", marginBottom:"20px" }}>
        <TextField
          id="outlined-basic"
          label="Enter Target Value in WEI"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Enter Deadline in Sec."
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Enter Description"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Enter Image Link"
          variant="outlined"
        />
      </div>
      <Button variant="contained">Raise Fund</Button>
    </Card>
  );
}
