import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import GitHubIcon from '@material-ui/icons/GitHub';

import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';

// CSS styles for expand icon
const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // method for expanding the content on the card
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
            {/* Project image */}
            <CardMedia
              component='img'
              height='140'
              image={project1}
              alt='Image of restaurant application code'
              title='Image of restaurant application code'
            />

            {/* Title and short description of project */}
            <CardContent>
              <Typography gutterBottom variant='h5' component='h3'>
                Restaurant Management Application
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                A RESTful API that is meant for a small restaurant business
                allowing them to have a customer and staff facing interface.
                Currently features a minimal React front end for the restaurant
                management application with a back-end setup for more advanced
                features.
              </Typography>
            </CardContent>

            {/* Links and expand content buttons */}
            <CardActions>
              {/* TODO - change to github icon */}
              <IconButton
                color='inherit'
                aria-label='open github page'
                href='https://github.com/ePortfolios/WDD4416-2107-JonathanDunlap'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </IconButton>
              {/* Expand card content */}
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                color='inherit'
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            {/* Collapsed content, detailed description of project */}
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                {/* Purpose of the project */}
                <Typography paragraph variant='body2'>
                  Purpose:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  This project was the culmination of a series of capstone
                  courses that tasked me with building a fully functioning REST
                  API along with a front-end web server. The goal of the project
                  was to make use of several technologies of our choice and to
                  create an application that would solve a problem. I chose to
                  make a restaurant management application that could eventually
                  be used for my mother-in-law's restaurant in Thailand to help
                  her modernize and take advantage of online ordering. To
                  accomplish this I settled on using Node.js and Express.js for
                  the backend web server and used React with the Material-UI
                  visual framework for the front-end. Making use of the{' '}
                  <a href='https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow'>
                    Git feature branch workflow
                  </a>{' '}
                  I began adding components and merging as the project went
                  along.
                </Typography>
                {/* Outcome of the project */}
                <Typography paragraph variant='body2'>
                  Outcome:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  I was able to make a fully functioning back-end API server
                  that features user authentication and protected routes using
                  JSON web tokens(JWT), I created my database using PostgreSQL,
                  and was able to create my models, relationships, and
                  controllers as well as create some seed data for database
                  testing. Making use of tools such as Postman and CircleCI I
                  created automated testing and with the use of Heroku I was
                  able to set up automatic deployments fulfilling the
                  requirements for a CI/CD pipeline.
                </Typography>
                {/* Issues with the project */}
                <Typography paragraph variant='body2'>
                  Issues:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  The front-end is not complete with almost all of the routes
                  still needing to be completed and styling needing to be
                  applied to almost all of the components. There are still some
                  issues with error catching on the backend that I need to
                  research on how to handle without crashing the entire API and
                  I would also like to add in additional authentication routes
                  for creating new users and handling password resets.
                </Typography>
              </CardContent>
            </Collapse>

            {/* Divider Line */}
            <Divider variant='middle' />

            {/* Technologies used */}
            <CardContent>
              <Typography variant='body2'>Technologies:</Typography>
              <Chip variant='outlined' size='small' label='Express' />
              <Chip variant='outlined' size='small' label='Node.js' />
              <Chip variant='outlined' size='small' label='PostgreSQL' />
              <Chip variant='outlined' size='small' label='React' />
              <Chip variant='outlined' size='small' label='Redux' />
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
