import React from "react";
import Typography from '@material-ui/core/Typography';
import { NavLink, Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    main: {
      backgroundColor: '#C4C4C4',
      padding: theme.spacing(2),
      position: "fixed",
      left: 0,
      bottom: 0,
      right: 0,
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
    links: {
      padding: '5px', 
      color: 'black'
    }
}));

  
function Footer() {

  const classes = useStyles();

  return (
    <footer className="Footer">
      <Grid className={classes.main} container>
        <Grid container>
          <Grid
            className={classes.linkBlock}
            container
            item
            xs={6}
            direction="row"
            alignItems="flex-start"
          >
            <a className={classes.links} href='https://www.linkedin.com/in/jenmiao'>LinkedIn</a>
            <a className={classes.links} href='https://github.com/jkatem'>Github</a>
          </Grid>
        </Grid>
      </Grid>
    </footer>
    // <>
    //     <Grid className="Footer">
    //   <Grid className={classes.main} container>  
    //       <Grid
    //         className={classes.linkBock}
    //         container
    //         item
    //         xs={6}
    //         direction="column"
    //         alignItems="flex-start"
    //       >
    //       <span>
    //         <a href="https://github.com/jkatem">Github</a>&nbsp;&nbsp;
    //         <a href="https://linkedin.com/in/jenmiao">Linkedin</a>&nbsp;&nbsp;
    //       </span>  
    //       </Grid>        
    //     </Grid>
    // </Grid>
    // </>

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