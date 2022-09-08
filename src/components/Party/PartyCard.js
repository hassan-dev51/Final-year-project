import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const PartyCard = ({ pic, logo, name, link, decs }) => {
  return (
    <Card sx={{ maxWidth: "450px", margin: "16px" }}>
      <CardMedia
        component="img"
        width="150"
        height="250"
        image={pic}
        alt="Imran Khan"
      />
      <CardMedia
        component="img"
        width="150"
        height="40"
        image={logo}
        alt="Logo"
        className="logo_div"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          {decs}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">{link}</Button>
      </CardActions>
    </Card>
  );
};

export default PartyCard;
