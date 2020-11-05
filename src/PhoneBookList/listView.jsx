import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";
import { chooseItem } from "./action";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    padding: 0,
  },
  listItemText: {
    color: "#000",
    fontSize: "2em",
  },
}));

function _PhoneBookList(props) {
  const classes = useStyles();

  const chooseItem = (index) => {
    props.chooseItem(index);
  };

  const { data } = props;
  return (
    <List
      component="nav"
      aria-label="secondary mailbox folders"
      classes={{ primary: classes.root }}
    >
      {data.map((item, index) => (
        <>
          <ListItem button key={index} onClick={() => chooseItem(index)}>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={item.name}
            />
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
}

const mapStateToProps = (state) => {
  const { data } = state;
  return {
    data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseItem: (key) => dispatch(chooseItem(key)),
  };
};

const PhoneBookList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PhoneBookList);

export default PhoneBookList;
