import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    box: {
        padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRight: '1px solid #000',
      borderBottom: '1px solid #000',
      height: '100vh'
    },
  }));

function MainBody() {
    const classes = useStyles();
        return (
            <Grid container>
        <Grid item xs={4}>
          <Box className={classes.box}>Them</Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={classes.box}>List</Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={classes.box}>Edit box</Box>
        </Grid>
      </Grid>
        )
}

export default MainBody