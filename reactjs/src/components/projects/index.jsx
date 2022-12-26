import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import Collapse from '@material-ui/core/Collapse';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

// Import images
import workoutApp from '../../images/workout-app.png';
import ersApp from '../../images/ers-app.png';
// import quizAppCode from '../../images/quiz-app-code.png';

// CSS styles for expand icon
// const useStyles = makeStyles((theme) => ({
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
// }));

export default function Header() {
  // const classes = useStyles();
  // const [expanded1, setExpanded1] = React.useState(true);
  // const [expanded2, setExpanded2] = React.useState(true);
  // method for expanding the content on the card
  // const handleExpand1Click = () => {
  //   setExpanded1(!expanded1);
  // };
  // const handleExpand2Click = () => {
  //   setExpanded2(!expanded2);
  // };

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
        {/* ERS Java Application */}
        <Grid item xs={12} component='article'>
          <Card>
            {/* Project image */}
            <CardMedia
              component='img'
              height='140'
              image={ersApp}
              alt='Image of employee reimbursement system application code'
              title='Image of employee reimbursement system application code'
            />

            {/* Title and short description of project */}
            <CardContent>
              <Typography gutterBottom variant='h5' component='h3'>
                Expense Reimbursement System - Java Backend
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                The overall goal of this project was to build a better
                understanding of the fundamentals of software development.
                Specifically, the purpose was to build an application that is
                meant to be an expense reimbursement system for employees
                allowing them to create tickets for reimbursement that will then
                either be approved or denied by a manager. Some of the
                technologies and packages that were used for this project were:
                Maven for project and dependency management, Javalin for
                creating the REST API along with SLF4J for logging and Jackson
                for parsing JSON. It also makes use of Docker for the
                containerization of the PostgreSQL database and uses the JDBC
                along with the PostgreSQL JDBC Driver to create connections
                between the Java application and the database. Testing has been
                added using JUnit and Mockito for testing and mocking unit
                tests, although no tests are currently implemented I have
                included these packages so that it can be added at a later time.
              </Typography>
            </CardContent>

            {/* Links and expand content buttons */}
            <CardActions>
              <IconButton
                color='inherit'
                aria-label='open github page'
                href='https://github.com/JonDunlap/Java_ERS_Backend'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </IconButton>
            </CardActions>

            <CardContent>
              {/* Purpose of the project */}
              <Typography paragraph variant='body2'>
                Purpose:
              </Typography>
              <Typography paragraph variant='body2' color='textSecondary'>
                The Expense Reimbursement System will manage the process of
                reimbursing employees for expenses incurred while on company
                time. All employees in the company can login and submit requests
                for reimbursement and view their past tickets and pending
                requests. Finance managers can log in and view all reimbursement
                requests and history for all employees in the company. Finance
                managers are authorized to approve and deny requests for expense
                reimbursement. Mandatory Requirements An Employee can: • Login.
                • View the employee home page. • Submit a reimbursement request.
                • View their pending reimbursement requests. • View their
                resolved reimbursement requests. A Manager can: • Login. • View
                the manager home page. • Approve/Deny pending reimbursement
                requests. • View all pending requests of all employees. • View
                all resolved requests of all employees.
              </Typography>
              {/* Outcome of the project */}
              <Typography paragraph variant='body2'>
                Roles/Responsibilities:
              </Typography>
              <Typography paragraph variant='body2' color='textSecondary'>
                {' '}
                • Created PostgreSQL database in a Docker container
              </Typography>
              <Typography paragraph variant='body2' color='textSecondary'>
                • Utilized Javalin to create a server for the Java application
              </Typography>
              <Typography paragraph variant='body2' color='textSecondary'>
                • Utilized JDBC to connect the Java application to the database
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                • Created a custom registration error handler to give the user
                an error message if a user already exists with the same email
                during registration
              </Typography>
              <Typography paragraph variant='body2' color='textSecondary'>
                • Used method overloading to handle retrieving either all user
                tickets, or tickets with a specific status if a query parameter
                is used
              </Typography>
              {/* Issues with the project */}
              <Typography paragraph variant='body2'>
                Issues:
              </Typography>
              <Typography paragraph variant='body2' color='textSecondary'>
                Overall, there are very few issues with this application,
                currently this only includes the backend API for this
                application and can only be accessed using a tool like Postman.
                There is currently an issue if a user makes a PUT/POST request
                without a body it is causing an exception due to Jackson
                databind not being able to handle a null body being sent, this
                is something I would like to research and eventually fix.
              </Typography>
            </CardContent>
            {/* </Collapse> */}

            {/* Divider Line */}
            <Divider variant='middle' />

            {/* Technologies used */}
            <CardContent>
              <Typography variant='body2'>Technologies:</Typography>
              <Chip variant='outlined' size='small' label='Javalin' />
              <Chip variant='outlined' size='small' label='Java' />
              <Chip variant='outlined' size='small' label='Maven' />
              <Chip variant='outlined' size='small' label='JDBC' />
              <Chip variant='outlined' size='small' label='PostgreSQL' />
              <Chip variant='outlined' size='small' label='Docker' />
            </CardContent>
          </Card>
        </Grid>

        {/* Workout Tracker - MERN Stack Application */}
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
                A simple MERN application that allows a user to add and remove
                workouts, with authentication and routes for individual users to
                create their own workouts. The backend makes use of Mongoose to
                talk to the MongoDB database as well as to authenticate that all
                data being passed to the controllers is valid, if it is not
                valid, an error will be presented to the user as well as using
                CSS to highlight the required fields. On the frontend it makes
                use of React useContext to interact with the API depending on
                the context that is passed to the reducer and carrying out the
                necessary request and then updating the state. The application
                makes use of JSON web tokens (JWT) as well as making use of the
                browsers local storage to authenticate and store the user data
                for their current session. I also wanted to learn more about
                actually hosting a MERN application and to the end the
                application is hosted online using Google Cloud Platform's
                compute engine VM. A demo is available by clicking the web icon
                below.
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
              {/* <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded1,
                })}
                color='inherit'
                onClick={handleExpand1Click}
                aria-expanded={expanded1}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton> */}
            </CardActions>

            {/* Collapsed content, detailed description of project */}
            {/* <Collapse in={expanded1} timeout='auto' unmountOnExit> */}
            <CardContent>
              {/* Purpose of the project */}
              <Typography paragraph variant='body2'>
                Purpose:
              </Typography>
              <Typography paragraph variant='body2' color='textSecondary'>
                This application was a chance for me to learn more about the
                MERN stack and how to implement it in my own projects as well as
                the steps necessary to actually host a web application. This
                presented me with a chance to learn how to deploy web
                applications using an actual web server rather than the hosting
                platforms that I have used previously, such as Heroku and GitHub
                Pages. This was my first time using NGINX and I was also able to
                learn how to use the Google Cloud Platform compute engine to
                host the application on an Ubuntu VM. The application itself is
                a simple workout tracker that allows users to input a workout as
                well as view and delete their previous workouts and I was able
                to implement authentication on the routes to protect the
                application and the data from unauthorized access.
              </Typography>

              {/* Outcome of the project */}
              <Typography paragraph variant='body2'>
                Outcome:
              </Typography>
              <Typography paragraph variant='body2' color='textSecondary'>
                Making use of Mongoose as the ODM, I was able to make a backend
                API that works with MongoDB's Cloud Atlas platform allowing
                users to create, read, update, and delete workouts with
                validation and error handling. On the frontend I was able to
                make use of React's Context, Reducer, and Effect hooks to handle
                the API calls and the state of the application. For the server I
                created an Ubuntu VM using the Google Compute Engine and was
                able to use NGINX as the reverse proxy to serve the application.
                I also setup and used a private key for connecting to the server
                as well as removing the root account and the ability to connect
                using a password so that the server could be more secure. Making
                use of an SSL certificate that I had available I was able to
                register and use a subdomain on my current website and make the
                website use HTTPS for a more secure connection. This was a good
                tutorial and I was able to take it further by actually deploying
                the application and making it publicly available.
              </Typography>

              {/* Issues with the project */}
              <Typography paragraph variant='body2'>
                Issues:
              </Typography>
              <Typography paragraph variant='body2' color='textSecondary'>
                I need to look into how to better implement my routes in NGINX
                since I am having an issue forwarding HTTP requests to the HTTPS
                port.
              </Typography>
            </CardContent>
            {/* </Collapse> */}

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
      </Grid>
    </Grid>
  );
}
