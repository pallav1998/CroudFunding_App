import * as React from "react";
import styles from "./Styling.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinearDeterminate from "./LinearProgress";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function FundDetails() {
  return (
    <Box
      sx={{ flexGrow: 1, maxWidth: "80%", margin: "auto", marginTop: "50px" }}
    >
      <Grid container spacing={4}>
        <Grid item lg={4} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="https://www.sciencealert.com/images/2020-06/processed/cancer_topic_1024.jpg"
                alt="green iguana"
              />
              <CardContent>
                <h2>Description</h2>
                <p style={{ fontSize: "20px", textAlign: "left" }}>
                  <strong>ETH 10000</strong> raised out of <br />
                  <i>ETH 1999999</i>
                </p>
                <LinearDeterminate />
                <div className={styles.donateflex}>
                  <div>
                    <AccessTimeIcon />
                    &nbsp;
                    <span>10 Time Left</span>
                  </div>
                  <div>
                    <FavoriteIcon />
                    &nbsp;
                    <span>10000 Supporters</span>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <button className={styles.donatebutton}>Donate</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} md={6}>
          <Paper>lg=6 md=4</Paper>
        </Grid>
        <Grid item lg={4} md={6}>
          <Paper>lg=6 md=4</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
