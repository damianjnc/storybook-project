import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./MovieListItem.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 245
  },
  media: {
    height: 140
  }
});

const MovieListItem = props => {
  const { title, backdrop_path, overview, onLearnMore } = props;
  const classes = useStyles();
  return (
    <Card className={` movie-list-item ${classes.card}`}>
      <CardActionArea>
        {backdrop_path && (
          <CardMedia
            className={`movie-list-item-image ${classes.media}`}
            image={`//image.tmdb.org/t/p/w300${backdrop_path}`}
            title={title}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={onLearnMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieListItem;
