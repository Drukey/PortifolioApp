import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style = {{ background: 'grey' }}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
           
          </IconButton>
          <Typography  className={classes.title} variant="h5" noWrap align = "center">
             
              
               <Typography>
                &reg; {new Date().getFullYear()} DrukeySoftTech
                </Typography>
            
          </Typography>
         
          
          <h12>v1.0</h12>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}





























// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';


// export default function Footer() {
//   return (
//        <Footer>
//         <Box
//           px = {{xs: 3, sm: 10 }} 
//           py = {{xs: 5, sm: 10 }} 
//           bgcolor = "text.secondary"
//           color = "white"
//         >
        
//         <Container maxWidth = "lg">
//           <Grid container spacing = {5}>
//             <Grid item xs = {12} sm = {4} >
//              <Box>
//               <Link href = "/" color = "inherit"> 
//                 Contact
//                 </Link>
//                   </Box>  
//                <Box>
//               <Link href = "/" color = "inherit"> 
//                      Suppport
//                    </Link>
//                   </Box>  
//                   <Box>
//                    <Link href = "/" color = "inherit"> 
//                      Privacy
//                    </Link>
//                   </Box>                  
//                 </Grid>

//                  <Grid item xs = {12} sm = {4} >
//                    <Box>
//                     <Link href = "/" color = "inherit"> 
//                      Link 1
//                      </Link>
//                     </Box>  
//                   <Box>
//                    <Link href = "/" color = "inherit"> 
//                    Link 1
//                    </Link>
//                   </Box>  
//                   <Box>
//                    <Link href = "/" color = "inherit"> 
//                    Link 1
//                    </Link>
//                   </Box>                  
//                 </Grid>     

//                  <Grid item xs = {12} sm = {4} >
//                    <Box>
//                     <Link href = "/" color = "inherit"> 
//                     Link 2
//                      </Link>
//                     </Box>  
//                   <Box>
//                    <Link href = "/" color = "inherit"> 
//                    Link 2
//                    </Link>
//                   </Box>  
//                   <Box>
//                    <Link href = "/" color = "inherit"> 
//                    Link 2
//                    </Link>
//                   </Box>                  
//                 </Grid>     
//             </Grid>

//             <Box textAlign ="center" 
//             pt = {{ xs: 5, sm: 10}} 
//             pb = {{ xs: 5, sm: 0}}>
//             DST &reg; {new Date().getFullYear()}
//             </Box>
//         </Container>
//       </Box>
//    </Footer>
//   )   
// }
