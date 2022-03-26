import React from "react";
import Typography from '@material-ui/core/Typography';
import { NavLink, Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import StyledLink from '../StyledLink';

const useStyles = makeStyles(theme => ({
    main: {
      backgroundColor: '#C4C4C4',
      padding: theme.spacing(3),
    },
    linkBlock: {
      '& > *': {
        marginBottom: theme.spacing(1),
      },
    },
    header: {
      fontWeight: 'bold',
    },
    bottom: {
      marginTop: theme.spacing(4),
    },
}));

  
function Footer() {

  const classes = useStyles();

  return (
    <>
        <Grid className="Footer">
      <Grid className={classes.main} container>  
          <Grid
            className={classes.linkBock}
            container
            item
            xs={6}
            direction="column"
            alignItems="flex-start"
          >
          <span>
            <a href="https://github.com/jkatem">Github</a>&nbsp;&nbsp;
            <a href="https://linkedin.com/in/jenmiao">Linkedin</a>&nbsp;&nbsp;
          </span>  
          </Grid>        
        </Grid>
    </Grid>
    </>

  );
};


           /* <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink> */

export default Footer;

{/* <Typography             
              className={classes.header} align="center" 
              gutterBottom>Jennifer Miao's Website 
            </Typography>  */}