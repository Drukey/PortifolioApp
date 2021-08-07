import React from 'react';
import '../css/styles.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import dba from '../img/dba.jpg';
import gd from '../img/gd.jpg';
import frontend from '../img/frontend.jpg';


export default function InfoCards() {
  return (
    <div className="cardContainer">
      <div className = "featuredItems">  
      <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="DB"
          height="140"
          img src = {dba} className= "App" alt = "Logo"  
          title="BD"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Database
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            MySQL • MsSQL • ORACLE • Firebase • AWS
          </Typography>
        </CardContent>
      </CardActionArea>
      
      
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </div>
      

      <div className = "featuredItems">  
          <div className = "alignItems">
                

          <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Serverside Lang"
          height="140"
          img src = {frontend}
          title="Front End Developer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            FrontEnd/BackEnd
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            CSS • BOOTSTRAP • REACT.JS • MATERIAL UI • REACT-NATIVE.JS • JAVA • JAVASCRIPT • PHP
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

          </div>
      </div>


      <div className = "featuredItems">  
      <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Styles"
          height="140"
          img src = {gd}
          title="Contemplative Reptile"
        />
        <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
          Graphics Design
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ad PHOTOSHOP • Ad ILLUSTRATOR • VEGAS PRO
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </div>
         
    </div>
  );
}
