import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styles from "./Styling.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function FormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button>
       */}
      <button onClick={handleOpen} className={styles.button1}>
        Start a Fundraiser For FREE
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card className={styles.formdiv} sx={style}>
            <h2>Enter Details</h2>
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

            <Button variant="contained">Raise Fund</Button>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}
