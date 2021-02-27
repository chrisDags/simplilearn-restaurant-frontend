import { Card } from "@material-ui/core";
import "./FoodListCSS.css";
// import React, { Component } from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-bootstrap/Carousel";

import "../MingData.json";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function FoodListComponent() {
  let data = require("../MingData.json");
  const classes = useStyles();
  <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh", paddingLeft: "10px", paddingRight: "10px" }} />;
  return (
    <div>
     <div style={{marginBottom: "5px", display:"fixed"}}>
      <Carousel style={{ width: "30%", margin: "auto" }}>
        <Carousel.Item> <img  className="d-block w-100 " height="300" src="/wine-stock.jpg"/> </Carousel.Item>
        <Carousel.Item> <img className="d-block w-100 " height="300" src="/beer.jpg"  /> </Carousel.Item>
        <Carousel.Item> <img className="d-block w-100 " height="300" src="/people-eating.jpg" /></Carousel.Item>
      </Carousel>
    </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {data.deals.map((deal) => (
          <div style={{ padding: "10px"}}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia component="img"  height="140" width="140" image={deal.image} title={deal.food}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {deal.food}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" >
                    {deal.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodListComponent;
