import React from 'react';
import '../css/styles.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'

import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function TextBar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  
  return (
    <div className="cardContainer">
      <div className = "featuredItems"> 
      <Card variant="outlined">
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CallIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary="+255 " />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
      
        <ListItemAvatar>
          <Avatar>
            <GitHubIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Github" secondary="Jan 7, 2014" />
      
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WhatsAppIcon />
          </Avatar>
         </ListItemAvatar>
        <ListItemText primary="WhatsApp" secondary="+255 743 440 090" />
       </ListItem>
      </List>
     </Card>                             
    </div>
 </div>         
  );
}