import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import * as styles from './projects.module.css';

export default function Header() {
  return (
    <Grid item id='projects' component='section'>
      <h2>Projects</h2>
      <Grid
        container
        direction='row'
        justifyContent='space-around'
        alignItems='flex-start'
      >
        <Grid item xs={12} sm={6} component='article'>
          <Card>
            <CardActionArea>
              <CardMedia
                className={styles.media}
                image='/static/images/cards/contemplative-reptile.jpg'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} component='article'>
          <Card>
            <CardActionArea>
              <CardMedia
                className={styles.media}
                image='/static/images/cards/contemplative-reptile.jpg'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>{' '}
        <Grid item xs={12} sm={6} component='article'>
          <Card>
            <CardActionArea>
              <CardMedia
                className={styles.media}
                image='/static/images/cards/contemplative-reptile.jpg'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>{' '}
        <Grid item xs={12} sm={6} component='article'>
          <Card>
            <CardActionArea>
              <CardMedia
                className={styles.media}
                image='/static/images/cards/contemplative-reptile.jpg'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
