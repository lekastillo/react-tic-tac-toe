import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


export default function Layout(props) {
  
  const classes = useStyles();

    return (
      <div>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <TypoGraphy color="inherit">
              Tic Tac Toe
            </TypoGraphy>
            <NavBar />
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" component="main" className={classes.heroContent}>
            {props.children}
        </Container>
      </div>
    );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  }
}));