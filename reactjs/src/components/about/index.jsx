import React from 'react';

import Grid from '@material-ui/core/Grid';

export default function About() {
  return (
    <Grid item id='about' component='section'>
      <h2>About Me</h2>
      <p>
        I am a military veteran with 11 years of experience in the Army, I am
        looking to take my experience as well as my schooling and begin a career
        as a Full Stack Java Developer. I graduated with honors and received a
        Bachelor of Science in Web Development from Full Sail University where I
        completed several full-stack web applications during my time as a
        student. I love learning, and sharing my skills with others is what
        drives me to continue to learn and teach, it is the biggest reason I
        have gotten into being a developer. The fact that this job is always
        growing and constantly changing, and the fact that there is just so much
        to learn that it will always be interesting.
      </p>
      <p>
        With additional training, I have also been able to hone the skills
        necessary to effectively use Java along with PostgreSQL, HTML, CSS, and
        Angular to create large applications that have real-world applications
        in businesses throughout multiple sectors. I have also learned the
        skills and tools necessary for working in large groups, along with the
        planning and coordination that is required to complete a large project.
      </p>
      <h3>Interesting Facts About Myself:</h3>
      <ul>
        <li>
          I have read the entire 14 books of the Wheel of Time series by Robert
          Jordan and Brandon Sanderson at least 3 times
        </li>
        <li>
          This winter was the first time I have ever gone skiing and I have
          fallen in love with it already
        </li>
        <li>
          I lived in Thailand for 4 years with my wife and our family where we
          traveled around visiting most of Thailand
        </li>
      </ul>
    </Grid>
  );
}
