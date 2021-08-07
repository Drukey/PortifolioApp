import * as React from 'react';
import {  makeStyles, useTheme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';



import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import CardActionArea from '@material-ui/core/CardActionArea';

import fred from '../img/bip.jpg'; // with import


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function AboutMe() {
  const classes = useStyles();  

  return (
    <div className="cardContainer">
      <div className = "featuredItems">  
      <Card>
      <CardActionArea>
        <div>
        <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>

        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
           Hi there,
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            I'm a University of Dodoma graduate,
          </Typography> */}
          

        
          <Typography gutterBottom variant="h5" component="h2">
          PROFILE
          <Typography variant="body2" color="textSecondary" component="h3">
          Hi there! my name is Fred, I'm a software developer. A motivated, highly organized and
          responsible computing IT personnel
          who utilizes professional
          and technical skills developed through
          completion in my tasks. I’m very
          diligence and multitasking adn responsible Individual.
          </Typography>
          </Typography>
         
 
          <Typography gutterBottom variant="h5" component="h2">
          PROFFESIONAL EXPERIENCE
          <Typography variant="body2" color="textSecondary" component="h3">
            BUNI INTERNSHIP PROGRAM (COSTECH) <br/>
            From July 2019 - September 2019 <br/>
            • Technology Entrepreneurship<br/>
            • Developed new solutions and products using Agile Product
              Development<br/>
            • Top level and stakeholders interactions<br/>
            • System requirement gathering<br/>
            • Pitching ideas
          </Typography>
          </Typography>



          <Typography gutterBottom variant="h5" component="h2">
              ACHIEVEMENTS
            <Typography variant="body2" color="textSecondary" component="h3">
            • Developed 10+ plus Android/iOS applications.<br/>
            - Tour Guide Finder, USSD TANZANIA, Google Maps Chats,
            Search Recipe<br/>
            
            <Button size="small" color="primary" href = " https://github.com/Drukey">
              GitHub
            </Button>

            <Button size="small" color="primary" href = " https://recipeforfood.netlify.app/">
            Recipe for Food App
            </Button>

            <Button size="small" color="primary" href = " https://play.google.com/store/apps/developer?id=Giltwizy&hl=en&gl=US">
            Google Play
            </Button>

           </Typography>

          </Typography>
     
         

        </CardContent>

        </Grid>
        
        
        <Grid item xs={6}>
        <CardMedia className = "myAvatar"
          component="img"
          alt="DB"
          height="500"
          img src = {fred} className= "App" alt = "Logo"  
          title="BD"
        />
        </Grid>
       
      </Grid>
    </div>
        </div>
     </CardActionArea>
    </Card>
   </div>
 </div>

  )
    
}







