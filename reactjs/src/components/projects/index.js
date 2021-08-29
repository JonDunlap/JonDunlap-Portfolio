import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  // method for expanding the content on the card
  const handleExpand1Click = () => {
    setExpanded1(!expanded1);
  };
  const handleExpand2Click = () => {
    setExpanded2(!expanded2);
  };
  const handleExpand3Click = () => {
    setExpanded3(!expanded3);
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
        {/* Restaurant management application */}
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
                management application with routes on the backend allowing for
                more advanced features to be added as needed.
              </Typography>
            </CardContent>

            {/* Links and expand content buttons */}
            <CardActions>
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
                  [classes.expandOpen]: expanded1,
                })}
                color='inherit'
                onClick={handleExpand1Click}
                aria-expanded={expanded1}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            {/* Collapsed content, detailed description of project */}
            <Collapse in={expanded1} timeout='auto' unmountOnExit>
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

        {/* Quiz app - Pug front end */}
        <Grid item xs={12} sm={6} component='article'>
          <Card>
            {/* Project image */}
            <CardMedia
              component='img'
              height='140'
              image={project3}
              alt='Image of quiz application code'
              title='Image of quiz application code'
            />

            {/* Title and short description of project */}
            <CardContent>
              <Typography gutterBottom variant='h5' component='h3'>
                Quiz Application (Express | Pug)
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                A RESTful API with public and private routes that allows users
                to create quizzes with questions and answers. This variation of
                the quiz application features two separate servers, one for the
                REST API and one for the front end. The front end is built using
                the template engine Pug.js and features JSON web token(JWT)
                authentication for all protected routes.
              </Typography>
            </CardContent>

            {/* Links and expand content buttons */}
            <CardActions>
              <IconButton
                color='inherit'
                aria-label='open github page'
                href='https://github.com/ASL-WDD442/asl_quiz_base-JonDunlap/tree/database'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </IconButton>
              {/* Expand card content */}
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded2,
                })}
                color='inherit'
                onClick={handleExpand2Click}
                aria-expanded={expanded2}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            {/* Collapsed content, detailed description of project */}
            <Collapse in={expanded2} timeout='auto' unmountOnExit>
              <CardContent>
                {/* Purpose of the project */}
                <Typography paragraph variant='body2'>
                  Purpose:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  This project was for class and it was my first real project
                  making use of Node.js and Express.js. This was the first
                  project where we built out a server for handling the API as
                  well as a web server for the front end. The first step of this
                  project was to design the branding and theme that would be
                  used throughout the front end, then we designed and built out
                  the API including the routes and models needed for full CRUD
                  functionality. Once the API was built out we switched over to
                  creating the front end, we were provided with HTML files that
                  we then converted into Pug templates and created the routes
                  for the web server that would show the appropriate pages.
                </Typography>

                {/* Outcome of the project */}
                <Typography paragraph variant='body2'>
                  Outcome:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  With the tight integration of the API and web server, we were
                  able to add authenticated routes on both the back and front
                  ends of the application. We also made use of oAuth in the form
                  of GitHub login and made use of JSON web tokens(JWT) for
                  authentication and authorization on the servers. This is one
                  project that I was particularly proud of since everything came
                  together very nicely and I was able to make the authentication
                  function as intended protecting the routes on the server.
                </Typography>

                {/* Issues with the project */}
                <Typography paragraph variant='body2'>
                  Issues:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  Overall, there are very few issues with this implementation of
                  the application, the styling is not the greatest and is
                  something I want to continue improving on and there are some
                  instances where error handling is not working properly and the
                  whole server will crash depending on what is sent to it.
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
              <Chip variant='outlined' size='small' label='Pug' />
            </CardContent>
          </Card>
        </Grid>

        {/* Quiz app - React front end */}
        <Grid item xs={12} sm={6} component='article'>
          <Card>
            {/* Project image */}
            <CardMedia
              component='img'
              height='140'
              image={project2}
              alt='Image of quiz application code'
              title='Image of quiz application code'
            />

            {/* Title and short description of project */}
            <CardContent>
              <Typography gutterBottom variant='h5' component='h3'>
                Quiz Application (Express | React)
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                A RESTful API with public and private routes that allows users
                to create quizzes with questions and answers. This variation
                uses the same back end as the previous implementation, but no
                longer uses the web server and instead features a React front
                end making use of React PropTypes and a higher order
                container(HOC) responsible for making API calls.
              </Typography>
            </CardContent>

            {/* Links and expand content buttons */}
            <CardActions>
              <IconButton
                color='inherit'
                aria-label='open github page'
                href='https://github.com/ASL-WDD442/asl_quiz_base-JonDunlap/tree/react'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </IconButton>
              {/* Expand card content */}
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded3,
                })}
                color='inherit'
                onClick={handleExpand3Click}
                aria-expanded={expanded3}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            {/* Collapsed content, detailed description of project */}
            <Collapse in={expanded3} timeout='auto' unmountOnExit>
              <CardContent>
                {/* Purpose of the project */}
                <Typography paragraph variant='body2'>
                  Purpose:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  This version of the quiz application is essentially identical
                  to the previous version with the exception of adding React to
                  handle the front end and no longer using the web server. The
                  reason I am including it here is that this is the first time
                  that I have made use of higher order components to handle
                  interactions with the API server and it is one of the better
                  examples of making use of React for a single page application.
                </Typography>

                {/* Outcome of the project */}
                <Typography paragraph variant='body2'>
                  Outcome:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  With the separation of the servers in this instance of the
                  project, we are now using higher order components to handle
                  the API interactions with the server and passing the returned
                  data as props to the main component. Since we are now making
                  API calls from the browser we also had to implement
                  cross-origin resource sharing(CORS) to prevent errors when
                  requesting data from our API. I was able to convert the Pug
                  templates into React components and to keep the same
                  functionality in almost all instances.
                </Typography>

                {/* Issues with the project */}
                <Typography paragraph variant='body2'>
                  Issues:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  This implementation of the application unfortunately loses the
                  protected routes on the front end and there are some issues
                  with components not updating properly to change state. This is
                  something that I would like to revisit eventually as I have
                  now learned how to add protected routes using Redux for the
                  front end and could easily implement the same behavior as the
                  web server version of this application.
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
