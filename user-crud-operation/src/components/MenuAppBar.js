import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';
import {useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkColor:{
    color:"#fff"
  }
}));

export default function MenuAppBar() {
  const history = useHistory();
  const classes = useStyles();
  const openAddUserDailog = (event) => {
    event.preventDefault();
    history.push("/add");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            User List
          </Typography>
          <Link  onClick={openAddUserDailog} style={{color:"#fff",cursor:"pointer"}}>
            Add User
          </Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
