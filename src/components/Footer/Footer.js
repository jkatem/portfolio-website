import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import StyledLink from '../StyledLink';

const useStyles = makeStyles((theme: Theme) => {
  return {
    main: {
      backgroundColor: '#C4C4C4',
      padding: theme.spacing(5),
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
  };
});

  
function Footer() {

  const classes = useStyles();

  return (
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
            <Typography 
              className={classes.header} align="center" 
              gutterBottom>Jennifer Miao's Website
            </Typography>
            <StyledLink to="/About">About</StyledLink>
          </Grid>

            {/* <FooterLink href="#">
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
            </FooterLink> */}
        </Grid>
    </Grid>
  );
};
export default Footer;