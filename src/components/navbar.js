import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GTranslateOutlinedIcon from '@material-ui/icons/GTranslateOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  appBar : {
    background : "#2B2D42",
    color : "#fff",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
        <GTranslateOutlinedIcon />
          <Typography color="inherit" variant = "h4" className={classes.title}>
            CoBeds
          </Typography>
          <InfoOutlinedIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
}
