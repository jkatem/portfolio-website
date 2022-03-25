import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({

  mainNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    // background: 'blue'
  },
  navLink: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
    padding: '0 10px',
  },

  toolbar: {
    padding: '5px 5%',
    background: 'blue'
  },

}))

const Header = () => {
  
  const classes = useStyles();

  return (
    <>
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.mainNav}>
          <h3>JENNIFER MIAO | SOFTWARE ENGINEER</h3>
          <NavLink to='/home' className={classes.navLink}>Home</NavLink>
          <NavLink to='/about' className={classes.navLink}>About</NavLink>
          <NavLink to='/projects' className={classes.navLink}>projects</NavLink>
        </div>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Header

