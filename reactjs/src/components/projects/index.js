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

// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

// Import images
import workoutApp from '../../images/workout-app.png';
import quizAppCode from '../../images/quiz-app-code.png';

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
  // method for expanding the content on the card
  const handleExpand1Click = () => {
    setExpanded1(!expanded1);
  };
  const handleExpand2Click = () => {
    setExpanded2(!expanded2);
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
        {/* MERN Tutorial - Net Ninja */}
        <Grid item xs={12} component='article'>
          <Card>
            {/* Project image */}
            <CardMedia
              component='img'
              height='140'
              image={workoutApp}
              alt='Image of workout application website'
              title='Image of workout application website'
            />

            {/* Title and short description of project */}
            <CardContent>
              <Typography gutterBottom variant='h5' component='h3'>
                Workout Buddy - A MERN Stack Tutorial from{' '}
                <a
                  href='https://www.youtube.com/c/TheNetNinja'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Net Ninja
                </a>
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                A simple MERN stack application that is hosted online using
                Google Cloud Platform's compute engine VM. This application was
                a chance for me to learn more about the MERN stack and how to
                implement it in my own projects as well as the steps necessary
                to actually host a web application. The application makes use of
                JSON web tokens (JWT) as well as making use of the browsers
                local storage to authenticate and store the user data for their
                current session. All routes on both the frontend and backend are
                authenticated to prevent unauthorized access. A demo is
                available by clicking the web icon below.
              </Typography>
            </CardContent>

            {/* Links and expand content buttons */}
            <CardActions>
              <IconButton
                color='inherit'
                aria-label='open github page'
                href='https://github.com/JonDunlap/Net-Ninja-MERN-Stack-Tutorial'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color='inherit'
                aria-label='open workoutapp.jondunlap.com website'
                href='https://workoutapp.jondunlap.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <WebIcon />
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
                  The overall purpose of this project was to learn more about
                  the MERN stack as well as how to deploy web applications using
                  an actual web server rather than the hosting platforms that I
                  have used previously, such as Heroku and GitHub Pages. This
                  was my first time using NGINX and I was also able to learn how
                  to use the Google Cloud Platform compute engine to host the
                  application on an Ubuntu VM. The application itself is a
                  simple workout tracker that allows users to input a workout as
                  well as view and delete their previous workouts.
                </Typography>

                {/* Outcome of the project */}
                <Typography paragraph variant='body2'>
                  Outcome:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  Making use of Mongoose as the ODM, I was able to make a
                  backend API that works with MongoDB's Cloud Atlas platform
                  allowing users to create, read, update, and delete workouts
                  with validation and error handling. On the frontend I was able
                  to make use of React's Context, Reducer, and Effect hooks to
                  handle the API calls and the state of the application. For the
                  server I created an Ubuntu VM using the Google Compute Engine
                  and was able to use NGINX as the reverse proxy to serve the
                  application. I also setup and used a private key for
                  connecting to the server as well as removing the root account
                  and the ability to connect using a password so that the server
                  could be more secure. Making use of an SSL certificate that I
                  had available I was able to register and use a subdomain on my
                  current website and make the website use HTTPS for a more
                  secure connection. This was a good tutorial and I was able to
                  take it further by actually deploying the application and
                  making it publicly available.
                </Typography>

                {/* Issues with the project */}
                <Typography paragraph variant='body2'>
                  Issues:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  I need to look into how to better implement my routes in NGINX
                  since I am having an issue forwarding http requests to the
                  https port.
                </Typography>
              </CardContent>
            </Collapse>

            {/* Divider Line */}
            <Divider variant='middle' />
            {/* Technologies used */}
            <CardContent>
              <Typography variant='body2'>Technologies:</Typography>
              <Chip variant='outlined' size='small' label='MongoDB' />
              <Chip variant='outlined' size='small' label='Mongoose ODM' />
              <Chip variant='outlined' size='small' label='Express' />
              <Chip variant='outlined' size='small' label='React' />
              <Chip variant='outlined' size='small' label='Node.js' />
            </CardContent>
          </Card>
        </Grid>

        {/* Quiz app */}
        <Grid item xs={12} component='article'>
          <Card>
            {/* Project image */}
            <CardMedia
              component='img'
              height='140'
              image={quizAppCode}
              alt='Image of quiz application code'
              title='Image of quiz application code'
            />

            {/* Title and short description of project */}
            <CardContent>
              <Typography gutterBottom variant='h5' component='h3'>
                Quiz Application (Express | React/Pug)
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                A RESTful API with public and private routes that allows users
                to create quizzes with questions and answers. The application
                features two separate servers, one for the REST API and one for
                the front end, there is also a separate front end that was built
                for a later assignment using React. The original front end is
                built using the template engine Pug.js and features JSON web
                token(JWT) authentication for all protected routes. The second
                version of the front end uses the same back end as the previous
                implementation, but no longer uses the web server and instead
                features a React front end making use of React PropTypes,
                useEffect, and a higher order component(HOC) responsible for
                making API calls.
              </Typography>
            </CardContent>

            {/* Links and expand content buttons */}
            <CardActions>
              <IconButton
                color='inherit'
                aria-label='open github page'
                href='https://github.com/JonDunlap/asl_quiz_base-JonDunlap'
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
                  for the web server that would show the appropriate pages. For
                  a subsequent assignment we converted the front end to React
                  instead of using the web server. This is also the first time
                  that I learned and made use of higher order components to
                  handle separation of concerns for my react components and for
                  the API interactions.
                </Typography>

                {/* Outcome of the project */}
                <Typography paragraph variant='body2'>
                  Outcome:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  With the tight integration of the API and web server, we were
                  able to add authenticated routes on both the back and front
                  ends of the application using Pug to create the page
                  templates. We also made use of oAuth in the form of GitHub
                  login and made use of JSON web tokens(JWT) for authentication
                  and authorization on the servers. This is one project that I
                  was particularly proud of since everything came together very
                  nicely and I was able to make the authentication function as
                  intended protecting the routes on the server. For the React
                  version, with the separation of the servers, we are now using
                  higher order components to handle the API interactions with
                  the server and passing the returned data as props to the main
                  component. Since we are now making API calls from the browser
                  we also had to implement cross-origin resource sharing(CORS)
                  to prevent errors when requesting data from our API. I was
                  able to convert the Pug templates into React components and to
                  keep the same functionality in almost all instances.
                </Typography>

                {/* Issues with the project */}
                <Typography paragraph variant='body2'>
                  Issues:
                </Typography>
                <Typography paragraph variant='body2' color='textSecondary'>
                  Overall, there are very few issues, the styling is not the
                  greatest and is something I want to continue improving on,
                  there are also some instances where error handling is not
                  working properly and the whole server will crash depending on
                  what is sent to it. The React version of the application
                  unfortunately loses the protected routes on the front end and
                  there are some issues with components not updating properly to
                  change state. This is something that I would like to revisit
                  eventually as I have now learned how to add protected routes
                  using Redux for the front end and could easily implement the
                  same behavior as the web server version of this application.
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
              <Chip variant='outlined' size='small' label='React' />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
