import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FundDetails() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "80%", margin: "auto" }}>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <h3>Description</h3>
                <p>
                  <strong>ETH 10000</strong>&nbsp; raised out of ETH 1999999
                </p>
                <div>
                  <div>
                    <AccessTimeIcon />
                    10 Time Left
                  </div>
                  <div>
                    <FavoriteIcon /> 10000 Supporters
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Donate
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} md={6}>
          <Item>lg=6 md=4</Item>
        </Grid>
        <Grid item lg={4} md={6}>
          <Item>lg=6 md=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
