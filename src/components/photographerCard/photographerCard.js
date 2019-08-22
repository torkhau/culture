import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, FormattedDate } from 'gatsby-plugin-intl';
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: 300,
    margin: '0 auto',
  },
  media: {
    height: 290,
    backgroundPosition: '50% 0%',
  },
});

export default ({ photoURL, name, slug, birthDate, deathDate = null }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={slug} style={{ textDecoration: 'none', color: 'black' }}>
          <CardMedia
            image={photoURL}
            title={`${name}`}
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <FormattedDate value={birthDate} />
              <span> — </span>
              {deathDate ? (
                <FormattedDate value={deathDate} />
              ) : (
                <span>current day</span>
              )}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
