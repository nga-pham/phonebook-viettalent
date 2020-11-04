import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  listItemLabel: {
    fontSize: "1.5em",
    color: "rgba(0, 0, 0, 0.6)",
  },
  listItemContent: {
    fontSize: "2em",
  },
};

const createData = (label, content) => {
  return {
    label,
    content,
  };
};

const rows = [
  createData("name", "Hai"),
  createData("Di động", "3646"),
  createData("Công việc", "6364"),
  createData("Iphone", "42636"),
];
class _ItemDetailCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    if (this.props.key !== nextProps.key) return true;
    else return false;
  }

  componentDidUpdate() {
    console.log("rerender");
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={0} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              alt="name"
              src="https://i.insider.com/5dbc7a5184991317e30e8b4b?width=900&format=jpeg&auto=webp"
              className={classes.large}
            />
          }
          title="Name"
        />

        <CardContent>
          <List>
            <ListItemText>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.label}
                    </TableCell>
                    <TableCell align="left">{row.content}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </ListItemText>
          </List>
        </CardContent>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  const { key, data } = state;
  return {
    key: 1,
    data,
  };
};

const ItemDetailCard = connect(
  mapStateToProps,
  null
)(withStyles(styles)(_ItemDetailCard));

export default ItemDetailCard;
