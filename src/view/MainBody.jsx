import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ItemDetailCard from "../PhoneBookList/detailView";
import FormInsert from "../PhoneBookList/insertView";
import PhoneBookList from "../PhoneBookList/listView";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRight: "1px solid #000",
    borderBottom: "1px solid #000",
    height: "100vh",
  },
}));

function MainBody() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={4}>
        <Box className={classes.box}>
          <FormInsert />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.box}>
          <PhoneBookList />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.box}>
          <ItemDetailCard />
        </Box>
      </Grid>
    </Grid>
  );
}

export default MainBody;
