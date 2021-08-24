import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';

export default function Header() {
  return (
    <Grid item id='projects' component='section'>
      <h2>Projects</h2>
      <Grid
        item
        container
        direction='row'
        justifyContent='space-around'
        alignItems='flex-start'
        spacing={4}
      >
        {/* Project #1 */}
        <Grid item xs={12} component='article'>
          <Card>
            <CardMedia
              component='img'
              height='140'
              image={project1}
              alt='Image of restaurant application code'
              title='Image of restaurant application code'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h3'>
                Restaurant Management Application
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                A RESTful API that is meant for a small restaurant business
                allowing them to have a customer and staff facing interface at a
                low cost. Currently features a minimal React front end for the
                restaurant management application with a back-end setup for more
                advanced features.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>
                Visit
              </Button>
              <Button size='small' color='primary'>
                Code
              </Button>
            </CardActions>
            <Divider variant='middle' />
            <CardContent>
              <Typography variant='body2'>Technologies:</Typography>
              <Chip variant='outlined' size='small' label='Express' />
              <Chip variant='outlined' size='small' label='Node.js' />
              <Chip variant='outlined' size='small' label='PostgreSQL' />
              <Chip variant='outlined' size='small' label='React' />
            </CardContent>
          </Card>
        </Grid>

        {/* Project #2 */}
        <Grid item xs={12} sm={6} component='article'>
          <Card>
            <CardMedia
              component='img'
              height='140'
              image={project2}
              alt='Image of quiz application code'
              title='Image of quiz application code'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h3'>
                Quiz Application (Express | React)
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                A RESTful API with public and private routes that allows users
                to create quizzes with questions and answers. This variation
                uses React for the front end and Express on the back end.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>
                Code
              </Button>
            </CardActions>
            <Divider variant='middle' />
            <CardContent>
              <Typography variant='body2'>Technologies:</Typography>
              <Chip variant='outlined' size='small' label='Express' />
              <Chip variant='outlined' size='small' label='Node.js' />
              <Chip variant='outlined' size='small' label='PostgreSQL' />
              <Chip variant='outlined' size='small' label='React' />
            </CardContent>
          </Card>
        </Grid>

        {/* Project #3 */}
        <Grid item xs={12} sm={6} component='article'>
          <Card>
            <CardMedia
              component='img'
              height='140'
              image={project3}
              alt='Image of quiz application code'
              title='Image of quiz application code'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h3'>
                Quiz Application (Express | Pug)
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                A variation of the previous quiz application that features two
                separate servers, one for the REST API and one for the front
                end. The front end is built using the template engine Pug.js.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>
                Code
              </Button>
            </CardActions>
            <Divider variant='middle' />
            <CardContent>
              <Typography variant='body2'>Technologies:</Typography>
              <Chip variant='outlined' size='small' label='Express' />
              <Chip variant='outlined' size='small' label='Node.js' />
              <Chip variant='outlined' size='small' label='PostgreSQL' />
              <Chip variant='outlined' size='small' label='Pug' />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
